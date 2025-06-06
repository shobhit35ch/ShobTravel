import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AdSpace from "@/components/ads/AdSpace";
import { BackToBlog } from "@/components/blog/BackToBlog";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogContent } from "@/components/blog/BlogContent";

const blogPosts = {
  "guatemala-lake-atitlan-2024": {
    title: "Full Send to Lake Atitlan: Guatemala's Hidden Paradise",
    date: "March 17, 2024",
    content: `
      Originally I saw a bunch of reels online about this insane looking lake in Guatemala, and decided to full it send it with 2 of my buddies. This place is Lake Atitlan, and boy was it completely worth it.

      For a lot of the trips that I have taken, its really just been viewing it on reels or searching up cool views with either mountains/lakes, and full sending it. Ironically I did have a buddy who did a whole week last year, and he said he had a complete blast, so that basically pushed me into booking flights.

      I ended up using a mixture of amex and bilt points on this trip, so the total for a round trip ended up being only 87 USD from IAD - GUA round trip. We went March 13-17, and im actually writing this while in the gorgeous airbnb that we booked. I have heard lots of Antigua but because of PTO constraints, we actually are only in Lake Atitlan for this trip.

      Now I want to address something that I was very nervous about coming here, safety. I have done some research prior and seen some posts claiming that it is very unsafe, but in my experience, I felt perfectly fine. Now, this is also my experience as a guy in my mid 20s with 3 of my buddies, and also my skin complexion isn't that different from the folks here lol, so I definitely DONT want to state this as a fact, but I felt very safe and calm here, just practice caution like with any new country.

      Now, we did not go out in Guatemala City because our hotel driver advised against this, so there is something to note there, but the safety rating of lake atitlan is way higher than Guatemala City. We basically did one night at an airport hotel (because we landed in the night time) followed by a 3 hour drive to lake atitlan the next morning.

      One thing for sure, this place is beauuuutiful, the views are just stunning, it felt a bit similar to Lake Como actually. Very calm water, and the weather was perfect. A local was saying that this area was prime summer season, and that adds up. We stayed at Casa Verapaz, which is near the main town of Panajachel.

      In order to get around, you ride in these tuk tuks, basically rickshaws. Our first main day we headed down to the main town area and rented Jetskis, this is a must do. It was my first time jet-skiing, and I had the time of my life, I highly recommend this. Its so thrill seeking, especially with the insane view of the lake in the background, I think this was the #1 part of the trip.

      We used a contact called Norris and messaged her on WhatsApp. Btw almost everything is done via WhatsApp to communicate for activities, so I highly suggest you have that downloaded, Ill attach her number and the others below.

      Also, EVERYTHING is negotiable on this trip, make sure you speak somewhat basic spanish, otherwise you will be always overcharged. We got about 1 hour of the jet skis, with canoe and paddle boarding for 30 min each, for about $80 USD. Everything is also non chalant here, for example, no waivers or anything like that so if you have never jet skied before and are nervous like my friends were, watch a YouTube video or something.

      The motto of this whole trip was "F*** it", we just full sent everything.
    `,
    imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1470&auto=format&fit=crop"
  },
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
      A month-long journey through some of Europe's most breathtaking landscapes, combining Italian charm, Swiss Alpine majesty, and Iceland's raw natural beauty.

      Italy (10 days):
      My Italian adventure began in Rome, exploring the ancient ruins of the Colosseum and Roman Forum, getting lost in the Vatican Museums, and tossing a coin into the Trevi Fountain. From there, I headed south to the island paradise of Capri, where the Blue Grotto and rugged coastline views took my breath away. Moving north, I spent time in sophisticated Milan, admiring the magnificent Duomo and indulging in aperitivo culture. The journey continued to the stunning Lake Como, where I explored charming lakeside villages like Bellagio and Varenna, enjoying boat rides on the crystal-clear waters with dramatic mountain backdrops.

      Switzerland (10 days):
      The Swiss portion of my trip centered around the Bernese Oberland region. Based in picturesque Interlaken between two lakes, I ventured to Grindelwald with its spectacular views of the Eiger North Face. The highlight was definitely Lauterbrunnen, a valley of 72 waterfalls that inspired Tolkien's Rivendell. I took cable cars up to mountain viewpoints, hiked alpine meadows filled with wildflowers, and experienced the remarkable Swiss efficiency with their integrated transportation system.

      Iceland (5 days):
      The grand finale in Reykjavik, Iceland provided a perfect contrast to the Alpine landscapes. From this quirky capital city, I explored the famous Golden Circle with its powerful geysers and waterfalls, relaxed in geothermal hot springs, and witnessed the unique phenomenon of the midnight sun. The otherworldly landscapes of black sand beaches and massive glaciers made for an unforgettable conclusion to this European adventure.

      Key Takeaways:
      - Italy offered the perfect combination of history, cuisine, and lakeside relaxation
      - Switzerland's Alpine scenery and outdoor activities were unmatched
      - Iceland's unique geological features provided a complete change of pace
      - The entire journey offered incredible diversity in landscapes and experiences
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
  "hawaii-winter-2024": {
    title: "Island Paradise: Winter Escape to Hawaii",
    date: "January 15, 2024",
    content: `
      Trading snow for sand, I decided to escape the winter blues with a January trip to Hawaii, and it was one of the best travel decisions I've ever made.

      Island Hopping Adventure:
      My two-week journey covered three islands, each with its unique character:
      - Oahu: I spent four days exploring Waikiki Beach, hiking Diamond Head for panoramic views, paying respects at Pearl Harbor, and experiencing the North Shore's legendary surf culture.
      - Maui: The highlight of my trip, with six days exploring the Road to Hana's waterfalls and black sand beaches, catching sunrise at Haleakalā National Park, and snorkeling in Molokini Crater.
      - Big Island: Four days divided between exploring Hawaii Volcanoes National Park (seeing active lava flows at night was surreal), coffee plantation tours, and relaxing on Punalu'u Black Sand Beach with sea turtles.

      Winter in Hawaii:
      January proved to be an excellent time to visit:
      - The weather was consistently warm (75-80°F) but not too hot.
      - Whale watching was exceptional, with humpbacks breaching frequently during a boat tour.
      - The holiday crowds had dispersed, meaning easier access to popular spots.
      - Rainfall was periodic but brief, typically followed by rainbows.

      Cultural Experiences:
      - Attended a traditional luau on Maui's western shore.
      - Visited Pu'uhonua O Hōnaunau (Place of Refuge) to learn about ancient Hawaiian traditions.
      - Explored Iolani Palace in Honolulu, the only royal palace on U.S. soil.
      - Learned about sustainable farming practices at a taro farm.

      Practical Tips:
      - Book accommodations 3-4 months in advance, even for January.
      - Rent a car on each island for maximum flexibility.
      - Pack light but bring layers for higher elevations.
      - Respect local customs and environmental protections.
      - Try local specialties like poke, shave ice, and fresh fruit.
    `,
    imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
  },
  "london-february-2024": {
    title: "London Calling: February in the British Capital",
    date: "February 12, 2024",
    content: `
      Visiting London in February might seem counterintuitive—it's cold, often rainy, and the days are short. But after spending a week there this past winter, I'm convinced it's a hidden gem of a time to visit.

      Why February Works:
      - Significantly fewer tourists meant no lines at major attractions.
      - Hotels were 30-40% cheaper than summer rates.
      - The locals were more relaxed and engaging without the summer crowds.
      - Museums and galleries were peaceful, allowing for intimate experiences with world-class art.

      Cultural Immersion:
      - Spent hours in the British Museum without battling crowds.
      - Secured last-minute tickets to "Hamilton" in the West End.
      - Enjoyed a candlelit tour of Sir John Soane's Museum—a special winter program.
      - Experienced the Changing of the Guard at Buckingham Palace with clear views.
      - Visited the Churchill War Rooms and had time to examine every detail.

      Cozy London Experiences:
      - Afternoon tea at Fortnum & Mason was the perfect respite from the February chill.
      - Explored the city's historic pubs, finding spots by the fireplace in establishments that have stood for centuries.
      - Browsed the covered markets at Borough and Covent Garden, ideal for rainy days.
      - Discovered small bookshops in Bloomsbury, spending hours with hot chocolate and new finds.

      Winter-Specific Delights:
      - Skated at the Somerset House ice rink during its final week of the season.
      - Caught the tail end of the Winter Lights festival in Canary Wharf.
      - Enjoyed special winter menus focusing on seasonal British ingredients.
      - Photographed London landmarks with moody winter skies and fewer people in frame.

      Practical February Tips:
      - Layer clothing and bring waterproof outer layers.
      - Take advantage of London's excellent indoor attractions.
      - Book restaurants in advance—locals still fill popular spots.
      - Consider the London Pass for major attractions.
      - Use the Underground to minimize time outdoors on particularly cold days.
    `,
    imageUrl: "https://images.unsplash.com/photo-1524230572899-a752b3835840"
  },
  "costa-rica-december-2023": {
    title: "Costa Rican Adventure: December in the Rainforest",
    date: "December 20, 2024",
    content: `
      Ending the year surrounded by Costa Rica's lush rainforests and wildlife was exactly the reset I needed. December, just at the start of the dry season, offered the perfect balance of good weather and vibrant landscapes.

      Pacific to Caribbean Journey:
      My two-week adventure took me from coast to coast:
      - Manuel Antonio: Started on the Pacific side with a perfect combination of beach time and wildlife spotting in the national park.
      - Monteverde: Ventured into the cloud forest for zip-lining, hanging bridges, and spotting the elusive quetzal.
      - Arenal: Explored the volcano region with hot springs, waterfall hikes, and adventure activities.
      - Puerto Viejo: Concluded on the laid-back Caribbean coast with its unique Afro-Caribbean culture and pristine beaches.

      Wildlife Encounters:
      December proved to be an exceptional month for wildlife:
      - Spotted all four monkey species (squirrel, howler, spider, and capuchin) in various locations.
      - Watched sloths in their natural habitat, including a mother with baby.
      - Encountered countless tropical birds, including toucans and scarlet macaws.
      - Witnessed sea turtles nesting during a night tour—a December specialty.
      - Observed colorful poison dart frogs on guided rainforest walks.

      Sustainable Travel:
      Costa Rica's commitment to sustainability was evident:
      - Stayed in eco-lodges powered by renewable energy.
      - Participated in a community-led reforestation project.
      - Learned about sustainable coffee and chocolate production through farm tours.
      - Engaged with local conservation efforts to protect endangered species.

      December-Specific Advantages:
      - Beginning of dry season meant sunny mornings with occasional afternoon showers.
      - Holiday decorations and festivals in local towns added cultural dimension.
      - Transitional season meant lush landscapes without peak rainy season downpours.
      - Perfect temperature range (70s-80s°F) for both adventure and relaxation.

      Practical Tips:
      - Book accommodations 3-4 months in advance for December travel.
      - Rent a 4WD vehicle for navigating rural roads.
      - Pack quick-dry clothing and rain gear despite "dry" season designation.
      - Bring binoculars for wildlife spotting.
      - Learn basic Spanish phrases—they go a long way outside tourist areas.
    `,
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
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
        <BlogContent content={post.content} slug={slug} />

        <div className="mt-8 space-y-8">
          <AdSpace location="post-bottom" className="w-full h-[90px]" />
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPost;
