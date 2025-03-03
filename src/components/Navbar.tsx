
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-display text-primary hover:text-primary/80 transition-colors"
          >
            Shob Travels
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              About Me
            </Link>
            <Link
              to="/blog"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/travel-tips"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              Travel Tips
            </Link>
            <Link
              to="/monetization"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              Work With Me
            </Link>
            <Link
              to="/monetization"
              className="bg-accent px-4 py-2 rounded-full text-primary hover:bg-accent/80 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button className="md:hidden text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
