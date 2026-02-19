
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { to: "/about", label: "About Me" },
    { to: "/destinations", label: "Destinations" },
    { to: "/blog", label: "Blog" },
    { to: "/travel-tips", label: "Travel Tips" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 safe-area-top ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 md:py-4"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl md:text-2xl font-display text-primary hover:text-primary/80 transition-colors"
          >
            Shob Travels
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-primary/80 hover:text-primary transition-colors ${
                  pathname === link.to ? "text-primary font-medium" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/monetization"
              className="bg-accent px-6 py-2 rounded-full text-primary hover:bg-accent/80 transition-colors font-medium"
            >
              Work With Me
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden text-primary p-2 -mr-2"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full screen overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-white/98 backdrop-blur-lg z-40"
            >
              <div className="flex flex-col items-center justify-center gap-6 py-12 px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      className={`text-xl font-display transition-colors py-2 ${
                        pathname === link.to
                          ? "text-primary font-semibold"
                          : "text-primary/70 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link
                    to="/monetization"
                    className="bg-accent px-8 py-3 rounded-full text-primary hover:bg-accent/80 transition-colors text-lg font-medium"
                  >
                    Work With Me
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
