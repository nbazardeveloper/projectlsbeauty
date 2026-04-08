import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { getServiceBySlug, getRelatedServices, SERVICES } from "@/data/services";
  function Breadcrumb({ name }: { name: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 font-sans text-body-sm text-glowly-black/50">
        <li>
          <Link to="/" className="hover:text-glowly-orange transition-colors">Home</Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link to="/services" className="hover:text-glowly-orange transition-colors">Services</Link>
        </li>
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
            background: "radial-gradient(ellipse 50% 45% at 75% 20%, rgba(0, 151, 167, 0.2) 0%, rgba(0, 151, 167, 0) 100%)"
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
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0, 151, 167, 0.8)", zIndex: 0 }} />
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
              style={{ background: "linear-gradient(135deg, rgba(0, 151, 167, 0.9) 0%, rgba(73,208,201,0.1) 100%)" }}
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


