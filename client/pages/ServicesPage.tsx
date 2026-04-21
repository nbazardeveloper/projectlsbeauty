
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { SERVICES } from "@/data/services";


const structuredData = {

};

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="All Beauty Services | LS Beauty Salon & Spa — Paoli, PA"
        description="Explore all beauty services at LS Beauty Salon & Spa in Paoli, PA."
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

          {/* ── Hero header ── */}
          <section className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 font-sans text-body-sm text-glowly-black">
                <li><Link to="/" className="hover:text-glowly-orange transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-glowly-black font-medium" aria-current="page">Services</li>
              </ol>
            </nav>
            <h1 className="font-cormorant-heading text-h1 text-glowly-black mb-4">Our Services</h1>
            <p className="font-sans text-body-xl text-glowly-black max-w-2xl leading-relaxed">
              At LS Beauty Salon & Spa in Paoli, PA, we offer a full range of premium beauty services.
            </p>
          </section>

          {/* ── Tools & polishes visual accent — INCREASED HEIGHT ── */}
          <section className="max-w-7xl mx-auto px-6 mb-10 lg:mb-14" aria-hidden="true">
            <div className="grid grid-cols-3 gap-3 lg:gap-4 h-40 lg:h-64 rounded-[24px] overflow-hidden">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/images/gallery/manicure.webp"
                  alt="Nail polish collection"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/images/gallery/tools.webp"
                  alt="Professional nail tools"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/images/gallery/desk-1.webp"
                  alt="Nail station"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* ── Services list — NO INDIVIDUAL PHOTOS ── */}
          <section className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24" aria-label="All Services">
            <div className="space-y-6">
              {SERVICES.map((service, index) => (
                <article
                  key={service.slug}
                  className="group relative animate-fade-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  {service.slug === "nails" && (
                    <div className="absolute -top-3 left-6 z-20 badge-pill bg-glowly-action-orange text-white">Signature</div>
                  )}

                  <Link
                    to={`/services/${service.slug}`}
                    className="block border-2 border-glowly-orange bg-white hover:bg-glowly-orange/5 transition-colors overflow-hidden"
                    style={{ borderRadius: "32px" }}
                  >
                    <div className="flex items-center justify-between px-6 lg:px-10 py-5 lg:py-6 gap-4">
                      <div className="min-w-0 flex-1">
                        <h2 className="font-cormorant-heading text-card-title text-glowly-black truncate" itemProp="name">
                          {service.name}
                        </h2>
                        <p className="font-sans text-body-md text-glowly-black mt-1 hidden lg:block" itemProp="description">
                          {service.heroDescription}
                        </p>
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

          {/* ... остальной код (Why Choose & CTA) без изменений */}

        </main>
        <Footer />
      </div>
    </>
  );
}