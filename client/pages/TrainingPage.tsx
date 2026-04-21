// TrainingPage.tsx — full owner bio + training sections
// Photo paths:
//   /images/training/hero-teaching.webp
//   /images/training/teaching-1.webp
//   /images/training/teaching-2.webp
//   /images/training/certificates.webp
//   /images/training/owner-trainer.webp

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

function CourseCard({ course }: { course: typeof COURSES[0] }) {
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
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-glowly-orange"
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <span className="font-sans text-body-sm text-glowly-black/70">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://www.vagaro.com/cl/WbFmBC9MPNMxiIeJG5Lj5Aqhd97xAjv9uz3eNk3vh5s="
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book px-8 py-3 text-body-md text-white bg-glowly-action-orange hover:opacity-90"
          >
            Enroll in Course
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
    description: "Professional nail technician training in Paoli, PA.",
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
        <Header />

        <main className="pb-0 relative" id="main-content">

      {/* ── Hero — clean light version ── */}
<section className="relative bg-white pt-32 lg:pt-48 pb-16 lg:pb-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div className="relative z-10">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-body-sm text-glowly-black/90">
            <li><Link to="/" className="hover:text-glowly-orange transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-glowly-black font-medium" aria-current="page">Training</li>
          </ol>
        </nav>
        
        <div className="max-w-2xl">
          <p className="font-sans text-body-sm text-glowly-orange uppercase tracking-widest mb-3">
            Professional Education · Paoli, PA
          </p>
          <h1 className="font-cormorant-heading text-h1 text-glowly-black mb-6">
            Nail Technician Training
          </h1>
          <p className="font-sans text-body-xl text-glowly-black leading-relaxed mb-8">
            Learn the Russian Manicure technique, Hard Gel application, and Nail Art from experienced professionals at LS Beauty Salon. Hands-on in-person courses for licensed nail technicians who want to elevate their skills.
          </p>
          <a
            href="https://www.vagaro.com/cl/WbFmBC9MPNMxiIeJG5Lj5Aqhd97xAjv9uz3eNk3vh5s="
            target="_blank"
  rel="noopener noreferrer"
            className="btn-book px-8 py-3 text-body-md text-white bg-glowly-action-orange shadow-lg hover:opacity-90 inline-block"
          >
            Enroll Now
          </a>
        </div>
      </div>

  

    </div>
  </div>
</section>


        {/* ── About the Founder — FULL BIO ── */}
<section className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24" aria-label="About the Founder">
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">

    {/* Left Column: Photos */}
    <div className="flex flex-col gap-4">
      {/* Main Large Photo */}
      <div className="overflow-hidden rounded-[36px] aspect-[4/3] shadow-lg">
        <img
          src="/images/training/owner-trainer.webp"
          alt="Lira, founder of LS Beauty, teaching nail technician students"
          className="w-full h-full object-cover"
          loading="lazy"
          width="600"
          height="450"
        />
      </div>
      
      {/* Two Smaller Photos Below to fill the space */}
      <div className="grid grid-cols-2 gap-4">
        <div className="overflow-hidden rounded-[24px] aspect-square shadow-md">
          <img
            src="/images/training/teaching-3.webp"
            alt="Process of training 1"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="overflow-hidden rounded-[24px] aspect-square shadow-md">
          <img
            src="/images/training/teaching-4.webp"
            alt="Process of training 2"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    {/* Right Column: Full bio */}
    <div>
      <p className="font-sans text-body-sm text-glowly-orange uppercase tracking-widest mb-3">
        About the Founder
      </p>
      <h2 className="font-cormorant-heading text-section text-glowly-black mb-6 leading-tight">
        Lira
      </h2>

      <div className="space-y-4 font-sans text-body-md text-glowly-black/90 leading-relaxed">
        <p>
          My name is Lira, and I have been in the beauty industry for over 17 years. I am not just a nail artist. I am a woman, a mother of three, and a happy wife. And perhaps that is why I deeply understand how important it is for every woman to make time for herself — for beauty, self-care, and inner well-being.
        </p>
        <p>
          My love for aesthetics began in childhood. I grew up in a family of artists. My father is a well-known artist in our city — a man of refined taste and a deep sense of beauty. From an early age, I was surrounded by art, attention to detail, and respect for aesthetics.
        </p>
        <p>
          I still remember when I first started painting on nails. To me, they were like tiny canvases. I painted acrylic designs on nail tips, and my father viewed them as real miniature artworks. Looking back nearly 30 years ago, even as a young girl, I was already experimenting with nails.
        </p>
        <p>
          After graduating with a degree in Accounting, I consciously chose the path of becoming a nail artist. And I chose Russian Manicure specifically — as a discipline built on precision, excellence, and quality. It became the work of my soul.
        </p>

        <div className="border-l-2 border-glowly-orange/30 pl-4 space-y-3">
          <p className="font-cormorant-heading text-display-md text-glowly-black">Today</p>
          <p>
            Today, I bring together artistic vision, over 17 years of experience, perfectionism, and a deep understanding of nails. I am a licensed nail professional, licensed educator, international trainer, and a licensed Russian Manicure trainer in the United States. My students have become successful high-level professionals around the world.
          </p>
        </div>

        <div className="border-l-2 border-glowly-orange/30 pl-4 space-y-3">
          <p className="font-cormorant-heading text-display-md text-glowly-black">Standards</p>
          <p>
            Every artist at LS Beauty is trained through my system, works by unified standards, and perfects every detail. We do not work fast. We work with quality.
          </p>
        </div>

        <div className="border-l-2 border-glowly-orange/30 pl-4 space-y-2">
          <p className="font-cormorant-heading text-display-md text-glowly-black">Philosophy</p>
          <p className="italic">
            Manicure is not just maintenance. It is about confidence, how you feel, and self-love. Our mission: to make each person a little happier.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-6">
        {[
          { num: "17+", label: "Years experience" },
          { num: "4", label: "Max students per class" },
          { num: "100%", label: "Hands-on training" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="font-cormorant-heading text-display-xl text-glowly-orange leading-none">{stat.num}</p>
            <p className="font-sans text-body-xs text-glowly-black/90 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

          {/* ── Russian Manicure explanation ── */}
          <section className="py-12 lg:py-16 bg-glowly-orange/5 mb-16 lg:mb-24" aria-label="About Russian Manicure">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <p className="font-sans text-body-sm text-glowly-orange uppercase tracking-widest mb-3">The technique</p>
                  <h3 className="font-cormorant-heading text-section text-glowly-black mb-4">Russian Manicure</h3>
                  <p className="font-sans text-body-md text-glowly-black/90 leading-relaxed">
                    Russian Manicure is a premium technique known for exceptional cleanliness, precision, and long-lasting results. It is a standard of quality.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-cormorant-heading text-display-md text-glowly-black">The result</p>
                  {["Impeccably clean nails", "A polished, elevated look", "3+ weeks of wear"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-glowly-orange flex-shrink-0 flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                      </div>
                      <span className="font-sans text-body-md text-glowly-black/90">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <p className="font-cormorant-heading text-display-md text-glowly-black">Education</p>
                  <p className="font-sans text-body-md text-glowly-black/90 leading-relaxed">
                    I train professionals through my own system. The strongest students become part of our team.
                  </p>
                  <p className="font-sans text-body-sm text-glowly-black/90 italic">
                    "We would be honored to welcome you to LS Beauty Nails & Spa."
                  </p>
                  <a
                    href="https://www.vagaro.com/cl/WbFmBC9MPNMxiIeJG5Lj5Aqhd97xAjv9uz3eNk3vh5s="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-book px-6 py-3 text-body-md text-white bg-glowly-action-orange hover:opacity-90"
                  >
                   Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Courses ── */}
          <section className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24" aria-label="Available Courses">
            <h2 className="section-heading">Available Courses</h2>
            <div className="space-y-4">
              {COURSES.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>

          {/* ── Training photo gallery ── */}
          <section className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24" aria-label="Training in action">
            <p className="font-sans text-body-sm text-glowly-black/90 uppercase tracking-widest mb-6 text-center">
              Training in action
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-[28px] aspect-[4/3]">
                <img
                  src="/images/training/teaching-1.webp"
                  alt="Nail technician training course at LS Beauty Salon Paoli PA"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
              <div className="overflow-hidden rounded-[28px] aspect-[4/3] sm:mt-6">
                <img
                  src="/images/training/teaching-2.webp"
                  alt="Students practicing Russian Manicure technique at LS Beauty training"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
              <div className="overflow-hidden rounded-[28px] aspect-[4/3]">
                <img
                  src="/images/training/certificates.webp"
                  alt="Certificate ceremony for nail training graduates at LS Beauty Salon"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            </div>
          </section>

          {/* ── Why train with us ── */}
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
                    <p className="font-sans text-body-sm text-glowly-black/90">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 text-center">
            <h2 className="font-cormorant-heading text-section text-glowly-black mb-4">
              Ready to Elevate Your Skills?
            </h2>
            <p className="font-sans text-body-lg text-glowly-black/90 mb-8 max-w-xl mx-auto">
              Contact us to learn about upcoming course dates, pricing, and enrollment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12679624747" className="btn-book px-8 py-3 text-body-md text-white bg-glowly-action-orange shadow-lg hover:opacity-90">
                Call (267) 962-4747
              </a>
              <a href="https://www.instagram.com/lsbeautypaoli" target="_blank" rel="noopener noreferrer" className="btn-book px-8 py-3 text-body-md border-2 border-glowly-orange text-glowly-black hover:bg-glowly-orange/10">
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

