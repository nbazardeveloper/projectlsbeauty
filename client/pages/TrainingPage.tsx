import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { useState } from "react";

const COURSES = [
  {
    id: "russian-manicure-beginner",
    title: "Russian Manicure — Beginner",
    duration: "2 days",
    format: "In-person · Paoli, PA",
    price: "Contact for pricing",
    description: "Learn the fundamentals of the Russian Manicure dry technique. This hands-on course covers e-file basics, cuticle preparation, skin safety, and gel application. Perfect for licensed nail technicians transitioning from traditional methods.",
    includes: [
      "E-file technique and bit selection",
      "Safe cuticle preparation — dry method",
      "Skin anatomy and safety protocols",
      "Gel color application and curing",
      "Client consultation and aftercare guidance",
      "Certificate of completion",
    ],
  },
  {
    id: "russian-manicure-advanced",
    title: "Russian Manicure — Advanced",
    duration: "3 days",
    format: "In-person · Paoli, PA",
    price: "Contact for pricing",
    description: "Take your Russian Manicure skills to the next level. This advanced course covers complex nail shapes, nail art integration, troubleshooting problem nails, and building a premium client experience.",
    includes: [
      "Advanced shaping — almond, coffin, stiletto",
      "Nail art and design techniques",
      "Problem nail solutions (thin, damaged, bitten)",
      "Speed and precision training",
      "Building a premium service menu and pricing",
      "Certificate of completion",
    ],
  },
  {
    id: "strong-gel",
    title: "Strong Gel (Hard Gel) Application",
    duration: "1 day",
    format: "In-person · Paoli, PA",
    price: "Contact for pricing",
    description: "Master the application of hard gel for strength, length, and flawless finish. Learn the full Strong Gel workflow from prep to final top coat, including tips for avoiding lifting and maintaining nail health.",
    includes: [
      "Hard gel product knowledge and selection",
      "Full Russian Manicure prep review",
      "Hard gel application — natural nails and extensions",
      "Filing, shaping, and finishing",
      "Soak-off and removal techniques",
      "Certificate of completion",
    ],
  },
  {
    id: "nail-art",
    title: "Nail Art Masterclass",
    duration: "1 day",
    format: "In-person · Paoli, PA",
    price: "Contact for pricing",
    description: "Expand your creative skills with our Nail Art Masterclass. From minimalist line art to intricate floral designs, learn techniques that will set your work apart and attract high-value clients.",
    includes: [
      "Brush control and tool selection",
      "Minimalist and geometric designs",
      "Floral and botanical art",
      "Foil, chrome, and texture techniques",
      "Color theory for nail art",
      "Certificate of completion",
    ],
  },
];

function CourseCard({ course, index }: { course: typeof COURSES[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className="border-2 border-glowly-orange bg-white overflow-hidden transition-all duration-300"
      style={{ borderRadius: open ? "32px" : "9999px" }}
      itemScope
      itemType="https://schema.org/Course"
    >
      <button
        className="w-full flex items-center justify-between px-6 lg:px-10 py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="min-w-0 flex-1">
          <h3 className="font-cormorant-heading text-card-title text-glowly-black" itemProp="name">{course.title}</h3>
          <div className="flex items-center gap-4 mt-1">
            <span className="font-sans text-body-xs text-glowly-black/50">{course.duration}</span>
            <span className="font-sans text-body-xs text-glowly-black/30">·</span>
            <span className="font-sans text-body-xs text-glowly-black/50">{course.format}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="font-display text-body-lg text-glowly-black hidden sm:block">{course.price}</span>
          <div
            className="w-9 h-9 rounded-full bg-glowly-orange/90 flex items-center justify-center transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <line x1="8" y1="2" x2="8" y2="14" />
              <line x1="2" y1="8" x2="14" y2="8" />
            </svg>
          </div>
        </div>
      </button>

      {open && (
        <div className="px-6 lg:px-10 pb-8">
          <p className="font-sans text-body-md text-glowly-black/70 leading-relaxed mb-6" itemProp="description">
            {course.description}
          </p>
          <h4 className="font-cormorant-heading text-display-md text-glowly-black mb-4">What's Included</h4>
          <ul className="space-y-2 mb-8">
            {course.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: "linear-gradient(135deg, #0097A7, #49d0c9)" }} aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <span className="font-sans text-body-sm text-glowly-black/70">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="tel:+12679624747"
            className="btn-book px-8 py-3 bg-glowly-action-orange text-white text-body-md hover:opacity-90"
          >
            Inquire About This Course
          </a>
        </div>
      )}
    </article>
  );
}

