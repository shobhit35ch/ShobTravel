
import { useEffect, useState } from 'react';
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

const AdSpace = ({ location, className = "" }: AdSpaceProps) => {
  const [adData, setAdData] = useState<Ad | null>(null);

  useEffect(() => {
    const loadAd = async () => {
      try {
        const { data: adSpace } = await supabase
          .from('ad_spaces')
          .select(`
            id,
            current_ad_id,
            ads (*)
          `)
          .eq('location', location)
          .eq('active', true)
          .maybeSingle() as { data: AdSpaceJoin | null };

        if (adSpace?.ads?.[0]) {
          setAdData(adSpace.ads[0]);
          // Track impression
          await supabase.rpc('track_ad_impression', {
            ad_id: adSpace.ads[0].id
          });
        }
      } catch (error) {
        console.error('Error loading ad:', error);
      }
    };

    loadAd();
  }, [location]);

  if (!adData) {
    return <div className={`ad-space ${className}`} />;
  }

  return (
    <div className={`ad-space ${className}`}>
      <a 
        href={adData.destination_url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={async () => {
          try {
            await supabase.rpc('track_ad_click', {
              ad_id: adData.id
            });
          } catch (error) {
            console.error('Error tracking click:', error);
          }
        }}
      >
        <img 
          src={adData.image_url} 
          alt={adData.alt_text || 'Advertisement'} 
          className="w-full h-full object-cover"
        />
      </a>
    </div>
  );
};

export default AdSpace;
