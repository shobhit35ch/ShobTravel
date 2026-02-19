import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white/90">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-2xl text-white hover:text-accent transition-colors">
              Shob Travels
            </Link>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Exploring the world one adventure at a time. Budget-friendly travel tips, stunning destinations, and authentic experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">Explore</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/blog" className="text-white/70 hover:text-accent transition-colors text-sm">
                Blog
              </Link>
              <Link to="/destinations" className="text-white/70 hover:text-accent transition-colors text-sm">
                Destinations
              </Link>
              <Link to="/travel-tips" className="text-white/70 hover:text-accent transition-colors text-sm">
                Travel Tips
              </Link>
              <Link to="/about" className="text-white/70 hover:text-accent transition-colors text-sm">
                About Me
              </Link>
              <Link to="/monetization" className="text-white/70 hover:text-accent transition-colors text-sm">
                Work With Me
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:Shobhitchoudhury1@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>Shobhitchoudhury1@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Washington, DC Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Shob Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