export default function TrainingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "LS Beauty Salon & Spa — Nail Training",
    description: "Professional nail technician training in Paoli, PA. Russian Manicure, Hard Gel, and Nail Art courses for licensed professionals.",
    url: "https://lsbeautysalon.com/training",
    address: {
      "@type": "PostalAddress",
      streetAddress: "24 Paoli Pike",
      addressLocality: "Paoli",
      addressRegion: "PA",
      postalCode: "19301",
      addressCountry: "US",
    },
    telephone: "+12679624747",
  };

  return (
    <>
      <Seo
        title="Nail Technician Training & Courses Paoli PA | LS Beauty Salon"
        description="Professional Russian Manicure and nail technician training in Paoli, PA. In-person courses for beginners and advanced nail techs. Hard Gel, Nail Art, and more at LS Beauty Salon."
        path="/training"
        jsonLd={structuredData}
      />

      <div className="min-h-screen bg-white overflow-x-hidden">
        <div className="hidden lg:block absolute top-0 right-0 pointer-events-none z-0" aria-hidden="true"
          style={{ width: "60vw", height: "60vh", background: "radial-gradient(ellipse 50% 45% at 75% 20%, rgba(92,225,230,0.3) 0%, rgba(92,225,230,0) 100%)" }}
        />
        <Header />

        <main className="pt-28 lg:pt-32 pb-0 relative" id="main-content">

          {/* Hero */}
          <section className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 font-sans text-body-sm text-glowly-black/50">
                <li><Link to="/" className="hover:text-glowly-orange transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-glowly-black font-medium" aria-current="page">Training</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <p className="font-sans text-body-sm text-glowly-orange uppercase tracking-widest mb-3">Professional Education · Paoli, PA</p>
              <h1 className="font-cormorant-heading text-h1 text-glowly-black mb-6">
                Nail Technician Training
              </h1>
              <p className="font-sans text-body-xl text-glowly-black/70 leading-relaxed mb-8">
                Learn the Russian Manicure technique, Hard Gel application, and Nail Art from experienced professionals at LS Beauty Salon. Our hands-on in-person courses are designed for licensed nail technicians who want to elevate their skills and grow their clientele.
              </p>
              <a
                href="sms:+12679624747?body=Hi!%20I'm%20interested%20in%20nail%20training%20courses."
                className="btn-book px-8 py-3 bg-glowly-action-orange text-white text-body-md shadow-lg hover:opacity-90"
              >
               Text to Enroll — (267) 962-4747
              </a>
            </div>
          </section>

          {/* Courses */}
          <section className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24" aria-label="Available Courses">
            <h2 className="section-heading">Available Courses</h2>
            <div className="space-y-4">
              {COURSES.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          </section>

          {/* Why train with us */}
          <section className="py-16 lg:py-20" style={{ background: "rgba(0, 151, 167, 0.8)" }} aria-label="Why train with LS Beauty">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="section-heading">Why Train With Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Real Salon Experience", desc: "Train in an active professional salon environment with real clients." },
                  { title: "Small Group Sizes", desc: "Personalized attention with a maximum of 4 students per class." },
                  { title: "5+ Years Expertise", desc: "Learn from technicians with years of Russian Manicure mastery." },
                  { title: "Certificate Included", desc: "Receive a professional certificate upon successful course completion." },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-[28px] p-6 shadow-sm">
                    <h3 className="font-cormorant-heading text-display-md text-glowly-black mb-2">{item.title}</h3>
                    <p className="font-sans text-body-sm text-glowly-black/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 text-center">
            <h2 className="font-cormorant-heading text-section text-glowly-black mb-4">
              Ready to Elevate Your Skills?
            </h2>
            <p className="font-sans text-body-lg text-glowly-black/60 mb-8 max-w-xl mx-auto">
              Contact us to learn about upcoming course dates, pricing, and enrollment. We'd love to help you grow your nail career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12679624747" className="btn-book px-8 py-3 bg-glowly-action-orange text-white text-body-md shadow-lg hover:opacity-90">
                Call (267) 962-4747
              </a>
              <a href="https://www.instagram.com/lsbeautypaoli" target="_blank" rel="noopener noreferrer" className="btn-book px-8 py-3 border-2 border-glowly-orange text-glowly-black text-body-md hover:bg-glowly-orange/10 transition-colors">
                DM on Instagram
              </a>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}