import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex items-center justify-center py-24">
        <div className="text-center px-6">
          <h1 className="font-display text-6xl font-normal text-glowly-black mb-4">
            404
          </h1>
          <p className="font-display text-2xl text-glowly-black/70 mb-8">
            Oops! Page not found
          </p>
          <p className="font-sans text-lg text-glowly-black/60 mb-8 max-w-md">
            The page you're looking for doesn't exist. Let's get you back on track!
          </p>
          <Link
            to="/"
            className="inline-flex px-8 py-3 bg-glowly-orange text-white font-display font-normal text-xl rounded-full hover:bg-glowly-lavender hover:text-glowly-black transition duration-300 shadow-lg hover:shadow-xl"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
