
import { useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface AdSpaceProps {
  location: string;
  className?: string;
}

const AdSpace = ({ location, className = "" }: AdSpaceProps) => {
  useEffect(() => {
    const loadAd = async () => {
      try {
        // Get active ad for this location
        const { data: adSpace } = await supabase
          .from('ad_spaces')
          .select(`
            *,
            ads:current_ad_id (
              id,
              image_url,
              destination_url,
              alt_text,
              campaign_id
            )
          `)
          .eq('location', location)
          .eq('active', true)
          .single();

        if (adSpace?.ads) {
          // Track impression
          await supabase.rpc('track_ad_impression', {
            ad_id: adSpace.ads.id
          });
        }
      } catch (error) {
        console.error('Error loading ad:', error);
      }
    };

    loadAd();
  }, [location]);

  return (
    <div className={`ad-space ${className}`}>
      {/* Ad content will be loaded dynamically */}
    </div>
  );
};

export default AdSpace;
