import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { useState } from "react";
import { GoogleReviews } from "@/components/GoogleReviews";
import { OwnerStory } from "@/components/OwnerStory";
import { ExperiencedTeam } from "@/components/ExperiencedTeam";
import { SalonGallery } from "@/components/SalonGallery";


// ─── SEO: JSON-LD structured data ────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "LS Beauty Salon & Spa",
  image: "https://lsbeautysalon.com/images/hero/hero.webp",
  description:
    "Premium Russian Gel Manicure & Pedicure in Paoli, PA. Specializing in Russian Manicure, Strong Gel, and beauty services with low-toxic formulas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24 Paoli Pike",
    addressLocality: "Paoli",
    addressRegion: "PA",
    postalCode: "19301",
    addressCountry: "US",
  },
  telephone: "+12679624747",
  url: "https://lsbeautysalon.com",
  openingHours: ["Mo-Sa 08:30-19:00"],
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/lsbeautypaoli",
    "https://www.tiktok.com/@lsbeauty24",
  ],
};

// ─── Services Data ────────────────────────────────────────────────────────────
const SIGNATURE_COLOR = "#0097A7";

const services = [
  {
    id: 1, slug: "nails", name: "Nails", isSignature: true, fromPrice: "60",
    bookingUrl: "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwPQt+3IWnukrBmUhTxnOo0IuQaQHrH1+bWRYmdN+vZD9GHvsdAWEl93xbhuOPkGY185dlJN/iheKouWHWBpiRZndZPJ1OiOpNW3zsOKbWSsA9PdnD1QbSU2qNs0y9lSBg6YgFiw2AeBARHgCM9G18CJcyJwufzqR4/Mj0gyG0VVElGYnDKC90r4/Zf5+8l7rRggS9Ld9tJh+l/Z4p+W5CYc=",
  },
  {
    id: 2, slug: "hair-styling", name: "Hair Styling", fromPrice: "-",
    bookingUrl: "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwPQt+3IWnukrBmUhTxnOo0IuQaQHrH1+bWRYmdN+vZD9GHvsdAWEl93xbhuOPkGY185dlJN/iheKouWHWBpiRZlxFff3RvcBoyZ93fCnlseqTHUWCoY4/eJ68WJmItS+ci3yhDmWkuuBwRNwjx6Svmd/9knu1N9gJ0Jf7WBhEUOQ/47sBB37mG3sUiHPDqDPx3ZC0f34Blvyd7RLPkYhXLs=",
  },
  {
    id: 3, slug: "facials", name: "Facials", fromPrice: "85",
    bookingUrl: "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwPQt+3IWnukrBmUhTxnOo0IuQaQHrH1+bWRYmdN+vZD9GHvsdAWEl93xbhuOPkGY185dlJN/iheKouWHWBpiRZmHAYBsZRT879HlA1Ypd5JJrK8Xqcohu0Sj6lQpcSJ3S4q1zn4auiYW39k08dSa9/1CnKriaZVPvvqO3OROWq0vO3yEknRmTXLWRDM1RNeK3HULjL1kO1fe4fVbfxWGBI=",
  },
  {
    id: 4, slug: "brows", name: "Brows", fromPrice: "30",
    bookingUrl: "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwPQt+3IWnukrBmUhTxnOo0IuQaQHrH1+bWRYmdN+vZD9GHvsdAWEl93xbhuOPkGY185dlJN/iheKouWHWBpiRZl2G/+g45Pu5L6sYhIj+zIWJQoy+Uf/4FkNszJxCx/BvXe31+deY1lYX10HQUJbyKYfwFdk5uVA2tYDt6gjz9hptq9MoHIjjzRCG5wDVfdrkZRVsgiirOQ3QtNYIakHYEk=",
  },
  {
    id: 5, slug: "lashes", name: "Lashes", fromPrice: "20",
    bookingUrl: "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwPQt+3IWnukrBmUhTxnOo0IuQaQHrH1+bWRYmdN+vZD9GHvsdAWEl93xbhuOPkGY185dlJN/iheKouWHWBpiRZkRYC8rP7jA/FV50p/JJctTF23+5hOCDne/i/FGNsxvzg5o9QWjc59GR5TbbYeE5TWDpmEMxRsXVU5RCt0rQO8cBcD0Vm1uNeVq8CxeBRMdedeiFZc0pk9Q1NhrKl3TtgE=",
  },
  {
    id: 6, slug: "massage", name: "Massage", fromPrice: "-",
    bookingUrl: "https://www.vagaro.com/lsbeautysalon",
  },
  {
    id: 7, slug: "permanent-makeup", name: "Permanent Makeup", fromPrice: "180",
    bookingUrl: "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwPQt+3IWnukrBmUhTxnOo0IuQaQHrH1+bWRYmdN+vZD9GHvsdAWEl93xbhuOPkGY185dlJN/iheKouWHWBpiRZlnxyFOmUt3EZlZSQ7Q2O1vLax+1+Vklw0Phsi1KyQAzNNfMlgLdirnyoRm8GvtiXy45bauiJ8PCvC7DXgAPrTY4B4X5JxdjGPgQaLOg8HgtOHRNrSrf8qRdD6fmzdUYD8=",
  },
  {
    id: 8, slug: "sugaring", name: "Sugaring", fromPrice: "15",
    bookingUrl: "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwPQt+3IWnukrBmUhTxnOo0IuQaQHrH1+bWRYmdN+vZD9GHvsdAWEl93xbhuOPkGY185dlJN/iheKouWHWBpiRZkP9FO3xRqVF4uLO4rpkrtKyH4o0t2HrvVM7x7B0nH0LgTeRNhadZQrzm/wlnZ39x/O3h1bzG2LRwSeGRAowguIFSmLkCojlMnfE4rgmZs8d1zWdr4LsKKRxJJFDiU6U6g=",
  },
  {
    id: 9, slug: "waxing", name: "Waxing", fromPrice: "15",
    bookingUrl: "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwPQt+3IWnukrBmUhTxnOo0IuQaQHrH1+bWRYmdN+vZD9GHvsdAWEl93xbhuOPkGY185dlJN/iheKouWHWBpiRZkBnO1sSnVvzAWhmIkgw6neSL2n8HDR6l1tWue58AfCKsWHcGBq0xAR+/qaxmfq/WJqjt7rrKvaUlsdcG0xim5wo1Nsn3+PJxPKZTmKcf22CY8Jid9C0n50dshQTTtEWH0=",
  },
];

