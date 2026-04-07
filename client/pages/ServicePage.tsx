import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { getServiceBySlug, getRelatedServices, SERVICES } from "@/data/services";

// ── Breadcrumb ────────────────────────────────────────────────────────────────
function Breadcrumb({ name }: { name: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 font-sans text-body-sm text-glowly-black/50">
        <li><Link to="/" className="hover:text-glowly-orange transition-colors">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li><Link to="/services" className="hover:text-glowly-orange transition-colors">Services</Link></li>
        <li aria-hidden="true">/</li>
        <li className="text-glowly-black font-medium" aria-current="page">{name}</li>
      </ol>
    </nav>
  );
}

// ── FAQ accordion ─────────────────────────────────────────────────────────────
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="accordion-item border-2 border-glowly-orange"
      style={{ borderRadius: open ? "28px" : "9999px" }}
    >
      <button
        className="w-full flex items-center justify-between px-7 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`faq-btn-${index}`}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="font-cormorant-heading text-body-lg lg:text-body-xl text-glowly-black pr-4">
          {q}
        </span>
        <div
          className="flex-shrink-0 w-9 h-9 rounded-full bg-glowly-orange/90 flex items-center justify-center transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </div>
      </button>
      {open && (
        <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-btn-${index}`} className="px-7 pb-6">
          <p className="font-sans text-body-sm lg:text-body-md text-glowly-black/70 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── Related service card ──────────────────────────────────────────────────────
function RelatedCard({ slug, name, tagline, fromPrice }: { slug: string; name: string; tagline: string; fromPrice: string }) {
  return (
    <Link
      to={`/services/${slug}`}
      className="group block border-2 border-glowly-orange rounded-full px-6 py-4 hover:bg-glowly-orange/5 transition-colors"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="font-cormorant-heading text-display-md text-glowly-black group-hover:text-glowly-orange transition-colors">{name}</span>
          <p className="font-sans text-body-xs text-glowly-black/50 mt-0.5">{tagline}</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="font-display text-body-lg text-glowly-black">{fromPrice}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-glowly-orange" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// ── Main ServicePage ──────────────────────────────────────────────────────────
export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug ?? "");

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cormorant-heading text-h1 text-glowly-black mb-4">Service not found</h1>
          <Link to="/" className="btn-book px-6 py-3 bg-glowly-orange text-white">Back to Home</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedServices(service.relatedSlugs);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.heroDescription,
    provider: {
      "@type": "BeautySalon",
      name: "LS Beauty Salon & Spa",
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
    },
    areaServed: "Paoli, PA",
    url: `https://lsbeautysalon.com/services/${service.slug}`,
  };

  return (
    <>
      <Seo
        title={service.seoTitle}
        description={service.seoDescription}
        path={`/services/${service.slug}`}
        jsonLd={structuredData}
      />

      <div className="min-h-screen bg-white relative overflow-x-hidden">
        {/* Subtle background gradient */}
        <div
          className="hidden lg:block absolute top-0 right-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            width: "60vw",
            height: "60vh",
            background: "radial-gradient(ellipse 50% 45% at 75% 20%, rgba(92,225,230,0.3) 0%, rgba(92,225,230,0) 100%)",
          }}
        />

        <Header />

        <main className="pt-28 lg:pt-32 pb-0" id="main-content">

          {/* ── Hero ── */}
          <section className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24">
            <Breadcrumb name={service.name} />

            <div className="max-w-3xl">
              <p className="font-sans text-body-sm text-glowly-orange uppercase tracking-widest mb-3">
                {service.tagline}
              </p>
              <h1 className="font-cormorant-heading text-h1 text-glowly-black mb-6 leading-tight">
                {service.name} in Paoli, PA
              </h1>
              <p className="font-sans text-body-xl text-glowly-black/70 leading-relaxed mb-8 max-w-2xl">
                {service.heroDescription}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={service.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book px-8 py-3 bg-glowly-action-orange text-white text-body-md shadow-lg hover:opacity-90"
                >
                  Book Now — From {service.fromPrice}
                </a>
                <a
                  href="tel:+12679624747"
                  className="font-sans text-body-md text-glowly-black/70 hover:text-glowly-orange transition-colors"
                >
                  (267) 962-4747
                </a>
              </div>
            </div>
          </section>

          {/* ── About ── */}
          <section className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24" aria-label={`About ${service.name}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div>
                <h2 className="font-cormorant-heading text-section text-glowly-black mb-6">
                  About This Service
                </h2>
                <p className="font-sans text-body-lg text-glowly-black/70 leading-relaxed">
                  {service.about}
                </p>
              </div>
              <div>
                <h2 className="font-cormorant-heading text-section text-glowly-black mb-6">
                  What's Included
                </h2>
                <ol className="space-y-3">
                  {service.whatToExpect.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white font-sans font-bold text-body-xs"
                        style={{ background: "linear-gradient(135deg, #0097A7, #49d0c9)" }}
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <span className="font-sans text-body-md text-glowly-black/70 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* ── Benefits ── */}
          <section
            className="py-16 lg:py-24 relative mb-0"
            aria-label={`Benefits of ${service.name}`}
            style={{ overflow: "hidden" }}
          >
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,151,167,0.12)", zIndex: 0 }} />
            <div className="max-w-7xl mx-auto px-6 relative" style={{ zIndex: 1 }}>
              <h2 className="section-heading">
                Why Choose LS Beauty for {service.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-[28px] px-6 py-5 flex items-start gap-4 shadow-sm"
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "linear-gradient(135deg, #0097A7, #49d0c9)" }}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                    </div>
                    <span className="font-sans text-body-md text-glowly-black/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24" aria-label="Frequently Asked Questions">
            <h2 className="section-heading">{service.name} — FAQ</h2>
            <div className="space-y-3 max-w-3xl mx-auto">
              {service.faq.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="max-w-7xl mx-auto px-6 pb-16 lg:pb-24 text-center">
            <div
              className="rounded-[48px] px-8 py-16 lg:py-20"
              style={{ background: "linear-gradient(135deg, rgba(0,151,167,0.15) 0%, rgba(73,208,201,0.1) 100%)" }}
            >
              <h2 className="font-cormorant-heading text-section text-glowly-black mb-4">
                Ready to Book Your {service.name}?
              </h2>
              <p className="font-sans text-body-lg text-glowly-black/60 mb-8 max-w-xl mx-auto">
                LS Beauty Salon & Spa · 24 Paoli Pike, Paoli, PA 19301 · Mon–Sat 8:30am–7:00pm
              </p>
              <a
                href={service.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book px-10 py-4 bg-glowly-action-orange text-white text-body-lg shadow-xl hover:opacity-90"
              >
                Book Now
              </a>
            </div>
          </section>

          {/* ── Related services ── */}
          {related.length > 0 && (
            <section className="max-w-7xl mx-auto px-6 pb-16 lg:pb-24" aria-label="Other Services">
              <h2 className="section-heading">Other Services at LS Beauty</h2>
              <div className="space-y-3 max-w-2xl mx-auto">
                {related.map((s) => (
                  <RelatedCard key={s.slug} slug={s.slug} name={s.name} tagline={s.tagline} fromPrice={s.fromPrice} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/services" className="font-sans text-body-md text-glowly-orange hover:underline">
                  View all services →
                </Link>
              </div>
            </section>
          )}

        </main>

        <Footer />
      </div>
    </>
  );
}




// import { useParams, Link } from "react-router-dom";
// import { useState } from "react";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { Seo } from "@/components/Seo";

// // ─── BOOKING URL ─────────────────────────────────────────────────────────────
// const BOOK_URL = "https://lsbeauty.zenoti.com/webstoreNew/services";

// // ─── TYPES ───────────────────────────────────────────────────────────────────
// interface ServiceItem {
//   id: string;
//   name: string;
//   price: string;
//   description: string;
//   image: string;
//   badge?: string;
// }

// interface ServiceData {
//   name: string;
//   tagline: string;
//   heroColor: string;
//   accentColor: string;
//   badgeColor: string;
//   intro: string;
//   highlights: string[];
//   items: ServiceItem[];
//   faqs: { q: string; a: string }[];
// }

// // ─── DATA ────────────────────────────────────────────────────────────────────

// const servicesData: Record<string, ServiceData> = {
//   nails: {
//     name: "Nails",
//     tagline: "Russian Manicure & Pedicure",
//     heroColor: "rgba(92,225,230,0.12)",
//     accentColor: "#0097A7",
//     badgeColor: "rgba(92,225,230,0.18)",
//     intro:
//       "Experience the gold standard of nail care — Russian gel technique that lasts up to 4 weeks without lifting, chipping, or damage. HEMA-free, TPO-free formulas safe for sensitive skin and pregnant clients. 300+ gel shades available.",
//     highlights: [
//       "HEMA-free & TPO-free",
//       "300+ gel shades",
//       "SPF skin protection",
//       "10-day repair guarantee",
//     ],
//     items: [
//       {
//         id: "regular-mani",
//         name: "Regular Manicure (Russian, no polish)",
//         price: "from $60",
//         description:
//           "Classic Soak or Russian Dry Manicure — choose a soothing water soak with meticulous cuticle care, or the precise electric-file dry technique for impeccably clean cuticles. Finishes with nourishing cuticle oil. Strict hygiene standards throughout.",
//         image: "/images/services/nails/regular-mani.jpg",
//       },
//       {
//         id: "base-gel",
//         name: "Russian Manicure + Base Gel",
//         price: "from $80",
//         badge: "Popular",
//         description:
//           "Authentic Russian manicure with precise cuticle-cleaning, plus a soft base gel application that enhances the natural look — lasting strength and shine for up to three weeks. Pricing may vary based on nail condition and complexity.",
//         image: "/images/services/nails/base-gel.jpg",
//       },
//       {
//         id: "hard-gel-design",
//         name: "Russian Manicure + Hard Gel + Full Design",
//         price: "$110",
//         badge: "Signature",
//         description:
//           "Full Russian manicure with hard-gel strengthening + French, ombré, or custom nail art. Base $90 · French/Ombré +$20 · Nail Art +$5/finger · XL/complex designs may vary.",
//         image: "/images/services/nails/hard-gel-design.jpg",
//       },
//       {
//         id: "builder-overlay",
//         name: "Strong Short Nails – Builder Gel Overlay",
//         price: "from $80",
//         description:
//           "Russian manicure for short nails with hard builder gel for strength lasting up to four weeks. Choose any solid color — no additional designs included.",
//         image: "/images/services/nails/builder-overlay.jpg",
//       },
//       {
//         id: "hard-gel-long",
//         name: "Hard Gel Sculpting (Long Nails)",
//         price: "from $100",
//         description:
//           "Russian manicure technique with nail plate leveling and hard gel sculpting. Ideal for strengthening thin/brittle nails, creating length, and correcting downward-curved nails. Nail designs charged separately.",
//         image: "/images/services/nails/hard-gel-long.jpg",
//       },
//       {
//         id: "gel-extensions",
//         name: "Gel Nail Extensions",
//         price: "from $130",
//         description:
//           "High-quality gel extensions for simple or artistic designs, including short nail elongation. Durable and flexible structure in a variety of styles. Additional charge may apply for length and complexity.",
//         image: "/images/services/nails/gel-extensions.jpg",
//       },
//       {
//         id: "xl-sculpted",
//         name: "Long XL Luxury Sculpted Extensions + Custom Design",
//         price: "from $150",
//         badge: "Luxury",
//         description:
//           "Extra-long sculpted nails with arch and custom design. Includes full Russian manicure. Statement nails crafted with precision — price varies by complexity.",
//         image: "/images/services/nails/xl-sculpted.jpg",
//       },
//       {
//         id: "gel-pedicure",
//         name: "Dry Gel Pedicure (Russian Pedicure)",
//         price: "from $90",
//         badge: "Popular",
//         description:
//           "Russian dry pedicure — electric file cleans cuticles and shapes nails without soaking. Gel polish cured under UV/LED for chip-resistant, durable results.",
//         image: "/images/services/nails/gel-pedicure.jpg",
//       },
//       {
//         id: "regular-pedicure",
//         name: "Regular Pedicure",
//         price: "from $80",
//         description:
//           "Smart Pedicure in a Hydro-Massage Chair — machine cleaning with abrasive discs, nail and heel care, exfoliating scrub, and light massage. Clean, healthy, refreshed feet (no polish).",
//         image: "/images/services/nails/regular-pedicure.jpg",
//       },
//       {
//         id: "mani-pedi",
//         name: "Gel Manicure & Gel Pedicure",
//         price: "from $170",
//         badge: "Best Value",
//         description:
//           "The ultimate nail experience — full Russian gel manicure and Russian gel pedicure combined. Head-to-toe polish that lasts weeks.",
//         image: "/images/services/nails/mani-pedi.jpg",
//       },
//       {
//         id: "callus",
//         name: "Callus Treatment",
//         price: "from $20",
//         description:
//           "Targeted callus removal for softer, smoother feet. Add to any pedicure or book standalone.",
//         image: "/images/services/nails/callus.jpg",
//       },
//       {
//         id: "removal",
//         name: "Gel Polish Removal",
//         price: "$20",
//         description:
//           "Quick and gentle removal of gels and acrylics using an electric file — no acetone, no harsh chemicals. Proper nail care without damage.",
//         image: "/images/services/nails/removal.jpg",
//       },
//       {
//         id: "french-ombre",
//         name: "French / Ombré Design",
//         price: "+$20",
//         description:
//           "Elegant French tips or soft ombré gradient added to any manicure or nail enhancement. Timeless looks, additional charges apply.",
//         image: "/images/services/nails/french-ombre.jpg",
//       },
//       {
//         id: "paraffin",
//         name: "Paraffin Therapy",
//         price: "$20",
//         description:
//           "Luxurious warm wax deeply nourishes hands or feet — silky smooth and rejuvenated. Perfect for dry, cracked skin.",
//         image: "/images/services/nails/paraffin.jpg",
//       },
//     ],
//     faqs: [
//       {
//         q: "What is a Russian Manicure?",
//         a: "A dry nail care technique using an e-file to meticulously clean the skin around the nail. No cutting of cuticles — gentle removal of dead skin for a polished, long-lasting look.",
//       },
//       {
//         q: "Is Russian manicure safe during pregnancy?",
//         a: "Yes! We use HEMA-free and TPO-free gel formulas — the safest available. Always consult your doctor before beauty treatments during pregnancy.",
//       },
//       {
//         q: "How long does gel last?",
//         a: "Russian gel manicures typically last 3–4 weeks. Pedicures can last up to 6 weeks with proper care.",
//       },
//       {
//         q: "Do I need removal before my appointment?",
//         a: "No — professional removal is included. Just let us know when booking so we can schedule enough time.",
//       },
//     ],
//   },

//   "hair-styling": {
//     name: "Hair Styling",
//     tagline: "Women · Men · Children",
//     heroColor: "rgba(255,182,193,0.12)",
//     accentColor: "#0097A7",
//     badgeColor: "rgba(73,208,201,0.18)",
//     intro:
//       "Biray and Olivia bring 40+ years of combined expertise — from blowouts and colour to keratin treatments and bridal styling, crafted to suit your lifestyle.",
//     highlights: [
//       "Women, Men & Children",
//       "Color & Highlights",
//       "Keratin Treatments",
//       "Bridal Styling",
//     ],
//     items: [
//       {
//         id: "womens-cut",
//         name: "Women's Haircut & Style",
//         price: "from $55",
//         badge: "Popular",
//         description:
//           "Precision cut tailored to your face shape and lifestyle, finished with a professional blowout and style. Consultation included.",
//         image: "/images/services/hair/womens-cut.jpg",
//       },
//       {
//         id: "blowout",
//         name: "Blowout",
//         price: "from $45",
//         description:
//           "Smooth, voluminous blowout using professional tools. Perfect for special occasions or everyday elegance.",
//         image: "/images/services/hair/blowout.jpg",
//       },
//       {
//         id: "updo",
//         name: "Updo / Special Occasion",
//         price: "from $80",
//         description:
//           "Elegant updos, half-up styles, and special occasion looks for events, weddings, proms, and beyond.",
//         image: "/images/services/hair/updo.jpg",
//       },
//       {
//         id: "color",
//         name: "Hair Color (Full)",
//         price: "consultation",
//         description:
//           "Full head color, grey coverage, or vibrant hue changes — customized to your natural tone. Pricing confirmed at consultation.",
//         image: "/images/services/hair/color.jpg",
//       },
//       {
//         id: "highlights",
//         name: "Highlights / Balayage",
//         price: "consultation",
//         badge: "Trending",
//         description:
//           "Sun-kissed highlights, dimensional balayage, or full foil — our colorists craft dimensional looks that grow out beautifully.",
//         image: "/images/services/hair/highlights.jpg",
//       },
//       {
//         id: "keratin",
//         name: "Keratin Treatment",
//         price: "consultation",
//         description:
//           "Professional smoothing treatment that eliminates frizz and adds brilliant shine for 3–5 months. Pricing based on hair length and condition.",
//         image: "/images/services/hair/keratin.jpg",
//       },
//       {
//         id: "bridal",
//         name: "Bridal Hair Styling",
//         price: "consultation",
//         badge: "Luxury",
//         description:
//           "Your most important day deserves exceptional styling. Trial runs, day-of styling, and bridesmaid packages available.",
//         image: "/images/services/hair/bridal.jpg",
//       },
//       {
//         id: "mens-cut",
//         name: "Men's Haircut",
//         price: "from $35",
//         description:
//           "Clean, precise cuts for men — classic or modern styles with optional wash and blowdry.",
//         image: "/images/services/hair/mens-cut.jpg",
//       },
//       {
//         id: "beard",
//         name: "Beard Trimming",
//         price: "from $20",
//         description:
//           "Professional beard shaping and trimming for a clean, groomed look.",
//         image: "/images/services/hair/beard.jpg",
//       },
//       {
//         id: "kids-cut",
//         name: "Children's Haircut",
//         price: "from $30",
//         description:
//           "Patient, gentle haircuts for children of all ages in a welcoming environment.",
//         image: "/images/services/hair/kids-cut.jpg",
//       },
//     ],
//     faqs: [
//       {
//         q: "Do color services require a consultation?",
//         a: "Yes — colour and keratin treatments vary by hair type. A quick in-person consultation ensures accurate pricing and the best result.",
//       },
//       {
//         q: "Do you work with all hair types?",
//         a: "Absolutely — straight, wavy, curly, and coily textures.",
//       },
//     ],
//   },

//   facials: {
//     name: "Facials",
//     tagline: "Rejuvenating Skin Treatments",
//     heroColor: "rgba(144,238,144,0.1)",
//     accentColor: "#0097A7",
//     badgeColor: "rgba(73,208,201,0.18)",
//     intro:
//       "Targeted facial treatments customised to your skin type and concerns — from deep-cleansing and hydration to anti-aging and brightening. Leave with a glow that lasts.",
//     highlights: [
//       "Customised to your skin",
//       "Zero downtime options",
//       "LED Therapy available",
//       "Anti-aging & brightening",
//     ],
//     items: [
//       {
//         id: "classic-facial",
//         name: "Classic Facial",
//         price: "$85",
//         description:
//           "Deep cleansing, exfoliation, steam, extractions, and moisturizing mask — the foundational facial for healthy skin maintenance.",
//         image: "/images/services/facials/classic.jpg",
//       },
//       {
//         id: "deep-cleanse",
//         name: "Deep Cleansing Facial",
//         price: "$95",
//         badge: "Popular",
//         description:
//           "Intensive pore-clearing facial targeting blackheads, congestion, and excess oil. Ideal for combination and oily skin types.",
//         image: "/images/services/facials/deep-cleanse.jpg",
//       },
//       {
//         id: "anti-aging",
//         name: "Anti-Aging Facial",
//         price: "$110",
//         description:
//           "Advanced treatment with peptide-rich serums and firming masks to reduce fine lines, improve elasticity, and restore radiance.",
//         image: "/images/services/facials/anti-aging.jpg",
//       },
//       {
//         id: "brightening",
//         name: "Brightening Facial",
//         price: "$100",
//         description:
//           "Vitamin C-infused treatment targeting dullness, uneven tone, and hyperpigmentation for a luminous, even complexion.",
//         image: "/images/services/facials/brightening.jpg",
//       },
//       {
//         id: "hydrafacial",
//         name: "HydraFacial",
//         price: "$130",
//         badge: "Best Seller",
//         description:
//           "Multi-step treatment that cleanses, exfoliates, extracts, and infuses hydrating serums simultaneously. Immediate glow, zero downtime.",
//         image: "/images/services/facials/hydrafacial.jpg",
//       },
//       {
//         id: "led-therapy",
//         name: "LED Therapy Add-On",
//         price: "+$25",
//         description:
//           "Light therapy added to any facial — red for anti-aging and collagen, blue for acne and bacteria reduction.",
//         image: "/images/services/facials/led.jpg",
//       },
//     ],
//     faqs: [
//       {
//         q: "How often should I get a facial?",
//         a: "Every 4–6 weeks aligns with your skin's natural renewal cycle for best results.",
//       },
//       {
//         q: "Is there downtime?",
//         a: "Most facials have zero downtime. Deeper treatments may cause mild redness for 1–2 hours.",
//       },
//     ],
//   },

//   brows: {
//     name: "Brows",
//     tagline: "Shaping · Tinting · Lamination",
//     heroColor: "rgba(255,215,0,0.1)",
//     accentColor: "#0097A7",
//     badgeColor: "rgba(73,208,201,0.18)",
//     intro:
//       "Anna, our brow specialist, frames your face with precise shaping, natural tinting, and brow lamination for a full, brushed-up effect that lasts weeks.",
//     highlights: [
//       "Brow Lamination",
//       "Tinting & Shaping",
//       "Combination services",
//       "Gentle patch-tested formulas",
//     ],
//     items: [
//       {
//         id: "brow-wax",
//         name: "Brow Shaping (Wax)",
//         price: "$30",
//         badge: "Popular",
//         description:
//           "Precise brow shaping with warm wax for clean, defined arches — tailored to your natural brow shape and face structure.",
//         image: "/images/services/brows/shaping.jpg",
//       },
//       {
//         id: "brow-tint",
//         name: "Brow Tinting",
//         price: "$25",
//         description:
//           "Semi-permanent tint that deepens and defines your brows without makeup. Results last 4–6 weeks.",
//         image: "/images/services/brows/tinting.jpg",
//       },
//       {
//         id: "brow-lamination",
//         name: "Brow Lamination",
//         price: "$75",
//         badge: "Trending",
//         description:
//           "Lift and set brow hairs in a full, fluffy, brushed-up position lasting 6–8 weeks. Avoid water for 24 hours after treatment.",
//         image: "/images/services/brows/lamination.jpg",
//       },
//       {
//         id: "lam-tint",
//         name: "Lamination + Tint",
//         price: "$90",
//         badge: "Best Value",
//         description:
//           "Complete brow transformation — lamination for shape and lift, tint for depth and definition. Best results in one visit.",
//         image: "/images/services/brows/lam-tint.jpg",
//       },
//       {
//         id: "shape-tint",
//         name: "Brow Shaping + Tint",
//         price: "$50",
//         description:
//           "Wax shaping combined with colour tint for beautifully defined brows in a single appointment.",
//         image: "/images/services/brows/shape-tint.jpg",
//       },
//       {
//         id: "lip-wax",
//         name: "Lip Waxing",
//         price: "$15",
//         description:
//           "Quick and effective upper lip hair removal using professional wax. Results last 3–4 weeks.",
//         image: "/images/services/brows/lip-wax.jpg",
//       },
//     ],
//     faqs: [
//       {
//         q: "How long does lamination last?",
//         a: "6–8 weeks. Avoid water on your brows for the first 24 hours.",
//       },
//       {
//         q: "Is tinting safe for sensitive skin?",
//         a: "We use gentle, patch-tested formulas and can do a patch test before the appointment.",
//       },
//     ],
//   },

//   lashes: {
//     name: "Lashes",
//     tagline: "Extensions · Lifts · Tints",
//     heroColor: "rgba(147,112,219,0.1)",
//     accentColor: "#0097A7",
//     badgeColor: "rgba(73,208,201,0.18)",
//     intro:
//       "Anna applies precision lash extensions with ophthalmologist-tested adhesives — natural flutter or dramatic volume, perfectly tailored to your eye shape.",
//     highlights: [
//       "Classic, Volume & Hybrid",
//       "Lash Lift & Tint",
//       "Ophthalmologist-tested",
//       "Natural & dramatic options",
//     ],
//     items: [
//       {
//         id: "classic-half",
//         name: "Classic Extensions (Half Set)",
//         price: "from $20",
//         description:
//           "Subtle half-set for a natural enhancement — ideal for filling in sparse areas or a soft daytime look.",
//         image: "/images/services/lashes/classic-half.jpg",
//       },
//       {
//         id: "classic-full",
//         name: "Classic Extensions (Full Set)",
//         price: "from $60",
//         badge: "Popular",
//         description:
//           "One extension per natural lash for a clean, defined look — everyday wear with a natural-to-polished finish.",
//         image: "/images/services/lashes/classic-full.jpg",
//       },
//       {
//         id: "hybrid",
//         name: "Hybrid Extensions",
//         price: "from $70",
//         description:
//           "Mix of classic and volume fans for a textured, wispy look — fuller than classic, more natural than volume.",
//         image: "/images/services/lashes/hybrid.jpg",
//       },
//       {
//         id: "volume",
//         name: "Volume Extensions",
//         price: "from $80",
//         badge: "Dramatic",
//         description:
//           "Multiple ultra-fine extensions per natural lash for a full, glamorous look. Lightweight despite the dramatic effect.",
//         image: "/images/services/lashes/volume.jpg",
//       },
//       {
//         id: "infill",
//         name: "Lash Infill",
//         price: "from $35",
//         description:
//           "Top up your extensions every 2–3 weeks as natural lashes shed. Keeps your look consistently full and fresh.",
//         image: "/images/services/lashes/infill.jpg",
//       },
//       {
//         id: "lash-lift",
//         name: "Lash Lift",
//         price: "$65",
//         badge: "Low Maintenance",
//         description:
//           "Curls and lifts your natural lashes from the base for an eye-opening effect — no extensions. Results last 6–8 weeks.",
//         image: "/images/services/lashes/lift.jpg",
//       },
//       {
//         id: "lift-tint",
//         name: "Lash Lift + Tint",
//         price: "$80",
//         description:
//           "Lift plus tint for darkened, defined lashes that look like mascara — without mascara.",
//         image: "/images/services/lashes/lift-tint.jpg",
//       },
//       {
//         id: "lash-removal",
//         name: "Lash Removal",
//         price: "$20",
//         description:
//           "Safe, gentle removal using professional products that dissolve the adhesive without harming natural lashes.",
//         image: "/images/services/lashes/removal.jpg",
//       },
//     ],
//     faqs: [
//       {
//         q: "How do I care for extensions?",
//         a: "Avoid oil-based products, don't rub your eyes, sleep on a silk pillowcase, and brush daily with a spoolie.",
//       },
//       {
//         q: "How long do they last?",
//         a: "Extensions shed with your natural lash cycle — typically 2–3 weeks before an infill is needed.",
//       },
//     ],
//   },

//   massage: {
//     name: "Massage",
//     tagline: "Relaxing & Therapeutic Body Treatments",
//     heroColor: "rgba(64,224,208,0.1)",
//     accentColor: "#0097A7",
//     badgeColor: "rgba(73,208,201,0.18)",
//     intro:
//       "Lana offers a full spectrum of massage therapy — Swedish, deep tissue, Gua Sha, warm stone, lymphatic drainage, cupping, and more. Every session tailored to your body.",
//     highlights: [
//       "Deep Tissue & Swedish",
//       "Warm Stone Massage",
//       "Lymphatic Drainage",
//       "Cupping Therapy",
//     ],
//     items: [
//       {
//         id: "swedish-60",
//         name: "Swedish Relaxation Massage (60 min)",
//         price: "$90",
//         badge: "Most Popular",
//         description:
//           "Long, flowing strokes with gentle pressure to ease tension, improve circulation, and promote deep relaxation. Perfect for first-time massage clients.",
//         image: "/images/services/massage/swedish.jpg",
//       },
//       {
//         id: "swedish-90",
//         name: "Swedish Relaxation Massage (90 min)",
//         price: "$130",
//         description:
//           "Extended Swedish session for a deeper, more complete relaxation experience — head to toe.",
//         image: "/images/services/massage/swedish-90.jpg",
//       },
//       {
//         id: "deep-tissue",
//         name: "Deep Tissue Massage (60 min)",
//         price: "$100",
//         description:
//           "Targets deeper muscle layers with focused pressure to relieve chronic tension, knots, and pain.",
//         image: "/images/services/massage/deep-tissue.jpg",
//       },
//       {
//         id: "warm-stone",
//         name: "Warm Stone Massage",
//         price: "$120",
//         badge: "Luxury",
//         description:
//           "Heated volcanic stones glide across the body — melting deep muscle tension and bringing profound warmth.",
//         image: "/images/services/massage/warm-stone.jpg",
//       },
//       {
//         id: "gua-sha",
//         name: "Gua Sha Treatment",
//         price: "$85",
//         description:
//           "Traditional Chinese technique using a smooth tool to promote circulation, reduce inflammation, and release fascial tension.",
//         image: "/images/services/massage/gua-sha.jpg",
//       },
//       {
//         id: "lymphatic",
//         name: "Lymphatic Drainage Massage",
//         price: "$110",
//         description:
//           "Gentle rhythmic strokes stimulate the lymphatic system — reducing puffiness, supporting detox, and boosting immunity. Popular post-surgery.",
//         image: "/images/services/massage/lymphatic.jpg",
//       },
//       {
//         id: "osteopathic",
//         name: "Osteopathic Massage",
//         price: "$115",
//         description:
//           "Manual therapy combining joint mobilization and muscle work to improve range of motion and restore the body's natural balance.",
//         image: "/images/services/massage/osteopathic.jpg",
//       },
//       {
//         id: "cupping",
//         name: "Cupping Therapy",
//         price: "$90",
//         description:
//           "Suction cups release tight muscles, improve blood flow, and draw out toxins. May leave temporary circular marks that fade in days.",
//         image: "/images/services/massage/cupping.jpg",
//       },
//       {
//         id: "buccal",
//         name: "Buccal / Asakhi Facial Massage",
//         price: "$95",
//         badge: "Trending",
//         description:
//           "Intra-oral sculpting massage that lifts facial contours, releases jaw tension, and reduces puffiness — a non-invasive facelift effect.",
//         image: "/images/services/massage/buccal.jpg",
//       },
//       {
//         id: "detox",
//         name: "Detox Body Treatment",
//         price: "$100",
//         description:
//           "Full-body massage combined with a detoxifying body wrap to eliminate toxins, soften skin, and restore energy.",
//         image: "/images/services/massage/detox.jpg",
//       },
//     ],
//     faqs: [
//       {
//         q: "Swedish vs deep tissue?",
//         a: "Swedish uses long flowing strokes for relaxation. Deep tissue uses focused pressure for chronic tension and muscle pain.",
//       },
//       {
//         q: "What is lymphatic drainage?",
//         a: "Gentle rhythmic strokes stimulate the lymphatic system, reducing puffiness and supporting detoxification. Very popular post-surgery.",
//       },
//     ],
//   },

//   "permanent-makeup": {
//     name: "Permanent Makeup",
//     tagline: "Microblading · Lips · Eyeliner",
//     heroColor: "rgba(255,182,193,0.12)",
//     accentColor: "#0097A7",
//     badgeColor: "rgba(73,208,201,0.18)",
//     intro:
//       "Anna's permanent makeup artistry enhances your features for years — from natural microblading to defined lip blush and eyeliner. Every service includes a free touch-up within 8 weeks.",
//     highlights: [
//       "Microblading & Ombré",
//       "Lip Blush",
//       "Eyeliner Tattoo",
//       "Free 8-week touch-up",
//     ],
//     items: [
//       {
//         id: "microblading",
//         name: "Microblading",
//         price: "$180",
//         badge: "Natural Look",
//         description:
//           "Hair-stroke technique mimicking real brow hairs for a natural, defined brow. Ideal for sparse or over-tweezed brows. Free touch-up within 8 weeks included.",
//         image: "/images/services/pmu/microblading.jpg",
//       },
//       {
//         id: "powder-brows",
//         name: "Powder / Ombré Brows",
//         price: "$200",
//         badge: "Popular",
//         description:
//           "Soft powdered makeup effect — lighter at the front, deeper at the tail. Suits all skin types including oily. Long-lasting and low-maintenance.",
//         image: "/images/services/pmu/powder-brows.jpg",
//       },
//       {
//         id: "combo-brows",
//         name: "Combination Brows",
//         price: "$220",
//         badge: "Best Result",
//         description:
//           "Hair strokes at the front for natural look + shading toward the tail for depth. Beautiful dimension with the most natural-to-full result.",
//         image: "/images/services/pmu/combo-brows.jpg",
//       },
//       {
//         id: "lip-blush",
//         name: "Lip Blush",
//         price: "$300",
//         badge: "Luxury",
//         description:
//           "Watercolor-style pigment enhances your natural lip color, adds definition, and creates the illusion of fuller lips. Wake up with perfect lips.",
//         image: "/images/services/pmu/lip-blush.jpg",
//       },
//       {
//         id: "eyeliner-upper",
//         name: "Eyeliner (Upper Lash Line)",
//         price: "$250",
//         description:
//           "Defined upper lash line tattooed to enhance eye shape and eliminate daily eyeliner application. Natural or bold styles.",
//         image: "/images/services/pmu/eyeliner-upper.jpg",
//       },
//       {
//         id: "eyeliner-both",
//         name: "Eyeliner (Upper + Lower)",
//         price: "$350",
//         description:
//           "Complete eye definition — both upper and lower lash lines for dramatic, long-lasting eye enhancement.",
//         image: "/images/services/pmu/eyeliner-both.jpg",
//       },
//       {
//         id: "brow-touchup",
//         name: "Annual Touch-Up",
//         price: "from $80",
//         description:
//           "Refresh existing permanent makeup — colour boost and refinement to keep your look fresh year after year.",
//         image: "/images/services/pmu/touchup.jpg",
//       },
//     ],
//     faqs: [
//       {
//         q: "How long does permanent makeup last?",
//         a: "1–3 years depending on skin type, sun exposure, and aftercare. Annual touch-ups keep colour fresh.",
//       },
//       {
//         q: "Does it hurt?",
//         a: "Topical numbing cream is applied before and during the procedure. Most clients describe it as mild scratching.",
//       },
//       {
//         q: "What is the healing process?",
//         a: "The area may appear darker for 7–10 days before softening to the final shade. Avoid sun, swimming, and sweating during healing.",
//       },
//     ],
//   },

//   sugaring: {
//     name: "Sugaring",
//     tagline: "100% Natural Hair Removal",
//     heroColor: "rgba(255,228,196,0.2)",
//     accentColor: "#0097A7",
//     badgeColor: "rgba(73,208,201,0.18)",
//     intro:
//       "Silky-smooth results with 100% natural sugaring paste — sugar, lemon, and water. Hair removed in the direction of growth for less breakage, less irritation, and longer-lasting results.",
//     highlights: [
//       "100% natural paste",
//       "Ideal for sensitive skin",
//       "Less breakage than wax",
//       "Results last 3–5 weeks",
//     ],
//     items: [
//       {
//         id: "sug-upper-lip",
//         name: "Upper Lip Sugaring",
//         price: "$15",
//         description:
//           "Quick and gentle upper lip hair removal with natural sugar paste. Results last 3–4 weeks.",
//         image: "/images/services/sugaring/upper-lip.jpg",
//       },
//       {
//         id: "sug-chin",
//         name: "Chin Sugaring",
//         price: "$15",
//         description:
//           "Precise chin hair removal with warm sugar paste — gentle on sensitive skin.",
//         image: "/images/services/sugaring/chin.jpg",
//       },
//       {
//         id: "sug-full-face",
//         name: "Full Face Sugaring",
//         price: "$45",
//         badge: "Popular",
//         description:
//           "Complete facial hair removal — lip, chin, cheeks, and sideburns. Natural paste safe for all skin types including rosacea-prone.",
//         image: "/images/services/sugaring/full-face.jpg",
//       },
//       {
//         id: "sug-underarms",
//         name: "Underarms Sugaring",
//         price: "$20",
//         description:
//           "Gentle underarm hair removal with natural sugar paste — kind to delicate skin.",
//         image: "/images/services/sugaring/underarms.jpg",
//       },
//       {
//         id: "sug-arms-half",
//         name: "Arms Half Sugaring",
//         price: "$25",
//         description: "Forearm sugaring for smooth results without irritation.",
//         image: "/images/services/sugaring/arms-half.jpg",
//       },
//       {
//         id: "sug-arms-full",
//         name: "Arms Full Sugaring",
//         price: "$40",
//         description:
//           "Full arm sugaring — wrist to shoulder for consistently smooth results.",
//         image: "/images/services/sugaring/arms-full.jpg",
//       },
//       {
//         id: "sug-legs-half",
//         name: "Legs Half Sugaring",
//         price: "$35",
//         description:
//           "Lower leg sugaring — knee to ankle. Less redness and irritation than traditional wax.",
//         image: "/images/services/sugaring/legs-half.jpg",
//       },
//       {
//         id: "sug-legs-full",
//         name: "Legs Full Sugaring",
//         price: "$60",
//         badge: "Best Value",
//         description:
//           "Complete leg sugaring — hip to ankle. Silky-smooth results lasting 3–5 weeks.",
//         image: "/images/services/sugaring/legs-full.jpg",
//       },
//       {
//         id: "sug-bikini",
//         name: "Bikini Line Sugaring",
//         price: "$30",
//         description:
//           "Clean bikini line definition with gentle natural sugar paste.",
//         image: "/images/services/sugaring/bikini.jpg",
//       },
//       {
//         id: "sug-brazilian",
//         name: "Brazilian Sugaring",
//         price: "$55",
//         badge: "Popular",
//         description:
//           "Complete Brazilian with natural sugar paste — removes hair in the direction of growth for less discomfort.",
//         image: "/images/services/sugaring/brazilian.jpg",
//       },
//     ],
//     faqs: [
//       {
//         q: "How is sugaring different from waxing?",
//         a: "Sugar paste is 100% natural, water-soluble, and pulls hair in the direction of growth — less breakage and discomfort.",
//       },
//       {
//         q: "How long should hair be?",
//         a: "At least ¼ inch (about 2 weeks of growth after shaving).",
//       },
//     ],
//   },

//   waxing: {
//     name: "Waxing",
//     tagline: "Fast & Effective Hair Removal",
//     heroColor: "rgba(255,235,205,0.2)",
//     accentColor: "#0097A7",
//     badgeColor: "rgba(73,208,201,0.18)",
//     intro:
//       "Quick, effective professional waxing for every body area. Removes hair against the growth direction for maximum efficiency and clean results lasting 3–5 weeks.",
//     highlights: [
//       "All body areas",
//       "Fast & precise",
//       "3–5 week results",
//       "Gentle formulas available",
//     ],
//     items: [
//       {
//         id: "wax-lip",
//         name: "Lip Waxing",
//         price: "$15",
//         description:
//           "Fast upper lip hair removal with professional wax — smooth, clean results.",
//         image: "/images/services/waxing/lip.jpg",
//       },
//       {
//         id: "wax-chin",
//         name: "Chin Waxing",
//         price: "$15",
//         description: "Precise chin hair removal with professional wax.",
//         image: "/images/services/waxing/chin.jpg",
//       },
//       {
//         id: "wax-brow-shape",
//         name: "Brow Shaping (Wax)",
//         price: "$30",
//         badge: "Popular",
//         description:
//           "Clean, defined brow arches shaped with professional warm wax — tailored to your face shape.",
//         image: "/images/services/waxing/brow-shape.jpg",
//       },
//       {
//         id: "wax-full-face",
//         name: "Full Face Waxing",
//         price: "$40",
//         description:
//           "Complete facial waxing — lip, chin, cheeks, and brows in one session.",
//         image: "/images/services/waxing/full-face.jpg",
//       },
//       {
//         id: "wax-underarms",
//         name: "Underarms Waxing",
//         price: "$20",
//         description:
//           "Quick and effective underarm waxing for long-lasting smooth results.",
//         image: "/images/services/waxing/underarms.jpg",
//       },
//       {
//         id: "wax-arms-half",
//         name: "Arms Half Waxing",
//         price: "$25",
//         description: "Forearm waxing for smooth arms lasting 3–4 weeks.",
//         image: "/images/services/waxing/arms-half.jpg",
//       },
//       {
//         id: "wax-arms-full",
//         name: "Arms Full Waxing",
//         price: "$38",
//         description: "Full arm waxing from wrist to shoulder.",
//         image: "/images/services/waxing/arms-full.jpg",
//       },
//       {
//         id: "wax-legs-half",
//         name: "Legs Half Waxing",
//         price: "$35",
//         description: "Lower leg waxing — knee to ankle.",
//         image: "/images/services/waxing/legs-half.jpg",
//       },
//       {
//         id: "wax-legs-full",
//         name: "Legs Full Waxing",
//         price: "$55",
//         badge: "Best Value",
//         description:
//           "Complete leg waxing for silky-smooth results that last 3–5 weeks.",
//         image: "/images/services/waxing/legs-full.jpg",
//       },
//       {
//         id: "wax-back",
//         name: "Back Waxing",
//         price: "$50",
//         description:
//           "Full back hair removal with professional wax — clean, thorough results.",
//         image: "/images/services/waxing/back.jpg",
//       },
//       {
//         id: "wax-chest",
//         name: "Chest Waxing",
//         price: "$40",
//         description: "Chest hair removal using professional wax.",
//         image: "/images/services/waxing/chest.jpg",
//       },
//       {
//         id: "wax-stomach",
//         name: "Stomach Waxing",
//         price: "$25",
//         description: "Stomach area waxing — quick and effective.",
//         image: "/images/services/waxing/stomach.jpg",
//       },
//       {
//         id: "wax-bikini",
//         name: "Bikini Line Waxing",
//         price: "$30",
//         description: "Clean bikini line definition with professional wax.",
//         image: "/images/services/waxing/bikini.jpg",
//       },
//       {
//         id: "wax-brazilian",
//         name: "Brazilian Waxing",
//         price: "$50",
//         badge: "Popular",
//         description:
//           "Complete Brazilian waxing with professional technique to minimise discomfort and maximise results.",
//         image: "/images/services/waxing/brazilian.jpg",
//       },
//     ],
//     faqs: [
//       {
//         q: "How long should hair be before waxing?",
//         a: "At least ¼ inch — about 2 weeks of growth after shaving.",
//       },
//       {
//         q: "What should I do after waxing?",
//         a: "Avoid hot baths, saunas, and sun for 24 hours. Exfoliate gently after 48 hours to prevent ingrown hairs.",
//       },
//     ],
//   },
// };

// // ─── SERVICE CARD ─────────────────────────────────────────────────────────────

// function ServiceCard({
//   item,
//   accentColor,
//   badgeColor,
// }: {
//   item: ServiceItem;
//   accentColor: string;
//   badgeColor: string;
// }) {
//   return (
//     <div className="bg-white rounded-[28px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
//       {/* Image */}
//       <div
//         className="relative overflow-hidden flex-shrink-0"
//         style={{ height: 200 }}
//       >
//         <div className="absolute inset-0 bg-glowly-lavender/80" />
//         <img
//           src={item.image}
//           alt={item.name}
//           className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           loading="lazy"
//           decoding="async"
//           width="800"
//           height="600"
//           onError={(e) => {
//             (e.currentTarget as HTMLImageElement).style.opacity = "0";
//           }}
//         />
//         <div
//           className="absolute inset-0 flex items-center justify-center pointer-events-none"
//           style={{ zIndex: 0 }}
//         >
//           <svg
//             width="52"
//             height="52"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke={accentColor}
//             strokeWidth="0.8"
//             opacity="0.35"
//           >
//             <rect x="3" y="3" width="18" height="18" rx="3" />
//             <circle cx="8.5" cy="8.5" r="1.5" />
//             <polyline points="21 15 16 10 5 21" />
//           </svg>
//         </div>
//         {item.badge && (
//           <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow bg-glowly-action-orange">
//             {item.badge}
//           </div>
//         )}
//         {/* УДАЛЕНО УПОМИНАНИЕ DURATION */}
//       </div>

//       {/* Content */}
//       <div className="flex flex-col flex-1 p-5 gap-3">
//         <h3 className="font-display text-lg lg:text-xl text-glowly-black leading-snug">
//           {item.name}
//         </h3>
//         <p className="font-sans text-sm text-glowly-black/60 leading-relaxed flex-1">
//           {item.description}
//         </p>

//         {/* Price + Book */}
//         <div className="flex items-center justify-between pt-3 border-t border-black/6 mt-auto gap-3">
//           <span className="font-display text-2xl font-bold flex-shrink-0 text-glowly-orange">
//             {item.price}
//           </span>
//           <a
//             href={BOOK_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-sans font-bold text-sm text-white transition-all duration-200 hover:opacity-85 hover:scale-105 active:scale-95 shadow-sm whitespace-nowrap bg-glowly-action-orange"
//           >
//             Book Now
//             <svg
//               width="11"
//               height="11"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── PAGE ─────────────────────────────────────────────────────────────────────

// export default function ServicePage() {
//   const { slug } = useParams<{ slug: string }>();
//   const service = slug ? servicesData[slug] : null;
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   if (!service) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center gap-6">
//         <p className="font-sans text-xl text-glowly-black/60">
//           Service not found.
//         </p>
//         <Link
//           to="/"
//           className="font-sans text-sm text-glowly-orange hover:underline"
//         >
//           ← Back to Home
//         </Link>
//       </div>
//     );
//   }

//   const servicePath = `/services/${slug}`;

//   return (
//     <div className="min-h-screen bg-white">
//       <Seo
//         title={`${service.name} Services | LS Beauty Salon Paoli, PA`}
//         description={service.intro}
//         path={servicePath}
//         image={service.items[0]?.image ?? "/images/hero/hero.webp"}
//         jsonLd={{
//           "@context": "https://schema.org",
//           "@type": "Service",
//           name: `${service.name} Services`,
//           serviceType: service.name,
//           description: service.intro,
//           areaServed: "Paoli, Pennsylvania",
//           provider: {
//             "@type": "BeautySalon",
//             name: "LS Beauty Salon & Spa",
//             url: "https://lsbeautysalon.com",
//           },
//           url: `https://lsbeautysalon.com${servicePath}`,
//         }}
//       />
//       <Header />

//       {/* ── HERO ── */}
//       <section className="pt-32 pb-0 relative overflow-hidden bg-glowly-lavender/60">
//         <div className="max-w-6xl mx-auto px-6 relative z-10">
//           <Link
//             to="/#services"
//             className="inline-flex items-center gap-2 font-sans text-sm text-glowly-black/40 hover:text-glowly-orange mb-8 transition-colors"
//           >
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             All Services
//           </Link>

//           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-12">
//             <div className="flex-1">
//               <p
//                 className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-3 text-glowly-orange"
//                 style={{ opacity: 0.7 }}
//               >
//                 LS Beauty · Paoli, PA
//               </p>
//               <h1 className="font-display text-5xl lg:text-7xl text-glowly-black mb-3 leading-none">
//                 {service.name}
//               </h1>
//               <p className="font-display text-xl lg:text-2xl text-glowly-black/40 mb-5">
//                 {service.tagline}
//               </p>
//               <p className="font-sans text-base lg:text-lg text-glowly-black/60 max-w-2xl leading-relaxed">
//                 {service.intro}
//               </p>
//             </div>

//             <div className="flex flex-wrap lg:flex-col gap-2 lg:items-end">
//               {service.highlights.map((h, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-sans font-semibold text-glowly-black whitespace-nowrap bg-glowly-lavender/40 border border-glowly-orange/20"
//                 >
//                   <div className="w-2 h-2 rounded-full flex-shrink-0 bg-glowly-orange" />
//                   {h}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CTA bar at bottom of hero */}
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 lg:px-10 py-5 rounded-t-[24px] bg-glowly-orange">
//             <div>
//               <p className="font-sans text-white/70 text-xs uppercase tracking-widest">
//                 Ready to book?
//               </p>
//               <p className="font-display text-white text-xl">
//                 Book your {service.name} appointment
//               </p>
//             </div>
//             <div className="flex gap-3 flex-shrink-0">
//               <a
//                 href="tel:2679624747"
//                 className="px-5 py-2.5 rounded-full font-sans text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition whitespace-nowrap"
//               >
//                 (267) 962-4747
//               </a>
//               <a
//                 href={BOOK_URL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-6 py-2.5 rounded-full font-sans font-bold text-sm bg-white text-glowly-orange hover:opacity-90 transition whitespace-nowrap"
//               >
//                 Book Now →
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── SERVICE CARDS GRID ── */}
//       <section className="py-16 lg:py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="font-display text-4xl lg:text-5xl text-glowly-black mb-10">
//             {service.name} Services
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {service.items.map((item) => (
//               <ServiceCard
//                 key={item.id}
//                 item={item}
//                 accentColor={service.accentColor}
//                 badgeColor={service.badgeColor}
//               />
//             ))}
//           </div>
//           <p className="font-sans text-xs text-glowly-black/30 mt-8 text-center italic">
//             * Prices may vary based on length, complexity, and individual needs.
//             The technician may adjust pricing accordingly.
//           </p>
//         </div>
//       </section>

//       {/* ── FAQ ── */}
//       {service.faqs.length > 0 && (
//         <section className="py-16 lg:py-20 bg-glowly-lavender/80">
//           <div className="max-w-4xl mx-auto px-6">
//             <h2 className="font-display text-4xl lg:text-5xl text-glowly-black mb-10">
//               FAQ
//             </h2>
//             <div className="space-y-3">
//               {service.faqs.map((item, i) => (
//                 <div
//                   key={i}
//                   className="overflow-hidden transition-all duration-300"
//                   style={{
//                     borderRadius: openFaq === i ? "24px" : "9999px",
//                     border: "2px solid rgba(0,151,167,0.3)",
//                     backgroundColor: "white",
//                   }}
//                 >
//                   <button
//                     className="w-full flex items-center justify-between px-6 lg:px-8 py-4 lg:py-5 text-left"
//                     onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                   >
//                     <span className="font-display text-lg lg:text-xl text-glowly-black pr-4">
//                       {item.q}
//                     </span>
//                     <div
//                       className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 bg-glowly-orange"
//                       style={{
//                         transform:
//                           openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
//                       }}
//                     >
//                       <svg
//                         width="14"
//                         height="14"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         stroke="white"
//                         strokeWidth="2.5"
//                         strokeLinecap="round"
//                       >
//                         <line x1="8" y1="2" x2="8" y2="14" />
//                         <line x1="2" y1="8" x2="14" y2="8" />
//                       </svg>
//                     </div>
//                   </button>
//                   {openFaq === i && (
//                     <div className="px-6 lg:px-8 pb-6">
//                       <p className="font-sans text-sm lg:text-base text-glowly-black/60 leading-relaxed">
//                         {item.a}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ── BOTTOM CTA ── */}
//       <section className="py-20 text-center bg-white">
//         <p className="font-sans text-xs text-glowly-black/30 mb-2 uppercase tracking-[0.2em]">
//           Ready?
//         </p>
//         <h3 className="font-display text-4xl lg:text-6xl text-glowly-black mb-3">
//           Book your <span className="text-glowly-orange">{service.name}</span>
//         </h3>
//         <p className="font-sans text-base text-glowly-black/40 mb-10">
//           24 Paoli Pike, Paoli, PA 19301 · Mon–Sat 8:30am–7pm
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href={BOOK_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-sans font-bold text-white text-base uppercase tracking-wider hover:opacity-85 transition shadow-lg bg-glowly-action-orange"
//           >
//             Book Now Online
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7" />
//             </svg>
//           </a>
//           <a
//             href="tel:2679624747"
//             className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-sans font-bold text-base uppercase tracking-wider border-2 border-glowly-orange text-glowly-orange hover:bg-glowly-orange hover:text-white transition-all"
//           >
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//             </svg>
//             (267) 962-4747
//           </a>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
