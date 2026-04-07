const HERO_BOOKING_URL =
  "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwNlvYRLH2CLa8oQn7Kvmq3u9a9wMuqMg2ykEqGkJqLcdcR91UlT1Cp4HwOydwDxY8kULw76hB6JD2JbI2jgKzQI5Y9tMd+N5AevdKLZA+iD12dDf9MA+h2I/CGCcfoiVsCWKdZqAnTwLpMAaM2h3YWoPeiHpmo4Ulg0aaVUjKuB6WU/auJjjEidtZGYbjBf6ukczEJqAkJYyNz1NrrDG1D4=";
const HERO_GIFT_CARD_URL =
  "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwFOJB1AeuqxRjyZH8YS7IYXwBwFAB0TGdHNwRSo90SWh3Bs3TvJuREt3KNTa/L/LBnHHa0HWqyVicF5HZvXwz96qZ5bFv++gDLxRW94elRMt9NKSWtIhDAH+pCAH3IKa+5GHi/iQ17Y3E+2WKo9xHWTz8G2l7oputHQmq83e3w3telJLWGhjA+fROem3gAw/SA==";

/** Floating feature badge — shared between badges */
const FeatureBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-glowly-lavender/30 flex items-center gap-2">
    <svg
      width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="text-glowly-lavender" aria-hidden="true"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
    <span className="font-sans text-body-sm font-semibold text-glowly-black whitespace-nowrap">
      {children}
    </span>
  </div>
);

export const Hero = () => {
  return (
    <section className="w-full bg-transparent overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 py-6 lg:py-24 items-center min-h-96 lg:min-h-[600px]">

          {/* ── Left content ── */}
          <div className="flex flex-col justify-center z-10">
            <p className="font-sans font-normal text-body-sm sm:text-body-lg text-glowly-black mb-2 lg:mb-4">
              Your local nail place
            </p>

            <h1 className="font-cormorant-heading text-h1 text-glowly-black mb-2 lg:mb-4">
              Premium Russian Gel Manicure &amp; Pedicure in Paoli, PA
            </h1>

            <h2 className="font-cormorant-heading text-h2 text-glowly-black mb-4 lg:mb-8">
              crafted with low-toxic formulas.
            </h2>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={HERO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book px-5 py-2 lg:px-8 lg:py-3 text-white font-display font-normal text-body-xl lg:text-display-md bg-glowly-action-orange shadow-lg hover:shadow-xl hover:opacity-80"
              >
                Book now
              </a>

              <a
                href={HERO_GIFT_CARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-glowly-lavender/30 text-glowly-black font-sans font-semibold text-body-sm hover:shadow-lg transition duration-200 w-fit relative"
              >
                <span className="absolute -top-3 left-0 bg-glowly-orange text-white text-body-xxs font-semibold px-2 py-0.5 rounded">
                  new
                </span>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-glowly-lavender" aria-hidden="true"
                >
                  <path d="M20 12v10H4V12" />
                  <path d="M22 7H2v5h20V7z" />
                  <path d="M12 22V7" />
                  <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" />
                </svg>
                Gift cards available
              </a>
            </div>
          </div>

          {/* ── Right image ── */}
          <div className="relative flex items-center justify-center">
            {/* Floating feature badges — desktop only */}
            <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
              <div className="absolute top-12 right-40">
                <FeatureBadge>300+ gel shades</FeatureBadge>
              </div>
              <div className="absolute top-1/3 right-8">
                <FeatureBadge>SPF Skin Protection</FeatureBadge>
              </div>
              <div className="absolute top-1/2 right-12">
                <FeatureBadge>HEMA-free, TPO-free Gel Formulas</FeatureBadge>
              </div>
            </div>

            {/* Mobile image */}
            <div
              className="lg:hidden flex items-center justify-center relative"
              style={{
                marginLeft: "-3rem",
                marginRight: "-3rem",
                width: "calc(100% + 6rem)",
                aspectRatio: "1 / 1",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/hero/1.png"
                alt="LS Beauty Manicure"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="828"
                height="828"
              />
            </div>

            {/* Desktop image — bleeds to right viewport edge */}
            <div
              className="hidden lg:block h-[600px]"
              style={{
                marginRight: "calc(-1 * (max(0px, (100vw - 1280px) / 2) + 1.5rem))",
                width: "calc(100% + max(0px, (100vw - 1280px) / 2) + 1.5rem)",
              }}
            >
              <img
                src="/images/hero/2.png"
                alt="LS Beauty Manicure"
                className="w-full h-full object-cover object-left-top"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="1440"
                height="960"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};