// ─── Intro Screen ─────────────────────────────────────────────────────────────
function IntroScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"logo" | "fadeout">("logo");

  useState(() => {
    const t1 = setTimeout(() => setPhase("fadeout"), 1600);
    const t2 = setTimeout(() => onDone(), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  });

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "white",
        transition: "opacity 0.8s ease",
        opacity: phase === "fadeout" ? 0 : 1,
        pointerEvents: phase === "fadeout" ? "none" : "all",
      }}
    >
      <div className="flex flex-col items-center animate-intro-logo">
        <span className="text-intro-brand font-bold text-glowly-black" style={{ letterSpacing: "-0.02em", lineHeight: 1 }}>
          LS Beauty
        </span>
        <span className="text-intro-sub text-glowly-orange animate-intro-sub uppercase tracking-[0.35em] mt-[6px]">
          Salon &amp; Spa
        </span>
        <div
          className="mt-3 h-[2px] animate-intro-line"
          style={{ background: "linear-gradient(90deg, #0097A7, #49d0c9)", width: 0 }}
        />
      </div>
    </div>
  );
}

// ─── Services Accordion ───────────────────────────────────────────────────────
function ServicesAccordion() {
  return (
    <div className="space-y-4">
      {services.map((service, index) => {
        const priceLabel = isNaN(Number(service.fromPrice)) ? service.fromPrice : `$${service.fromPrice}`;

        return (
          <div
            key={service.id}
            className="relative animate-fade-slide-up"
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            {service.isSignature && (
              <div className="absolute -top-3 left-6 z-20 badge-pill bg-glowly-action-orange text-white">
                Signature
              </div>
            )}

            <div
              className="accordion-item border-2 bg-white"
              style={{
                borderRadius: "9999px",
                borderColor: SIGNATURE_COLOR,
              }}
            >
              <div className="w-full flex items-center justify-between px-4 lg:px-7 py-3 lg:py-5 text-left gap-2">
                <div className="flex items-center min-w-0 flex-1">
                  <span className="font-cormorant-heading text-card-title text-glowly-black truncate">
                    {service.name}
                  </span>
                </div>

                <div className="flex items-center gap-3 lg:gap-6 flex-shrink-0">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <span className="font-sans text-price-from text-glowly-black/90 uppercase tracking-tighter">
                      From
                    </span>
                    <span className="font-display text-price text-glowly-black whitespace-nowrap">
                      {priceLabel}
                    </span>
                  </div>

                  <a
                    href={service.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${service.name} at LS Beauty Salon`}
                    className="btn-book px-4 lg:px-6 py-2 text-btn bg-glowly-orange text-white hover:opacity-90"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Why Us items ─────────────────────────────────────────────────────────────
const WHY_ITEMS = [
  {
    title: "Experienced Team",
    desc: <>Skilled nail technicians with <span className="font-bold text-body-xl text-glowly-action-orange">5+ years of experience</span>.</>,
  },
  {
    title: "Maintenance On Us",
    desc: <>Our <span className="font-bold text-body-xl text-glowly-action-orange">10-day guarantee</span> covers your manicure.</>,
  },
  {
    title: "Complete Service",
    desc: <>One price covers everything from removal to design.</>,
  },
];

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <>
      <Seo
        title="LS Beauty Salon & Spa | Russian Gel Manicure & Pedicure in Paoli, PA"
        description="LS Beauty Salon & Spa in Paoli, PA offers Russian gel manicure, pedicure, facials, lashes, brows and more with low-toxic formulas and expert care."
        path="/"
        image="/images/hero/hero-desktop-manicure.png"
        jsonLd={structuredData}
      />

      <div className="min-h-screen bg-white relative overflow-x-hidden">
        {/* Background gradient — desktop only */}
        <div
          className="hidden lg:block absolute top-0 right-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            width: "110vw",
            height: "140vh",
            background: `radial-gradient(
              ellipse 50% 45% at 75% 20%,
              rgba(92, 225, 230, 0.45) 0%,
              rgba(92, 225, 230, 0.22) 30%,
              rgba(92, 225, 230, 0.08) 55%,
              rgba(92, 225, 230, 0.02) 75%,
              rgba(92, 225, 230, 0) 100%
            )`,
          }}
        />

        <div className="relative">
          <Header />
          <main className="pt-24 lg:pt-0" id="main-content">
            <Hero />
          </main>
        </div>

        {/* ── 2. About Owner / История салона ── */}
        <OwnerStory />

        {/* ── 3. Services ── */}
        <section id="services" className="relative py-16 lg:py-24" aria-label="Our Services">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="section-heading">Services</h2>
            <ServicesAccordion />
          </div>
        </section>

        {/* Services → Reviews divider */}
        <div className="relative h-0 overflow-visible pointer-events-none" aria-hidden="true" style={{ zIndex: 10 }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "80px",
            background: "linear-gradient(to bottom, white 0%, transparent 100%)", zIndex: 5,
          }} />
        </div>

        {/* ── Reviews ── */}
        <GoogleReviews />

        {/* ── Why LS Beauty ── */}
        <section id="why" className="relative py-16 lg:py-24 overflow-visible" aria-label="Why Choose LS Beauty">
          <div className="max-w-7xl mx-auto px-6">

            {/* Mobile */}
            <div className="lg:hidden rounded-[48px] overflow-hidden flex flex-col relative" style={{ marginTop: "4rem", marginBottom: "4rem" }}>
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/why/LSBeauty-location-nails.webp')", backgroundSize: "cover", backgroundPosition: "center", filter: "blur(7px) brightness(0.75)", transform: "scale(1.08)", zIndex: 0 }} />
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,151,167,0.5)", zIndex: 1 }} />
              <div className="p-8 flex flex-col gap-8 relative" style={{ zIndex: 2 }}>
                {WHY_ITEMS.map((item) => (
                  <div key={item.title} className="space-y-3">
                    <div className="chip-white">
                      <h3 className="font-libre-heading text-h2 text-glowly-black">{item.title}</h3>
                    </div>
                    <p className="font-sans text-body-xl text-white leading-relaxed drop-shadow">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-end justify-center relative" style={{ minHeight: "300px", zIndex: 2 }}>
                <img src="/images/why/master.webp" alt="Nail technician performing Russian gel manicure at LS Beauty Salon, Paoli PA" className="w-auto object-contain" style={{ maxHeight: "320px" }} loading="lazy" width="320" height="320" />
              </div>
            </div>

            {/* Desktop */}
            <div className="relative hidden lg:flex flex-row items-stretch" style={{ minHeight: "550px", overflow: "visible" }}>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute", top: 0, bottom: 0,
                  left: "calc(-1 * (max(0px, (100vw - 1280px) / 2) + 1.5rem))",
                  right: 0,
                  borderTopRightRadius: "80px", borderBottomRightRadius: "80px",
                  overflow: "hidden", zIndex: 0,
                }}
              >
                <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/why/LSBeauty-location-nails.webp')", backgroundSize: "cover", backgroundPosition: "center", filter: "blur(5px) brightness(0.75)", transform: "scale(1.08)" }} />
                <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,151,167,0.45)" }} />
              </div>

              <div
                className="relative hidden lg:flex items-end justify-center"
                style={{
                  marginLeft: "calc(-1 * (max(0px, (100vw - 1280px) / 2) + 1.5rem))",
                  width: "calc(50% + max(0px, (100vw - 1280px) / 2) + 1.5rem)",
                  zIndex: 2, overflow: "visible",
                }}
              >
                <img
                  src="/images/why/master.webp"
                  alt="Nail technician performing Russian gel manicure at LS Beauty Salon, Paoli PA (desktop)"
                  style={{ position: "absolute", bottom: 0, height: "120%", width: "auto", objectFit: "contain", filter: "drop-shadow(0 -8px 20px rgba(0,0,0,0.2))", zIndex: 3 }}
                  loading="lazy" width="500" height="600"
                />
              </div>

              <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center gap-10" style={{ zIndex: 2, position: "relative" }}>
                {WHY_ITEMS.map((item) => (
                  <div key={item.title} className="space-y-3">
                    <div className="chip-white">
                      <h3 className="font-display text-display-md text-glowly-black">{item.title}</h3>
                    </div>
                    <p className="font-sans text-white text-body-xl leading-relaxed max-w-md drop-shadow">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── 4. Experienced Team ── */}
        <ExperiencedTeam />

        {/* ── 5. Gallery + 6. FAQ (inside SalonGallery) ── */}
        <SalonGallery />

        {/* ── Locations ── */}
        <section id="locations" className="py-12 lg:py-24" aria-label="Salon Location and Hours">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">

            <h2 className="font-display text-display-xl lg:text-section text-center text-glowly-black mb-4">
              Visit <span className="text-glowly-action-orange">Us</span>
            </h2>
            <p className="font-sans text-body-lg text-center text-glowly-black mb-10 lg:mb-16">
              Your destination for beauty, relaxation &amp; rejuvenation
            </p>

            <div className="max-w-2xl mx-auto rounded-[36px] overflow-hidden shadow-2xl">
              <div className="relative" style={{ height: "280px" }}>
                <img src="/images/why/LSBeauty-location.webp" alt="LS Beauty Salon interior, modern nail studio in Paoli PA" className="w-full h-full object-cover" loading="lazy" />
                <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", background: "linear-gradient(to bottom, transparent, white)" }} />
              </div>

              <div className="bg-white px-8 lg:px-12 pt-6 pb-10 flex flex-col items-center text-center gap-6">
                <div>
                  <h3 className="font-display text-display-lg text-glowly-black mb-1">LS Beauty Salon</h3>
                  <p className="font-sans text-body-md text-glowly-black/90">Paoli, Pennsylvania</p>
                </div>

                <address className="not-italic flex flex-col items-center gap-3 w-full">
                  <a href="tel:+12679624747" className="font-sans text-body-lg font-bold text-glowly-black hover:text-glowly-action-orange transition-colors">
                    (267) 962-4747
                  </a>
                  <p className="font-sans text-body-md text-glowly-black/90">24 Paoli Pike, Paoli, PA 19301</p>
                </address>

                <div className="w-full rounded-2xl px-6 py-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-body-xs font-bold uppercase tracking-widest text-glowly-black/90">Mon — Sat</span>
                    <span className="font-sans font-bold text-glowly-black">8:30am – 7:00pm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-body-xs font-bold uppercase tracking-widest text-glowly-black/90">Sunday</span>
                    <span className="font-sans text-body-sm italic text-glowly-black/90">By appointment only</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a
                    href="https://maps.google.com/?q=24+Paoli+Pike,+Paoli,+PA+19301"
                    target="_blank" rel="noopener noreferrer"
                    className="btn-book flex-1 px-6 py-3 text-btn bg-glowly-orange text-white  shadow-lg hover:scale-105 active:scale-95"
                   style={{ fontSize: "clamp(1.10rem, 2vw, 1.125rem)" }}
                  >
                    Get Directions
                  </a>
                  <a
                    href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwNlvYRLH2CLa8oQn7Kvmq3u9a9wMuqMg2ykEqGkJqLcdcR91UlT1Cp4HwOydwDxY8kULw76hB6JD2JbI2jgKzQI5Y9tMd+N5AevdKLZA+iD12dDf9MA+h2I/CGCcfoiVsCWKdZqAnTwLpMAaM2h3YWoPeiHpmo4Ulg0aaVUjKuB6WU/auJjjEidtZGYbjBf6ukczEJqAkJYyNz1NrrDG1D4="
                    target="_blank" rel="noopener noreferrer"
                    className="btn-book flex-1 px-6 py-3 text-btn border-2 bg-glowly-action-orange text-glowly-white hover:bg-glowly-orange hover:text-white"
                   style={{ fontSize: "clamp(1.10rem, 2vw, 1.125rem)" }}
                  >
                    Book Now
                  </a>
                </div>

                <p className="font-sans text-body-xxs text-glowly-black/90 italic">
                  * We recommend booking in advance to secure your preferred time.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── Gift Cards ── */}
        <section className="py-16 lg:py-24" aria-label="Gift Cards">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
            <div className="relative mb-8" style={{ width: "320px", height: "220px" }} aria-hidden="true">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 220" fill="none">
                <path d="M20 80 Q 60 40 80 20"   stroke="rgba(92,225,230,0.3)"  strokeWidth="1.5" fill="none" />
                <path d="M10 110 Q 50 70 90 50"  stroke="rgba(92,225,230,0.25)" strokeWidth="1"   fill="none" />
                <path d="M300 80 Q 260 40 240 20" stroke="rgba(92,225,230,0.3)"  strokeWidth="1.5" fill="none" />
                <path d="M310 110 Q 270 70 230 50" stroke="rgba(92,225,230,0.25)" strokeWidth="1" fill="none" />
                <path d="M20 160 Q 60 180 80 200"  stroke="rgba(92,225,230,0.3)"  strokeWidth="1.5" fill="none" />
                <path d="M300 160 Q 260 180 240 200" stroke="rgba(92,225,230,0.3)" strokeWidth="1.5" fill="none" />
              </svg>
              <div
                className="absolute inset-x-8 inset-y-4 rounded-2xl flex flex-col items-center justify-center shadow-lg"
                style={{ background: "linear-gradient(135deg, rgba(92,225,230,0.6) 0%, rgba(150,140,210,0.7) 100%)" }}
              >
                <span className="font-display text-display-lg text-white/90 tracking-wide">LS Beauty</span>
                <span className="font-sans text-body-xs text-white/60 tracking-widest mt-1">Salon &amp; Spa</span>
              </div>
            </div>

            <h2 className="font-display text-display-lg lg:text-display-xl text-glowly-black mb-3">
              Gift Cards are here!
            </h2>
            <a
              href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEnk9BFT/HqRx/IALXmx5C7ImPYA3Yu4eIJtK+ueOk80+3J3nlWbHbq7DuOtJQ9ddI4oI7CbNGfrxHQ6dH5RO5qT+qxmUSnICrMTVzNEheBLMe+tjWHsrEdmASaowojwhLf8JEkDHOo1PsHhWdIZJLSwxJHep4Z7y4iwaAjizgw/wCdmoGoxQHAWvJiNJdO1sBxAU0UUHUE4zBAhZfVPr54NuPAKJju5PNv6HFdmssje5KdElf82YprLypFyRSD1jZyvOwmpHq1gckuXRK7qlqXR2qU2DyuQY5Ow6oqhVOFe1e1YLMpX9828Uf5Hu0ohwFOJB1AeuqxRjyZH8YS7IYXwBwFAB0TGdHNwRSo90SWh3Bs3TvJuREt3KNTa/L/LBnHHa0HWqyVicF5HZvXwz96qZ5bFv++gDLxRW94elRMt9NKSWtIhDAH+pCAH3IKa+5GHi/iQ17Y3E+2WKo9xHWTz8G2l7oputHQmq83e3w3telJLWGhjA+fROem3gAw/SA=="
              target="_blank" rel="noopener noreferrer"
              className="btn-book gap-2 px-8 py-4 text-body-md bg-glowly-orange text-white hover:opacity-80"
            style={{ fontSize: "clamp(1.10rem, 2vw, 1.125rem)" }}
           >
              <span aria-hidden="true">→</span> Purchase Gift Card
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}