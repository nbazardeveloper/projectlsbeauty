export const Footer = () => {
  return (
    <footer className="bg-glowly-lavender text-glowly-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12 border-b border-glowly-black/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-display text-3xl text-glowly-black tracking-wide">LS Beauty</span>
            <p className="font-sans text-xs text-glowly-black/60 tracking-widest mt-1 mb-5">Salon &amp; Spa</p>
            <p className="font-sans text-sm text-glowly-black/80 leading-relaxed max-w-xs">
              Premium Russian gel manicure &amp; pedicure in Paoli, PA, crafted with low-toxic formulas.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/lsbeautypaoli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-glowly-black/20 flex items-center justify-center hover:border-glowly-orange hover:text-glowly-orange transition-colors text-glowly-black"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@lsbeauty24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-glowly-black/20 flex items-center justify-center hover:border-glowly-orange hover:text-glowly-orange transition-colors text-glowly-black"
              >
                <svg width="14" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.05a8.16 8.16 0 0 0 4.78 1.52V7.13a4.85 4.85 0 0 1-1.01-.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans font-semibold text-sm text-glowly-black/60 uppercase tracking-wider mb-5">Menu</h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Reviews", href: "#reviews" },
                { label: "Why LS Beauty", href: "#why" },
                { label: "Locations", href: "#locations" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="font-sans text-sm text-glowly-black/80 hover:text-glowly-black transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-sans font-semibold text-sm text-glowly-black/60 uppercase tracking-wider mb-5">Salon Location</h4>
            <div className="space-y-1 font-sans text-sm text-glowly-black/80">
              <p>(267) 962-4747</p>
              <p>24 Paoli Pike</p>
              
              <p className="text-glowly-black/50 text-xs pt-2">Paoli, PA 19301</p>
            </div>
          </div>

          <div>
           
            <a
              href="#Home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-6 px-6 py-2.5 bg-glowly-orange text-white font-sans text-sm font-bold rounded-full uppercase tracking-wider hover:opacity-80 transition-opacity"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-sans text-xs text-glowly-black/50">
            © {new Date().getFullYear()} LS Beauty Salon &amp; Spa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="font-sans text-xs text-glowly-black/50 hover:text-glowly-black/80 transition-colors">Privacy Policy</a>
            <a href="/terms" className="font-sans text-xs text-glowly-black/50 hover:text-glowly-black/80 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};