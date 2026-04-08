import { useState } from "react";
import { Menu, X } from "lucide-react";

export const MobileMenu = ({ iconColor = "black" }: { iconColor?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NAV_LINKS = [
    { label: "Why us",    href: "/#why" },
    { label: "Services",  href: "/services" },
    { label: "Reviews",   href: "/#reviews" },
    { label: "Locations", href: "/#locations" },
    { label: "F.A.Q",    href: "/#faq" },
    { label: "Training",  href: "/training" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-full bg-glowly-lavender/50"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6" style={{ color: iconColor }} />
        ) : (
          <Menu className="w-6 h-6" style={{ color: iconColor }} />
        )}
      </button>

      {isOpen && (
        <nav
          className="absolute top-[72px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col p-6 space-y-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-glowly-black font-sans font-medium hover:text-glowly-orange transition block"
                  style={{ fontSize: "var(--fs-nav-mobile)" }}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}

            {/* CTA inside mobile menu */}
            <li className="pt-2">
              <a
                href="https://www.vagaro.com/lsbeautysalon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book w-full justify-center px-6 py-3 bg-glowly-action-orange text-white"
                style={{ fontSize: "var(--fs-body-md)" }}
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};



// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export const MobileMenu = ({ iconColor = "white" }: { iconColor?: string }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className="md:hidden">
//       <button
//         onClick={toggleMenu}
//         className="inline-flex items-center justify-center p-2 rounded-full bg-glowly-lavender/50"
//       >
//         {isOpen ? (
//           <X className="w-6 h-6" style={{ color: iconColor }} />
//         ) : (
//           <Menu className="w-6 h-6" style={{ color: iconColor }} />
//         )}
//       </button>

//       {isOpen && (
//         <nav className="absolute top-25 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
//           <ul className="flex flex-col p-6 space-y-4">
//             <li>
//               <a
//                 href="/#why"
//                 className="text-glowly-black font-sans text-2xl  hover:text-glowly-orange transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Why us
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/#services"
//                 className="text-glowly-black font-sans text-2xl hover:text-glowly-orange transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/#reviews"
//                 className="text-glowly-black font-sans text-2xl hover:text-glowly-orange transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Reviews
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/#locations"
//                 className="text-glowly-black font-sans text-2xl hover:text-glowly-orange transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Locations
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/#faq"
//                 className="text-glowly-black font-sans text-2xl hover:text-glowly-orange transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 F.A.Q
//               </a>
//             </li>
//             <li>
//               {/* <Link
//                 to="/blog"
//                 className="text-glowly-black font-sans text-lg font-bold hover:text-glowly-orange transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Blog
//               </Link>
//             </li>
//             <li className="pt-4 border-t border-gray-200">
//               <a
//                 href="#rewards"
//                 className="block text-glowly-black font-sans font-bold text-lg hover:text-glowly-orange transition mb-3"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Loyalty Rewards
//               </a>
//               <a
//                 href="#cancellation"
//                 className="block text-glowly-black font-sans font-bold text-lg hover:text-glowly-orange transition mb-3"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Cancellation Policy
//               </a>
//               <a
//                 href="#guarantee"
//                 className="block text-glowly-black font-sans font-bold text-lg hover:text-glowly-orange transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Repair Policy
//               </a> */}
//             </li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };
