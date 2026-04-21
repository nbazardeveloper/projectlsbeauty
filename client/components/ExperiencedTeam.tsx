// ExperiencedTeam.tsx
// Photo paths:
//   /images/team/team-group.webp       — group banner photo
//   /images/team/staff-lira.webp       — owner
//   /images/team/staff-3.webp          — staff member
//   /images/team/staff-4.webp          — staff member
//   /images/team/staff-5.webp          — staff member
//   /images/team/staff-uliana.webp     — receptionist

const BOOKING_URL =
  "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwNlvYRLH2CLa8oQn7Kvmq3u9a9wMuqMg2ykEqGkJqLcdcR91UlT1Cp4HwOydwDxY8kULw76hB6JD2JbI2jgKzQI5Y9tMd+N5AevdKLZA+iD12dDf9MA+h2I/CGCcfoiVsCWKdZqAnTwLpMAaM2h3YWoPeiHpmo4Ulg0aaVUjKuB6WU/auJjjEidtZGYbjBf6ukczEJqAkJYyNz1NrrDG1D4=";

const TEAM_MEMBERS = [
  {
    name: "Lira",
    role: "Founder & Lead Nail Technician",
    specialty: "Russian Manicure · Strong Gel",
    photo: "/images/team/staff-lira.webp",
    isOwner: true,
  },
  {
    name: "Team Member",
    role: "Nail Technician",
    specialty: "Russian Manicure · Pedicure",
    photo: "/images/team/staff-3.webp",
    isOwner: false,
  },
  {
    name: "Team Member",
    role: "Nail Technician",
    specialty: "Russian Manicure · Pedicure",
    photo: "/images/team/staff-4.webp",
    isOwner: false,
  },
  {
    name: "Team Member",
    role: "Nail Technician",
    specialty: "Russian Manicure · Pedicure",
    photo: "/images/team/staff-5.webp",
    isOwner: false,
  },
];

export function ExperiencedTeam() {
  return (
    <section
      id="team"
      className="pb-16 lg:pb-24 bg-white overflow-hidden"
      aria-label="Our Team"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── SEO text block — Improved alignment ── */}
        <div className="mb-16 max-w-4xl">
          <p className="font-sans text-body-sm text-glowly-orange uppercase tracking-widest mb-4">
            Our standards
          </p>
          <h2 className="font-cormorant-heading text-h2 text-glowly-black mb-6">
            Expertise in Every Detail
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="font-sans text-body-lg text-glowly-black leading-relaxed">
              Every artist at LS Beauty is trained through Lira's personal system and works by unified standards — perfecting every detail on every client. We work with quality.
            </p>
           
          </div>
        </div>

        {/* ── Team cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.name + member.photo}
              className="relative group overflow-hidden rounded-[28px] shadow-sm border border-glowly-orange/5"
            >
              {member.isOwner && (
                <div className="absolute top-3 left-3 z-10 badge-pill bg-glowly-action-orange text-white">
                  Founder
                </div>
              )}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.photo}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-cormorant-heading text-display-md text-glowly-black leading-tight">
                  {member.name}
                </h3>
                <p className="font-sans text-body-xs text-glowly-orange mt-1 uppercase tracking-wider">{member.role}</p>
                <p className="font-sans text-body-xs text-glowly-black/90 mt-2 italic">{member.specialty}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ── Combined CTA Card (Receptionist + Buttons) ── */}
        <div className="flex flex-col lg:flex-row items-center gap-8 rounded-[32px] border-2 border-glowly-orange/20 p-6 lg:p-10 bg-glowly-orange/5">
          <div className="flex-shrink-0 w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-glowly-orange/10 shadow-md">
            <img
              src="/images/team/staff-uliana.webp"
              alt="Receptionist"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="text-center lg:text-left flex-1">
            <p className="font-sans text-body-xs text-glowly-orange uppercase tracking-widest mb-1">
              Guest Experience
            </p>
            <h3 className="font-cormorant-heading text-display-md text-glowly-black mb-2">
              Your first smile at LS Beauty
            </h3>
            <p className="font-sans text-body-md text-glowly-black max-w-xl">
              Our receptionist is here to welcome you and make sure your visit is smooth from the moment you walk in.
            </p>
          </div>

          {/* Buttons moved next to each other here */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-book px-8 py-3 text-body-md text-white bg-glowly-action-orange shadow-lg hover:opacity-90 text-center"
             style={{ fontSize: "clamp(1.10rem, 2vw, 1.125rem)" }}
            >
              Book Now
            </a>
            <a
              href="tel:+12679624747"
              className="btn-book px-8 py-3 border-2 border-glowly-orange text-body-md text-glowly-black hover:bg-glowly-orange/10 text-center"
            style={{ fontSize: "clamp(1.10rem, 2vw, 1.125rem)" }}
           >
              (267) 962-4747
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}