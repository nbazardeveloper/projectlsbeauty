import { useState } from "react";

const NAV_ITEMS = [
  { label: "Services",      href: "#services" },
  { label: "Reviews",       href: "#reviews" },
  { label: "Why LS Beauty", href: "#why" },
  { label: "Locations",     href: "#locations" },
  { label: "FAQ",           href: "#faq" },
];

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (window.innerWidth < 1024) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  return (
    <footer className="bg-glowly-orange/70 text-glowly-black pt-12 lg:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-glowly-black/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-display text-display-xl text-glowly-black tracking-wide">
              LS Beauty
            </span>
            <p className="font-sans text-body-xs text-glowly-black/60 tracking-widest mt-1 mb-5">
              Salon &amp; Spa
            </p>
            <p className="font-sans text-body-lg text-glowly-black/80 leading-relaxed max-w-xs">
              Premium Russian gel manicure &amp; pedicure in Paoli, PA, crafted
              with low-toxic formulas.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/lsbeautypaoli"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-glowly-black/20 flex items-center justify-center hover:border-glowly-orange hover:text-glowly-orange transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@lsbeauty24"
                target="_blank" rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-glowly-black/20 flex items-center justify-center hover:border-glowly-orange hover:text-glowly-orange transition-colors"
              >
                <svg width="14" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.05a8.16 8.16 0 0 0 4.78 1.52V7.13a4.85 4.85 0 0 1-1.01-.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation accordion */}
          <div className="border-b lg:border-none border-glowly-black/5 pb-4 lg:pb-0">
            <button
              onClick={() => toggleSection("menu")}
              className="w-full flex items-center justify-between lg:block text-left"
            >
              <h4 className="font-sans font-bold text-body-lg text-glowly-black/90 uppercase tracking-wider lg:mb-5">
                Menu
              </h4>
              <span
                className="lg:hidden transition-transform duration-300"
                style={{ transform: openSection === "menu" ? "rotate(180deg)" : "rotate(0)" }}
              >
                <ChevronDown />
              </span>
            </button>
            <div
              className={`mt-4 lg:mt-0 overflow-hidden transition-all duration-300 ${
                openSection === "menu" ? "max-h-60 opacity-100" : "max-h-0 lg:max-h-full opacity-0 lg:opacity-100"
              }`}
            >
              <ul className="space-y-3">
                {NAV_ITEMS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="font-sans text-body-lg text-glowly-black/80 hover:text-glowly-black transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Location accordion */}
          <div className="border-b lg:border-none border-glowly-black/5 pb-4 lg:pb-0">
            <button
              onClick={() => toggleSection("location")}
              className="w-full flex items-center justify-between lg:block text-left"
            >
              <h4 className="font-sans font-bold text-body-lg text-glowly-black/90 uppercase tracking-wider lg:mb-5">
                Salon Location
              </h4>
              <span
                className="lg:hidden transition-transform duration-300"
                style={{ transform: openSection === "location" ? "rotate(180deg)" : "rotate(0)" }}
              >
                <ChevronDown />
              </span>
            </button>
            <div
              className={`mt-4 lg:mt-0 overflow-hidden transition-all duration-300 ${
                openSection === "location" ? "max-h-40 opacity-100" : "max-h-0 lg:max-h-full opacity-0 lg:opacity-100"
              }`}
            >
              <address className="not-italic space-y-1 font-sans text-body-lg text-glowly-black/80">
                <p>(267) 962-4747</p>
                <p>24 Paoli Pike</p>
                <p className="text-glowly-black/90 pt-2">Paoli, PA 19301</p>
              </address>
            </div>
          </div>

          {/* Book Now */}
          <div className="flex flex-col items-center lg:items-start">
            <a
              href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwNlvYRLH2CLa8oQn7Kvmq3u9a9wMuqMg2ykEqGkJqLcdcR91UlT1Cp4HwOydwDxY8kULw76hB6JD2JbI2jgKzQI5Y9tMd+N5AevdKLZA+iD12dDf9MA+h2I/CGCcfoiVsCWKdZqAnTwLpMAaM2h3YWoPeiHpmo4Ulg0aaVUjKuB6WU/auJjjEidtZGYbjBf6ukczEJqAkJYyNz1NrrDG1D4="
              className="btn-book w-full lg:w-auto text-center px-8 py-3.5 text-btn bg-glowly-action-orange text-white uppercase tracking-widest shadow-lg hover:bg-glowly-action-orange"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* ── Bottom row ── */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 text-center lg:text-left">
          <p className="font-sans text-body-xxs lg:text-body-xs text-glowly-black/50">
            © {new Date().getFullYear()} LS Beauty Salon &amp; Spa. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-sans text-body-xxs lg:text-body-xs text-glowly-black/50 hover:text-glowly-black/80 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};







// import { useState } from "react";

// export const Footer = () => {
//   const [openSection, setOpenSection] = useState<string | null>(null);

//   const toggleSection = (section: string) => {
//     // На мобилках переключаем, на десктопе ничего не делаем
//     if (window.innerWidth < 1024) {
//       setOpenSection(openSection === section ? null : section);
//     }
//   };

