
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";

// Sample blog post data - later this could come from a backend
const blogPosts = {
  "top-10-budget-travel-tips-2024": {
    title: "Top 10 Budget Travel Tips for 2024",
    date: "March 15, 2024",
    content: `
      Traveling on a budget doesn't mean sacrificing the quality of your experience. Here are our top tips for 2024:

      1. Book flights during off-peak seasons
      2. Use local transportation instead of tourist options
      3. Stay in hostels or use home-sharing services
      4. Cook your own meals when possible
      5. Take advantage of free walking tours
      6. Use travel rewards credit cards wisely
      7. Travel to countries with favorable exchange rates
      8. Book accommodations with free cancellation
      9. Use flight price tracking tools
      10. Connect with local communities for authentic experiences

      Remember, the best travel experiences often come from immersing yourself in the local culture rather than spending money on tourist attractions.
    `,
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  // ... add more blog posts here
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
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-3xl mx-auto">
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
      </motion.article>
    </div>
  );
};

export default BlogPost;
