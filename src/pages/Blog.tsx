
import { memo, useEffect, useState, useCallback, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdSpace from "@/components/ads/AdSpace";

const blogPosts = [
  {
    id: 8,
    title: "Japan: From Neon Lights to Ancient Temples",
    excerpt: "Two weeks exploring the Land of the Rising Sun - from Tokyo's electric Shibuya crossing to Kyoto's golden temples, Mount Fuji's majestic peak, and Osaka's legendary street food scene...",
    date: "January 20, 2025",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop",
    slug: "japan-adventure-2025",
    worthItRating: "10/10 - Absolute bucket list destination"
  },
  {
    id: 0,
    title: "Full Send to Lake Atitlan: Guatemala's Hidden Paradise",
    excerpt: "From Instagram reels to real life - exploring the stunning Lake Atitlan with friends on a budget jet-skiing adventure...",
    date: "March 17, 2024",
    imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1470&auto=format&fit=crop",
    slug: "guatemala-lake-atitlan-2024",
    worthItRating: "10/10 - Budget paradise with unreal views"
  },
  {
    id: 1,
    title: "Memorial Weekend Adventure: Discovering Banff's Natural Wonders",
    excerpt: "A long weekend journey through the Canadian Rockies, featuring stunning lakes, majestic mountains, and unforgettable hiking trails...",
    date: "May 30, 2024",
    imageUrl: "/lovable-uploads/230e8e59-f044-442a-9e84-f783643253eb.png",
    slug: "banff-memorial-weekend-2024",
    worthItRating: "10/10 - A must-do for outdoor enthusiasts"
  },
  {
    id: 2,
    title: "European Alpine Adventure: Italy, Switzerland, and Iceland",
    excerpt: "From the Italian Dolomites to Swiss Alps, concluding with Iceland's dramatic landscapes - a month-long journey through Europe's most stunning regions...",
    date: "June 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    slug: "europe-adventure-2024",
    worthItRating: "9.5/10 - Epic hiking and incredible food"
  },
  {
    id: 3,
    title: "Caribbean Paradise: Summer in Aruba",
    excerpt: "White sandy beaches, crystal-clear waters, and endless summer vibes - exploring the happy island of Aruba...",
    date: "August 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    slug: "aruba-summer-2024",
    worthItRating: "8/10 - Beautiful, but missed the mountains"
  },
  {
    id: 4,
    title: "Northern European Journey: Iceland, Netherlands, and Belgium",
    excerpt: "From Iceland's waterfalls to Dutch tulip fields and Belgian medieval towns - a summer adventure through Northern Europe...",
    date: "August 25, 2023",
    imageUrl: "/lovable-uploads/a0c8d7e6-a4a6-4e47-913b-d212f9ade26d.png",
    slug: "northern-europe-2023",
    worthItRating: "9/10 - Perfect blend of nature and culture"
  },
  {
    id: 5,
    title: "Island Paradise: Winter Escape to Hawaii",
    excerpt: "Escaping the winter chill for the tropical warmth of Hawaii's islands - hiking volcanoes, surfing waves, and experiencing authentic Hawaiian culture...",
    date: "January 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    slug: "hawaii-winter-2024",
    worthItRating: "9.5/10 - Perfect winter escape destination"
  },
  {
    id: 6,
    title: "London Calling: February in the British Capital",
    excerpt: "Exploring London's historic landmarks, vibrant markets, and cozy pubs during the quiet winter season - fewer tourists and authentic experiences...",
    date: "February 12, 2024",
    imageUrl: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    slug: "london-february-2024",
    worthItRating: "8.5/10 - Great off-season city break"
  },
  {
    id: 7,
    title: "Costa Rican Adventure: December in the Rainforest",
    excerpt: "Ending the year in Costa Rica's lush rainforests and pristine beaches - wildlife encounters, zip-lining adventures, and sustainable eco-tourism...",
    date: "December 20, 2024",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    slug: "costa-rica-december-2023",
    worthItRating: "10/10 - Perfect blend of adventure and relaxation"
  }
];

// Memoized blog post component for better performance
const BlogPostCard = memo(({ post }: { post: typeof blogPosts[0] }) => (
  <article
    key={post.id}
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <Link to={`/blog/${post.slug}`} className="block">
      <div className="aspect-video overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-4 sm:p-6">
        <span className="text-xs sm:text-sm text-accent font-medium">{post.date}</span>
        <h2 className="text-lg sm:text-xl font-display text-primary mt-2 mb-3">{post.title}</h2>
        <p className="text-primary/80 text-sm line-clamp-3">{post.excerpt}</p>
        <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <span className="inline-block text-accent font-medium text-sm">Read more →</span>
          <span className="text-xs sm:text-sm font-medium text-primary/60">{post.worthItRating}</span>
        </div>
      </div>
    </Link>
  </article>
));

// Memoize the AdSpace components
const TopBannerAd = memo(() => (
  <AdSpace location="blog-top" className="w-full h-[90px] mb-8" />
));

const BottomBannerAd = memo(() => (
  <AdSpace location="blog-bottom" className="w-full h-[90px] mt-8" />
));

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(blogPosts.slice(0, 4));

  // Preload images with lower priority
  useEffect(() => {
    let isMounted = true;

    const preloadImages = () => {
      if (!isMounted) return;

      blogPosts.slice(4).forEach(post => {
        const img = new Image();
        img.src = post.imageUrl;
      });

      blogPosts.slice(0, 4).forEach(post => {
        const img = new Image();
        img.src = post.imageUrl;
      });
    };

    const timerId = setTimeout(preloadImages, 1000);

    return () => {
      isMounted = false;
      clearTimeout(timerId);
    };
  }, []);

  // Load more posts when user scrolls near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        if (visiblePosts.length < blogPosts.length) {
          setVisiblePosts(blogPosts.slice(0, visiblePosts.length + 2));
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visiblePosts]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-12 md:pb-16 max-w-5xl flex-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary mb-6 md:mb-8 text-center">
          Travel Stories
        </h1>

        {/* Top banner ad */}
        <TopBannerAd />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {visiblePosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {visiblePosts.length < blogPosts.length && (
          <div className="text-center mt-8">
            <p className="text-primary/50 text-sm">Scroll down for more stories...</p>
          </div>
        )}

        {/* Bottom banner ad */}
        <BottomBannerAd />
      </div>

      <Footer />
    </div>
  );
};

export default memo(Blog);
