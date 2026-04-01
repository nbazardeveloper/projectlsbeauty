export const Hero = () => {
  return (
    <section className="w-full bg-transparent overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 py-6 lg:py-24 items-center min-h-96 lg:min-h-[600px]">
          {/* Left content */}
          <div className="flex flex-col justify-center z-10">
            <p className="font-sans font-normal text-sm sm:text-lg text-glowly-black mb-2 lg:mb-4">
              Your local nail place
            </p>
            <h1 className="font-display font-normal text-4xl sm:text-5xl lg:text-6xl leading-tight text-glowly-black mb-2 lg:mb-4">
              Premium Russian Gel Manicure &amp; Pedicure in Paoli, PA
            </h1>
            <h2 className="font-display font-normal text-2xl sm:text-3xl lg:text-4xl leading-tight text-glowly-black mb-4 lg:mb-8">
              crafted with low-toxic formulas.
            </h2>
            <a
              href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwNlvYRLH2CLa8oQn7Kvmq3u9a9wMuqMg2ykEqGkJqLcdcR91UlT1Cp4HwOydwDxY8kULw76hB6JD2JbI2jgKzQI5Y9tMd+N5AevdKLZA+iD12dDf9MA+h2I/CGCcfoiVsCWKdZqAnTwLpMAaM2h3YWoPeiHpmo4Ulg0aaVUjKuB6WU/auJjjEidtZGYbjBf6ukczEJqAkJYyNz1NrrDG1D4="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2 lg:px-8 lg:py-3 text-white font-display font-normal text-xl bg-glowly-action-orange  lg:text-2xl rounded-full transition duration-300 w-fit shadow-lg hover:shadow-xl hover:opacity-80"
            >
              Book now
            </a>
          </div>
          
          

          {/* Right image */}
          <div className="relative flex items-center justify-center">
            {/* Feature badges — floating over image */}
            <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
              {/* 300+ gel shades */}
              <div className="absolute top-12 right-40 bg-white rounded-full px-4 py-2 shadow-lg border border-glowly-lavender/30 flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-glowly-lavender"
                >
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                <span className="font-sans text-s font-semibold text-glowly-black whitespace-nowrap">
                  300+ gel shades
                </span>
              </div>

              {/* SPF Skin Protection */}
              <div className="absolute top-1/3 right-8 bg-white rounded-full px-4 py-2 shadow-lg border border-glowly-lavender/30 flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-glowly-lavender"
                >
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                <span className="font-sans text-s font-semibold text-glowly-black whitespace-nowrap">
                  SPF Skin Protection
                </span>
              </div>

              {/* HEMA-free, TPO-free */}
              <div className="absolute top-1/2 right-12 bg-white rounded-full px-4 py-2 shadow-lg border border-glowly-lavender/30 flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-glowly-lavender"
                >
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                <span className="font-sans text-s font-semibold text-glowly-black whitespace-nowrap">
                  HEMA-free, TPO-free Gel Formulas
                </span>
              </div>
            </div>

            {/* Mobile */}
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
                src="/images/hero/hero-mobil.webp"
                alt="LS Beauty Manicure"
                className="w-full h-full object-cover"
              />
              {/* Mobile feature badges */}
            </div>

            {/* Desktop — bleeds to right viewport edge */}
            <div
              className="hidden lg:block h-[600px]"
              style={{
                marginRight:
                  "calc(-1 * (max(0px, (100vw - 1280px) / 2) + 1.5rem))",
                width: "calc(100% + max(0px, (100vw - 1280px) / 2) + 1.5rem)",
              }}
            >
              <img
                src="/images/hero/hero.webp"
                alt="LS Beauty Manicure"
                className="w-full h-full object-cover object-left-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
