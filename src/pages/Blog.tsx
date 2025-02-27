
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const blogPosts = [
  {
    id: 1,
    title: "Memorial Weekend Adventure: Discovering Banff's Natural Wonders",
    excerpt: "A long weekend journey through the Canadian Rockies, featuring stunning lakes, majestic mountains, and unforgettable hiking trails...",
    date: "May 30, 2024",
    imageUrl: "/lovable-uploads/230e8e59-f044-442a-9e84-f783643253eb.png",
    slug: "banff-memorial-weekend-2024"
  },
  {
    id: 2,
    title: "European Alpine Adventure: Italy, Switzerland, and Iceland",
    excerpt: "From the Italian Dolomites to Swiss Alps, concluding with Iceland's dramatic landscapes - a month-long journey through Europe's most stunning regions...",
    date: "June 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    slug: "europe-adventure-2024"
  },
  {
    id: 3,
    title: "Caribbean Paradise: Summer in Aruba",
    excerpt: "White sandy beaches, crystal-clear waters, and endless summer vibes - exploring the happy island of Aruba...",
    date: "August 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    slug: "aruba-summer-2024"
  },
  {
    id: 4,
    title: "Northern European Journey: Iceland, Netherlands, and Belgium",
    excerpt: "From Iceland's waterfalls to Dutch tulip fields and Belgian medieval towns - a summer adventure through Northern Europe...",
    date: "August 25, 2023",
    imageUrl: "/lovable-uploads/a0c8d7e6-a4a6-4e47-913b-d212f9ade26d.png",
    slug: "northern-europe-2023"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-display text-primary mb-8 text-center">Travel Stories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link to={`/blog/${post.slug}`}>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-accent font-medium">{post.date}</span>
                  <h2 className="text-xl font-display text-primary mt-2 mb-3">{post.title}</h2>
                  <p className="text-primary/80 text-sm line-clamp-3">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-accent font-medium">Read more →</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
