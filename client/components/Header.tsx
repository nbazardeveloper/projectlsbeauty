import { useState, useEffect } from "react";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-500 z-[100] ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — Libre Baskerville */}
        <a
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
  className="flex-shrink-0 flex flex-col leading-tight items-center"
        >
          <span
            className="font-libre-heading text-glowly-black"
            style={{ fontSize: "var(--fs-logo)", lineHeight: 1 }}
          >
            LS Beauty
          </span>
          <span
            className="font-sans font-normal tracking-widest text-glowly-black/60 uppercase"
            style={{ fontSize: "var(--fs-logo-sub)" }}
          >
            Salon &amp; Spa
          </span>
        </a>

        {/* Desktop Navigation — DM Sans */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "Why us",    href: "/#why" },
            { label: "Services",  href: "/services" },
            { label: "Reviews",   href: "/#reviews" },
            { label: "Locations", href: "/#locations" },
            { label: "F.A.Q",    href: "/#faq" },
            { label: "Training",  href: "/training" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-glowly-black font-sans font-medium hover:text-glowly-orange transition duration-200"
              style={{ fontSize: "var(--fs-nav)" }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <MobileMenu iconColor={isScrolled ? "black" : "black"} />
        </div>
      </div>
    </header>
  );
};


// import { useState, useEffect } from "react";
// import { MobileMenu } from "./MobileMenu";

// export const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 w-full transition-all duration-500 z-[100] ${
//         isScrolled
//           ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
//           : "bg-transparent py-8"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//         {/* Logo */}
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="flex-shrink-0 flex flex-col leading-tight items-center"
//         >
//           <span className="font-display font-bold text-4xl lg:text-4xl text-glowly-black">
//             LS Beauty
//           </span>
//           <span className="font-display font-normal text-xs lg:text-sm tracking-widest text-glowly-black/70 uppercase">
//             Salon &amp; Spa
//           </span>
//         </button>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-12">
//           <a
//             href="/#why"
//             className="text-glowly-black font-sans font-medium text-xl hover:text-glowly-orange transition duration-200"
//           >
//             Why us
//           </a>
//           <a
//             href="/#services"
//             className="text-glowly-black font-sans font-medium text-xl hover:text-glowly-orange transition duration-200"
//           >
//             Services
//           </a>
//           <a
//             href="/#reviews"
//             className="text-glowly-black font-sans font-medium text-xl hover:text-glowly-orange transition duration-200"
//           >
//             Reviews
//           </a>
//           <a
//             href="/#locations"
//             className="text-glowly-black font-sans font-medium text-xl hover:text-glowly-orange transition duration-200"
//           >
//             Locations
//           </a>
//           <a
//             href="/#faq"
//             className="text-glowly-black font-sans font-medium text-xl hover:text-glowly-orange transition duration-200"
//           >
//             F.A.Q
//           </a>
//         </nav>

//         {/* Right side */}
//         <div className="flex items-center gap-4">
//           <MobileMenu iconColor={isScrolled ? "black" : "white"} />
//         </div>
//       </div>
//     </header>
//   );
// };