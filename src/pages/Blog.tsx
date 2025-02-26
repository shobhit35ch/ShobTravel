
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

// Sample blog post data - later this could come from a backend
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Budget Travel Tips for 2024",
    excerpt: "Discover how to explore the world without breaking the bank. From finding cheap flights to choosing affordable accommodations...",
    date: "March 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    slug: "top-10-budget-travel-tips-2024"
  },
  {
    id: 2,
    title: "Hidden Gems: Southeast Asia's Secret Spots",
    excerpt: "Venture off the beaten path and discover the lesser-known destinations that make Southeast Asia truly special...",
    date: "March 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
    slug: "hidden-gems-southeast-asia"
  },
  {
    id: 3,
    title: "A Beginner's Guide to Solo Travel",
    excerpt: "Everything you need to know about embarking on your first solo adventure. From planning to safety tips...",
    date: "March 5, 2024",
    imageUrl: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    slug: "beginners-guide-solo-travel"
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
