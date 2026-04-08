import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { SERVICES } from "@/data/services";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "LS Beauty Salon & Spa",
  description: "Premium beauty salon in Paoli, PA offering Russian Gel Manicure, Pedicure, Facials, Lashes, Brows, Permanent Makeup, Massage, Sugaring, Waxing, and Hair Styling.",
  url: "https://lsbeautysalon.com/services",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24 Paoli Pike",
    addressLocality: "Paoli",
    addressRegion: "PA",
    postalCode: "19301",
    addressCountry: "US",
  },
  telephone: "+12679624747",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Beauty Services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.heroDescription,
        url: `https://lsbeautysalon.com/services/${s.slug}`,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="All Beauty Services | LS Beauty Salon & Spa — Paoli, PA"
        description="Explore all beauty services at LS Beauty Salon & Spa in Paoli, PA. Russian Gel Manicure, Facials, Lashes, Brows, Permanent Makeup, Massage, Waxing, Sugaring, and Hair Styling."
        path="/services"
        jsonLd={structuredData}
      />

      <div className="min-h-screen bg-white overflow-x-hidden">
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

        <main className="pt-28 lg:pt-32 pb-0 relative" id="main-content">
          <section className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 font-sans text-body-sm text-glowly-black/50">
                <li><Link to="/" className="hover:text-glowly-orange transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-glowly-black font-medium" aria-current="page">Services</li>
              </ol>
            </nav>
            <h1 className="font-cormorant-heading text-h1 text-glowly-black mb-4">Our Services</h1>
            <p className="font-sans text-body-xl text-glowly-black/60 max-w-2xl leading-relaxed">
              At LS Beauty Salon & Spa in Paoli, PA, we offer a full range of premium beauty services — from our signature Russian Gel Manicure to facials, lashes, permanent makeup, and more.
            </p>
          </section>

          <section className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24" aria-label="All Services">
            <div className="space-y-6">
              {SERVICES.map((service, index) => (
                <article key={service.slug} className="group relative animate-fade-slide-up" style={{ animationDelay: `${index * 0.05}s` }} itemScope itemType="https://schema.org/Service">
                  {service.slug === "nails" && (
                    <div className="absolute -top-3 left-6 z-20 badge-pill bg-glowly-action-orange text-white">Signature</div>
                  )}
                  <Link to={`/services/${service.slug}`} className="block border-2 border-glowly-orange rounded-full bg-white hover:bg-glowly-orange/5 transition-colors" aria-label={`Learn more about ${service.name}`}>
                    <div className="flex items-center justify-between px-6 lg:px-10 py-5 lg:py-6 gap-4">
                      <div className="min-w-0 flex-1">
                        <h2 className="font-cormorant-heading text-card-title text-glowly-black truncate" itemProp="name">{service.name}</h2>
                        <p className="font-sans text-body-sm text-glowly-black/50 mt-1 hidden lg:block" itemProp="description">{service.heroDescription}</p>
                      </div>
                      <div className="flex items-center gap-4 lg:gap-8 flex-shrink-0">
                        <div className="text-right hidden sm:block">
                          <p className="font-sans text-price-from text-glowly-black/40 uppercase tracking-tighter">From</p>
                          <p className="font-display text-price text-glowly-black">{service.fromPrice}</p>
                        </div>
                        <div className="btn-book px-4 lg:px-6 py-2 bg-glowly-orange text-white text-btn group-hover:bg-glowly-action-orange transition-colors">
                          View & Book
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="py-12 lg:py-16" style={{ background: "rgba(0, 151, 167, 0.8)" }} aria-label="Why choose LS Beauty">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="font-cormorant-heading text-section text-glowly-black mb-10">Why Clients Choose LS Beauty</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { title: "5+ Years Experience", desc: "Our technicians bring deep expertise to every appointment." },
                  { title: "10-Day Guarantee", desc: "We stand behind our work with a maintenance guarantee on manicures." },
                  { title: "Low-Toxic Formulas", desc: "HEMA-free, TPO-free products that protect your skin and nails." },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-cormorant-heading text-display-md text-glowly-black mb-2">{item.title}</h3>
                    <p className="font-sans text-body-md text-glowly-black/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 text-center">
            <h2 className="font-cormorant-heading text-section text-glowly-black mb-3">Visit Us in Paoli, PA</h2>
            <p className="font-sans text-body-lg text-glowly-black/60 mb-8">24 Paoli Pike, Paoli, PA 19301 · Mon–Sat 8:30am–7:00pm · (267) 962-4747</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.vagaro.com/lsbeautysalon" target="_blank" rel="noopener noreferrer" className="btn-book px-8 py-3 bg-glowly-action-orange text-white text-body-md shadow-lg hover:opacity-90">Book Any Service</a>
              <a href="tel:+12679624747" className="btn-book px-8 py-3 border-2 border-glowly-orange text-glowly-black text-body-md hover:bg-glowly-orange/10 transition-colors">Call Us</a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}