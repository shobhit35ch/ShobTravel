
import { useEffect, useState, memo, useRef } from 'react';
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

interface AdSpaceProps {
  location: string;
  className?: string;
}

type Ad = Database['public']['Tables']['ads']['Row'];

const AdSpace = memo(({ location, className = "" }: AdSpaceProps) => {
  const [adData, setAdData] = useState<Ad | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const adLoaded = useRef(false);

  useEffect(() => {
    // Prevent multiple load attempts
    if (adLoaded.current) return;
    
    const loadAd = async () => {
      try {
        adLoaded.current = true;
        
        // First try to get a direct ad for this location
        const { data: ad, error: adError } = await supabase
          .from('ads')
          .select('*')
          .eq('active', true)
          .limit(1)
          .maybeSingle();
        
        if (ad) {
          setAdData(ad);
          // Track impression in background
          setTimeout(() => {
            try {
              supabase.rpc('track_ad_impression', {
                ad_id: ad.id
              });
            } catch (err) {
              console.error('Error tracking impression:', err);
            }
          }, 100);
        } else {
          console.log('No direct ad found, falling back to ad space lookup');
          
          try {
            // First fetch an active campaign
            const { data: campaignData } = await supabase
              .from('ad_campaigns')
              .select('id')
              .eq('active', true)
              .limit(1)
              .single();
              
            if (campaignData?.id) {
              // If we found an active campaign, get an ad from it
              const { data: adFromCampaign } = await supabase
                .from('ads')
                .select('*')
                .eq('campaign_id', campaignData.id)
                .eq('active', true)
                .limit(1)
                .maybeSingle();
                
              if (adFromCampaign) {
                setAdData(adFromCampaign);
                // Track impression
                setTimeout(() => {
                  try {
                    supabase.rpc('track_ad_impression', {
                      ad_id: adFromCampaign.id
                    });
                  } catch (err) {
                    console.error('Error tracking impression:', err);
                  }
                }, 100);
              }
            }
          } catch (fetchError) {
            console.error('Error fetching campaign or ad:', fetchError);
          }
        }
      } catch (error) {
        console.error('Error loading ad:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Delay ad loading to prioritize core content
    setTimeout(loadAd, 300);
  }, [location]); // Only reload if location changes

  if (isLoading) {
    return <div className={`ad-space ${className} bg-gray-100`} />; // Removed animate-pulse for better performance
  }

  if (!adData) {
    return <div className={`ad-space ${className}`} />;
  }

  const handleClick = () => {
    // Track click in background without blocking
    setTimeout(() => {
      try {
        supabase.rpc('track_ad_click', {
          ad_id: adData.id
        });
      } catch (err) {
        console.error('Error tracking click:', err);
      }
    }, 0);
  };

  return (
    <div className={`ad-space ${className}`}>
      <a 
        href={adData.destination_url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {/* Add loading="lazy" and decoding="async" for better performance */}
        <img 
          src={adData.image_url} 
          alt={adData.alt_text || 'Advertisement'} 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
  );
});

export default AdSpace;
