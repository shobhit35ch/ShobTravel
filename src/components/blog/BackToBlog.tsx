
import { Link } from "react-router-dom";

export const BackToBlog = () => {
  return (
    <div className="mb-8">
      <Link
        to="/blog"
        className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
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
    </div>
  );
};
