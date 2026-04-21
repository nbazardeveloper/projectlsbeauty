// OwnerStory.tsx
// Photo paths:
//   /images/owner/owner-portrait.webp
//   /images/owner/owner-teaching.webp
//   /images/owner/owner-certificates.webp
//   /images/owner/students-group.webp

const BOOKING_URL =
  "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwNlvYRLH2CLa8oQn7Kvmq3u9a9wMuqMg2ykEqGkJqLcdcR91UlT1Cp4HwOydwDxY8kULw76hB6JD2JbI2jgKzQI5Y9tMd+N5AevdKLZA+iD12dDf9MA+h2I/CGCcfoiVsCWKdZqAnTwLpMAaM2h3YWoPeiHpmo4Ulg0aaVUjKuB6WU/auJjjEidtZGYbjBf6ukczEJqAkJYyNz1NrrDG1D4=";

export function OwnerStory() {
  return (
    <section
      id="about"
      className="py-16 lg:py-28 bg-white"
      aria-label="About the Owner"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="font-sans text-body-sm text-glowly-orange uppercase tracking-widest mb-4 text-center lg:text-left">
          Meet the founder
        </p>

        {/* ── Portrait + Bio ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 lg:mb-20">

          {/* Portrait — clean, no decorative blobs */}
          <div className="overflow-hidden rounded-[40px] aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 shadow-lg">
            <img
              src="/images/owner/owner-portrait.webp"
              alt="Lira, founder and lead nail technician at LS Beauty Salon & Spa, Paoli PA"
              className="w-full h-full object-cover object-top"
              loading="lazy"
              width="400"
              height="533"
            />
          </div>

          {/* Bio — short version for homepage */}
          <div className="flex flex-col justify-center">
            <h2 className="font-cormorant-heading text-section text-glowly-black mb-6 leading-tight">
              Passion for the craft,<br />
              <span className="text-glowly-orange">precision in every detail</span>
            </h2>

            <div className="space-y-4 font-sans text-body-lg text-glowly-black">
              <p>
                My name is Lira, and I have been in the beauty industry for over 17 years. I am not just a nail artist — I am a woman, a mother of three, and a happy wife. I deeply understand how important it is for every woman to make time for herself.
              </p>
              <p>
                I specialize in Russian Manicure — a discipline built on precision, excellence, and quality. Today I am a licensed nail professional, licensed educator, international trainer, and a licensed Russian Manicure trainer in the United States.
              </p>
              <p className="text-body-md text-glowly-black italic">
                Manicure is not just maintenance. It is about confidence, how you feel, and self-love.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-8">
              {[
                { num: "17+", label: "Years experience" },
                { num: "1500+", label: "Clients served" },
                { num: (
      <>
        5 <span className="text-[0.6em] align-middle">★</span>
      </>
    ), label: "Reviews Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-cormorant-heading text-display-xl text-glowly-orange leading-none">
                    {stat.num}
                  </p>
                  <p className="font-sans text-body-sm text-glowly-black mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
           {/* CTA — Mobile optimized */}
<div className="mt-8 flex flex-col sm:flex-row gap-4">
  <a
    href={BOOKING_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-book w-full sm:w-auto px-8 py-3 text-body-md text-white bg-glowly-action-orange shadow-lg hover:opacity-80 text-center"
   style={{ fontSize: "clamp(1.10rem, 2vw, 1.125rem)" }}
  >
    Book Service Now
  </a>
  <a
    href="/training"
    className="btn-book w-full sm:w-auto px-8 py-3 text-body-md border-2 border-glowly-orange text-glowly-black hover:bg-glowly-orange/10 text-center"
   style={{ fontSize: "clamp(1.10rem, 2vw, 1.125rem)" }}
  >
    View Training Courses
  </a>
</div>
          </div>
        </div>

        {/* ── Teaching gallery ── */}
        <p className="font-sans text-body-sm text-glowly-black uppercase tracking-widest mb-6 text-center">
          Educator · Mentor · Trainer
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          <div className="overflow-hidden rounded-[28px] aspect-[4/3]">
            <img
              src="/images/owner/owner-teaching.webp"
              alt="Lira teaching nail technician students at LS Beauty training course"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width="400"
              height="300"
            />
          </div>
          <div className="overflow-hidden rounded-[28px] aspect-[4/3] sm:mt-6">
            <img
              src="/images/owner/owner-certificates.webp"
              alt="Lira presenting completion certificates to nail training graduates"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width="400"
              height="300"
            />
          </div>
          <div className="overflow-hidden rounded-[28px] aspect-[4/3]">
            <img
              src="/images/owner/students-group.webp"
              alt="Group photo of nail technician students at LS Beauty training program"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width="400"
              height="300"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

