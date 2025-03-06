import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AdSpace from "@/components/ads/AdSpace";

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
        className="container mx-auto px-4 py-16 max-w-5xl"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <Link
              to="/blog"
              className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Blog
            </Link>
            
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <span className="text-accent font-medium">{post.date}</span>
            <h1 className="text-4xl font-display text-primary mt-2 mb-8">{post.title}</h1>
            
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-primary/80 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          <aside className="w-full lg:w-64 space-y-8">
            <AdSpace location="post-sidebar-top" className="w-full h-[300px]" />
            <AdSpace location="post-sidebar-bottom" className="w-full h-[300px]" />
          </aside>
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPost;
