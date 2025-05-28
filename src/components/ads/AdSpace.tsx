
import { useEffect, useState, memo, useRef } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface AdSpaceProps {
  location: string;
  className?: string;
}

interface Ad {
  id: string;
  image_url: string;
  destination_url: string;
  alt_text: string | null;
  active: boolean;
  campaign_id: string | null;
}

const AdSpace = memo(({ location, className = "" }: AdSpaceProps) => {
  const [adData, setAdData] = useState<Ad | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const adLoaded = useRef(false);

  useEffect(() => {
    if (adLoaded.current) return;
    
    const loadAd = async () => {
      try {
        adLoaded.current = true;
        
        const { data: ads } = await supabase
          .from('ads')
          .select('id, image_url, destination_url, alt_text, active, campaign_id')
          .eq('active', true)
          .limit(1);
        
        if (ads && ads.length > 0) {
          const ad = ads[0];
          setAdData(ad);
          
          // Track impression
          setTimeout(() => {
            supabase.rpc('track_ad_impression', { ad_id: ad.id }).catch(console.error);
          }, 100);
        }
      } catch (error) {
        console.error('Error loading ad:', error);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(loadAd, 300);
  }, [location]);

  if (isLoading) {
    return <div className={`ad-space ${className} bg-gray-100`} />;
  }

  if (!adData) {
    return <div className={`ad-space ${className}`} />;
  }

  const handleClick = () => {
    setTimeout(() => {
      supabase.rpc('track_ad_click', { ad_id: adData.id }).catch(console.error);
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
          decoding="async"
        />
      </a>
    </div>
  );
});

export default AdSpace;
