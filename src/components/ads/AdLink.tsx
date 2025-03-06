
import { supabase } from "@/integrations/supabase/client";

interface AdLinkProps {
  adId: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}

const AdLink = ({ adId, href, children, className = "" }: AdLinkProps) => {
  const handleClick = async () => {
    try {
      await supabase.rpc('track_ad_click', {
        ad_id: adId
      });
    } catch (error) {
      console.error('Error tracking click:', error);
    }
    window.open(href, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default AdLink;
