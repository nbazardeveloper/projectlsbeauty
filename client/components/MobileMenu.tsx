import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-full bg-glowly-lavender/50"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {isOpen && (
        <nav className="absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <ul className="flex flex-col p-6 space-y-4">
            <li>
              <a
                href="/#why"
                className="text-glowly-black font-sans text-lg hover:text-glowly-orange transition"
                onClick={() => setIsOpen(false)}
              >
                Why us
              </a>
            </li>
            <li>
              <a
                href="/#services"
                className="text-glowly-black font-sans text-lg hover:text-glowly-orange transition"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/#reviews"
                className="text-glowly-black font-sans text-lg hover:text-glowly-orange transition"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="/#locations"
                className="text-glowly-black font-sans text-lg hover:text-glowly-orange transition"
                onClick={() => setIsOpen(false)}
              >
                Locations
              </a>
            </li>
            <li>
              <a
                href="/#faq"
                className="text-glowly-black font-sans text-lg hover:text-glowly-orange transition"
                onClick={() => setIsOpen(false)}
              >
                F.A.Q
              </a>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-glowly-black font-sans text-lg hover:text-glowly-orange transition"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li className="pt-4 border-t border-gray-200">
              <a
                href="#rewards"
                className="block text-glowly-black font-sans text-lg hover:text-glowly-orange transition mb-3"
                onClick={() => setIsOpen(false)}
              >
                Loyalty Rewards
              </a>
              <a
                href="#cancellation"
                className="block text-glowly-black font-sans text-lg hover:text-glowly-orange transition mb-3"
                onClick={() => setIsOpen(false)}
              >
                Cancellation Policy
              </a>
              <a
                href="#guarantee"
                className="block text-glowly-black font-sans text-lg hover:text-glowly-orange transition"
                onClick={() => setIsOpen(false)}
              >
                Repair Policy
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};