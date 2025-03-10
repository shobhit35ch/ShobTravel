import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AdSpace from "@/components/ads/AdSpace";
import { BackToBlog } from "@/components/blog/BackToBlog";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogContent } from "@/components/blog/BlogContent";

const blogPosts = {
  "banff-memorial-weekend-2024": {
    title: "Memorial Weekend Adventure: Discovering Banff's Natural Wonders",
    date: "May 30, 2024",
    content: `
      Taking advantage of the long Memorial Day weekend, I embarked on a journey to Banff National Park, one of Canada's most pristine natural treasures. This trip was a perfect blend of adventure and natural beauty, packed into four unforgettable days.

      Day 1: Arrival and Lake Louise
      After landing in Calgary and driving to Banff, my first stop was the iconic Lake Louise. The turquoise waters against the backdrop of Victoria Glacier were even more spectacular than I imagined. I spent the afternoon hiking the Lake Agnes Tea House trail, rewarding myself with a hot cup of tea and fresh scones at the top.

      Day 2: Moraine Lake and Valley of the Ten Peaks
      The early morning drive to Moraine Lake was well worth it. The Valley of the Ten Peaks provided a stunning backdrop for what many consider the most beautiful lake in the Canadian Rockies. I took the Rockpile Trail for the classic viewpoint and later canoed on the pristine waters.

      Day 3: Johnston Canyon and Banff Town
      Explored the fascinating Johnston Canyon, walking along suspended catwalks to view both the Lower and Upper Falls. The afternoon was spent exploring Banff town, riding the Banff Gondola for panoramic mountain views, and relaxing in the Banff Upper Hot Springs.

      Day 4: Sunrise at Two Jack Lake and Departure
      My final morning was spent catching the sunrise at Two Jack Lake, where the still waters perfectly reflected the surrounding mountains. It was a peaceful way to end an action-packed weekend in the Canadian Rockies.

      Travel Tips:
      - Book accommodations well in advance for Memorial Day weekend
      - Start early to avoid crowds at popular spots
      - Rent a car for maximum flexibility
      - Pack layers as mountain weather can be unpredictable
      - Don't forget bear spray for hiking
    `,
    imageUrl: "/lovable-uploads/230e8e59-f044-442a-9e84-f783643253eb.png"
  },
  "europe-adventure-2024": {
    title: "European Alpine Adventure: Italy, Switzerland, and Iceland",
    date: "June 15, 2024",
    content: `
      A month-long journey through some of Europe's most breathtaking landscapes, combining the charm of Italian towns, the majesty of Swiss Alps, and the raw beauty of Iceland.

      Italy (2 weeks):
      Starting in the Dolomites, I spent days hiking through the jagged peaks and enjoying authentic mountain refugios. The highlights included the Tre Cime di Lavaredo circuit and the charming town of Cortina d'Ampezzo. Later, I explored Lake Como, taking boats to picturesque villages and enjoying the Italian lake life.

      Switzerland (1 week):
      The Swiss portion of my trip centered around the Jungfrau region. Based in Lauterbrunnen, I witnessed the power of 72 waterfalls in the valley, took the train to Jungfraujoch - Top of Europe, and hiked the spectacular Eiger Trail. The Swiss efficiency and stunning Alpine views were unmatched.

      Iceland (1 week):
      The grand finale in Iceland was a perfect contrast to the Alpine landscapes. I drove the Ring Road, experiencing the midnight sun, powerful waterfalls like Skógafoss and Seljalandsfoss, and the otherworldly landscapes of the Diamond Beach. The trip concluded with a relaxing dip in the Blue Lagoon.

      Key Takeaways:
      - Each country offered a unique perspective on mountain landscapes
      - Weather varied dramatically between locations
      - Public transportation in Switzerland was exceptional
      - Iceland's raw nature provided a perfect contrast to the cultivated Alpine regions
    `,
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  },
  "aruba-summer-2024": {
    title: "Caribbean Paradise: Summer in Aruba",
    date: "August 10, 2024",
    content: `
      One Happy Island - that's what Aruba calls itself, and after spending a week here, I completely understand why. This Caribbean gem offered the perfect balance of relaxation and adventure.

      Eagle Beach and Palm Beach:
      Started my mornings with walks along Eagle Beach, consistently ranked among the world's best beaches. The iconic fofoti trees and pristine white sand created perfect photo opportunities. Palm Beach offered a more lively atmosphere with water sports and beachfront restaurants.

      Island Adventures:
      - Explored Arikok National Park in a UTV, discovering hidden beaches and natural pools
      - Snorkeled at Mangel Halto, seeing vibrant coral reefs and tropical fish
      - Visited the California Lighthouse for stunning sunset views
      - Took a sunset sailing cruise along the coast

      Cultural Experiences:
      - Explored the colorful streets of Oranjestad
      - Visited the Alto Vista Chapel
      - Enjoyed local cuisine at Zeerovers
      - Experienced the weekly Carubbian Festival

      Tips for Visiting Aruba:
      - The trade winds make the heat manageable
      - Book water activities in advance during peak season
      - Try local dishes like fresh fish and funchi
      - Consider staying in Eagle Beach for a quieter experience
      - Don't miss the Thursday night cultural festival in San Nicolas
    `,
    imageUrl: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151"
  },
  "northern-europe-2023": {
    title: "Northern European Journey: Iceland, Netherlands, and Belgium",
    date: "August 25, 2023",
    content: `
      A summer adventure combining Iceland's natural wonders with the cultural richness of the Low Countries. This three-week journey offered an incredible contrast between dramatic landscapes and historic cities.

      Iceland (1 week):
      The land of fire and ice didn't disappoint. Highlights included:
      - Golden Circle tour featuring Gullfoss, Geysir, and Þingvellir National Park
      - Black sand beaches of Reynisfjara
      - Whale watching from Húsavík
      - Relaxing in the Blue Lagoon
      - Exploring Reykjavik's unique culture and cuisine

      Netherlands (1 week):
      Moving to the Netherlands provided a complete change of scenery:
      - Explored Amsterdam's historic canals by boat
      - Visited the Van Gogh Museum and Rijksmuseum
      - Day trips to traditional villages like Zaanse Schans and Volendam
      - Cycling through the countryside to see windmills
      - Visited the vibrant Rotterdam Market Hall

      Belgium (1 week):
      Concluded the trip in Belgium's medieval cities:
      - Explored Bruges' perfectly preserved medieval center
      - Chocolate tasting in Brussels
      - Visited the historic battlefields of Flanders
      - Experienced Ghent's amazing food scene
      - Explored Antwerp's diamond district

      Travel Tips:
      - Summer in Iceland means midnight sun - bring an eye mask
      - Get an OV-chipkaart for easy travel in the Netherlands
      - Book museums in advance, especially in Amsterdam
      - Try local specialties: Icelandic hot dogs, Dutch stroopwafels, and Belgian frites
    `,
    imageUrl: "/lovable-uploads/a0c8d7e6-a4a6-4e47-913b-d212f9ade26d.png"
  },
  "rome-eternal-city-2024": {
    title: "Rome: Eternal City's Hidden Gems and Must-See Wonders",
    date: "March 15, 2024",
    content: `
      After years of dreaming about visiting Rome, I finally made it to the Eternal City. This trip exceeded all expectations, combining iconic landmarks with hidden local spots that made me fall in love with Roma.

      The Trevi Fountain at Dawn:
      Starting my days early proved to be the best decision. Arriving at the Trevi Fountain just as the sun rose meant I could experience this magnificent baroque masterpiece without the usual crowds. The morning light playing off the water and the intricate sculptures created a magical atmosphere that photos barely capture.

      Must-Do Rome Tips:
      - Visit major attractions early morning or late evening
      - Get the Roma Pass for transport and museum access
      - Try local pasta at trattorias away from tourist spots
      - Take a walking tour of the Jewish Ghetto
      - Don't miss aperitivo time (6-8 PM)

      Beyond the Tourist Trail:
      While the Colosseum and Vatican are must-sees, Rome's real charm lies in its quieter neighborhoods. Trastevere's winding streets, Monti's artisan shops, and the orange gardens of Aventine Hill showed me a different side of the city.

      Food Journey:
      - Morning cappuccino at Sant'Eustachio Il Caffè
      - Pasta alla Carbonara at Da Enzo
      - Gelato at Fatamorgana
      - Pizza al taglio at Bonci Pizzarium

      Travel Tips:
      - Book major attractions in advance
      - Carry a water bottle (use public fountains)
      - Learn basic Italian phrases
      - Wear comfortable walking shoes
      - Respect dress codes for churches
    `,
    imageUrl: "/lovable-uploads/05d07f01-1fcb-4671-ae21-0ad4391dcec5.png"
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-display text-primary">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 max-w-3xl"
      >
        <BackToBlog />
        <BlogHeader 
          imageUrl={post.imageUrl}
          title={post.title}
          date={post.date}
        />
        <BlogContent content={post.content} />

        <div className="mt-8 space-y-8">
          <AdSpace location="post-bottom" className="w-full h-[90px]" />
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPost;
