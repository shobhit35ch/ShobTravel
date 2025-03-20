
import { useEffect, useState, memo } from 'react';
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

interface AdSpaceProps {
  location: string;
  className?: string;
}

type Ad = Database['public']['Tables']['ads']['Row'];
type AdSpaceJoin = {
  id: string;
  current_ad_id: string | null;
  ads: Ad[];
};

const AdSpace = memo(({ location, className = "" }: AdSpaceProps) => {
  const [adData, setAdData] = useState<Ad | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAd = async () => {
      try {
        const { data: adSpace, error } = await supabase
          .from('ad_spaces')
          .select(`
            id,
            current_ad_id,
            ads (*)
          `)
          .eq('location', location)
          .eq('active', true)
          .maybeSingle() as { data: AdSpaceJoin | null, error: any };

        if (error) {
          console.error('Error loading ad:', error);
          return;
        }

        if (adSpace?.ads?.[0]) {
          setAdData(adSpace.ads[0]);
          // Track impression in background
          setTimeout(() => {
            try {
              supabase.rpc('track_ad_impression', {
                ad_id: adSpace.ads[0].id
              });
            } catch (err) {
              console.error('Error tracking impression:', err);
            }
          }, 100);
        }
      } catch (error) {
        console.error('Error loading ad:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAd();
  }, [location]);

  if (isLoading) {
    return <div className={`ad-space ${className} bg-gray-100 animate-pulse`} />;
  }

  if (!adData) {
    return <div className={`ad-space ${className}`} />;
  }

  const handleClick = () => {
    // Track click in background
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
        <img 
          src={adData.image_url} 
          alt={adData.alt_text || 'Advertisement'} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </a>
    </div>
  );
});

export default AdSpace;