//   return (
//     <footer className="bg-glowly-orange/70  text-glowly-black pt-12 lg:pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Основной ряд */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-glowly-black/10">
//           {/* Brand - Всегда виден */}
//           <div className="lg:col-span-1">
//             <span className="font-display text-4xl text-glowly-black tracking-wide">
//               LS Beauty
//             </span>
//             <p className="font-sans text-s text-glowly-black/60 tracking-widest mt-1 mb-5">
//               Salon &amp; Spa
//             </p>
//             <p className="font-sans text-lg text-glowly-black/80 leading-relaxed max-w-xs">
//               Premium Russian gel manicure &amp; pedicure in Paoli, PA, crafted
//               with low-toxic formulas.
//             </p>
//             <div className="flex gap-4 mt-6">
//               <a
//                 href="https://www.instagram.com/lsbeautypaoli"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-glowly-black/20 flex items-center justify-center hover:border-glowly-orange hover:text-glowly-orange transition-colors"
//               >
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                 >
//                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//                   <circle cx="12" cy="12" r="4" />
//                   <circle
//                     cx="17.5"
//                     cy="6.5"
//                     r="0.8"
//                     fill="currentColor"
//                     stroke="none"
//                   />
//                 </svg>
//               </a>
//               <a
//                 href="https://www.tiktok.com/@lsbeauty24"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-glowly-black/20 flex items-center justify-center hover:border-glowly-orange hover:text-glowly-orange transition-colors"
//               >
//                 <svg
//                   width="14"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.05a8.16 8.16 0 0 0 4.78 1.52V7.13a4.85 4.85 0 0 1-1.01-.44z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Navigation - Accordion on Mobile */}
//           <div className="border-b lg:border-none border-glowly-black/5 pb-4 lg:pb-0">
//             <button
//               onClick={() => toggleSection("menu")}
//               className="w-full flex items-center justify-between lg:block text-left"
//             >
//               <h4 className="font-sans font-bold text-lg text-glowly-black/90 uppercase tracking-wider lg:mb-5">
//                 Menu
//               </h4>
//               <span
//                 className="lg:hidden transition-transform duration-300"
//                 style={{
//                   transform:
//                     openSection === "menu" ? "rotate(180deg)" : "rotate(0)",
//                 }}
//               >
//                 <svg
//                   width="12"
//                   height="12"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="3"
//                 >
//                   <path d="M6 9l6 6 6-6" />
//                 </svg>
//               </span>
//             </button>
//             <div
//               className={`mt-4 lg:mt-0 overflow-hidden transition-all duration-300 ${openSection === "menu" ? "max-h-60 opacity-100" : "max-h-0 lg:max-h-full opacity-0 lg:opacity-100"}`}
//             >
//               <ul className="space-y-3">
//                 {[
//                   { label: "Services", href: "#services" },
//                   { label: "Reviews", href: "#reviews" },
//                   { label: "Why LS Beauty", href: "#why" },
//                   { label: "Locations", href: "#locations" },
//                   { label: "FAQ", href: "#faq" },
//                 ].map((item) => (
//                   <li key={item.label}>
//                     <a
//                       href={item.href}
//                       className="font-sans text-lg text-glowly-black/80 hover:text-glowly-black transition-colors"
//                     >
//                       {item.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Locations - Accordion on Mobile */}
//           <div className="border-b lg:border-none border-glowly-black/5 pb-4 lg:pb-0">
//             <button
//               onClick={() => toggleSection("location")}
//               className="w-full flex items-center justify-between lg:block text-left"
//             >
//               <h4 className="font-sans font-bold text-lg text-glowly-black/90 uppercase tracking-wider lg:mb-5">
//                 Salon Location
//               </h4>
//               <span
//                 className="lg:hidden transition-transform duration-300"
//                 style={{
//                   transform:
//                     openSection === "location" ? "rotate(180deg)" : "rotate(0)",
//                 }}
//               >
//                 <svg
//                   width="12"
//                   height="12"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="3"
//                 >
//                   <path d="M6 9l6 6 6-6" />
//                 </svg>
//               </span>
//             </button>
//             <div
//               className={`mt-4 lg:mt-0 overflow-hidden transition-all duration-300 ${openSection === "location" ? "max-h-40 opacity-100" : "max-h-0 lg:max-h-full opacity-0 lg:opacity-100"}`}
//             >
//               <div className="space-y-1 font-sans text-lg text-glowly-black/80">
//                 <p>(267) 962-4747</p>
//                 <p>24 Paoli Pike</p>
//                 <p className="text-glowly-black/90 text-lg pt-2">
//                   Paoli, PA 19301
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Book Now Button Section */}
//           <div className="flex flex-col items-center lg:items-start">
//             <a
//               href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwNlvYRLH2CLa8oQn7Kvmq3u9a9wMuqMg2ykEqGkJqLcdcR91UlT1Cp4HwOydwDxY8kULw76hB6JD2JbI2jgKzQI5Y9tMd+N5AevdKLZA+iD12dDf9MA+h2I/CGCcfoiVsCWKdZqAnTwLpMAaM2h3YWoPeiHpmo4Ulg0aaVUjKuB6WU/auJjjEidtZGYbjBf6ukczEJqAkJYyNz1NrrDG1D4="
//               className="w-full lg:w-auto text-center px-8 py-3.5 bg-glowly-action-orange text-white font-sans text-sm font-black rounded-full uppercase tracking-widest shadow-lg hover:bg-glowly-action-orange transition-all duration-300"
//             >
//               Book Now
//             </a>
//           </div>
//         </div>

//         {/* Bottom row */}
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 text-center lg:text-left">
//           <p className="font-sans text-[10px] lg:text-xs text-glowly-black/50">
//             © {new Date().getFullYear()} LS Beauty Salon &amp; Spa. All rights
//             reserved.
//           </p>
//           <div className="flex gap-6">
//             <a
//               href="/privacy"
//               className="font-sans text-[10px] lg:text-xs text-glowly-black/50 hover:text-glowly-black/80 transition-colors"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="/terms"
//               className="font-sans text-[10px] lg:text-xs text-glowly-black/50 hover:text-glowly-black/80 transition-colors"
//             >
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
