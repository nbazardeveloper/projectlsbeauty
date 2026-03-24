import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  return (
    <header className="w-full bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex flex-col leading-tight items-center">
          <span className="font-display font-bold text-3xl text-glowly-black">
            LS Beauty
          </span>
          <span className="font-display font-normal text-sm tracking-widest text-glowly-black/70 uppercase">
            Salon &amp; Spa
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <a href="/#why" className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200">Why us</a>
          <a href="/#services" className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200">Services</a>
          <a href="/#reviews" className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200">Reviews</a>
          <a href="/#locations" className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200">Locations</a>
          <a href="/#faq" className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200">F.A.Q</a>
          <Link to="/blog" className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200">Blog</Link>

          {/* More Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setShowMoreMenu(true)}
              onMouseLeave={() => setShowMoreMenu(false)}
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200"
            >
              More
            </button>
            {showMoreMenu && (
              <div
                onMouseEnter={() => setShowMoreMenu(true)}
                onMouseLeave={() => setShowMoreMenu(false)}
                className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-50"
              >
                <a href="#rewards" className="block px-4 py-3 text-glowly-black font-sans text-sm hover:bg-glowly-lavender/20 transition duration-200">Loyalty Rewards</a>
                <a href="#cancellation" className="block px-4 py-3 text-glowly-black font-sans text-sm hover:bg-glowly-lavender/20 transition duration-200">Cancellation Policy</a>
                <a href="#guarantee" className="block px-4 py-3 text-glowly-black font-sans text-sm hover:bg-glowly-lavender/20 transition duration-200">Repair Policy</a>
              </div>
            )}
          </div>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* MobileMenu with white hamburger lines */}
          <MobileMenu iconColor="white" />
        </div>
      </div>
    </header>
  );
};


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { MobileMenu } from "./MobileMenu";

// export const Header = () => {
//   const [showMoreMenu, setShowMoreMenu] = useState(false);

//   return (
//     <header className="w-full bg-transparent relative z-20">
//       <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex-shrink-0 flex flex-col leading-tight items-center">
//           <span className="font-display font-bold text-3xl text-glowly-black">
//             LS Beauty
//           </span>
//           <span className="font-display font-normal text-sm tracking-widest text-glowly-black/70 uppercase">
//             Salon &amp; Spa
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-12">
//           <a href="/#why" className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200">Why us</a>
//           <a href="/#services" className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200">Services</a>
//           <a href="/#reviews" className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200">Reviews</a>
//           <a href="/#locations" className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200">Locations</a>
//           <a href="/#faq" className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200">F.A.Q</a>
//           <Link to="/blog" className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200">Blog</Link>

//           {/* More Dropdown */}
//           <div className="relative">
//             <button
//               onMouseEnter={() => setShowMoreMenu(true)}
//               onMouseLeave={() => setShowMoreMenu(false)}
//               onClick={() => setShowMoreMenu(!showMoreMenu)}
//               className="text-glowly-black font-sans font-medium text-base hover:text-glowly-orange transition duration-200"
//             >
//               More
//             </button>
//             {showMoreMenu && (
//               <div
//                 onMouseEnter={() => setShowMoreMenu(true)}
//                 onMouseLeave={() => setShowMoreMenu(false)}
//                 className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-50"
//               >
//                 <a href="#rewards" className="block px-4 py-3 text-glowly-black font-sans text-sm hover:bg-glowly-lavender/20 transition duration-200">Loyalty Rewards</a>
//                 <a href="#cancellation" className="block px-4 py-3 text-glowly-black font-sans text-sm hover:bg-glowly-lavender/20 transition duration-200">Cancellation Policy</a>
//                 <a href="#guarantee" className="block px-4 py-3 text-glowly-black font-sans text-sm hover:bg-glowly-lavender/20 transition duration-200">Repair Policy</a>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Right side */}
//         <div className="flex items-center gap-4">
//           <MobileMenu />
//         </div>
//       </div>
//     </header>
//   );
// };