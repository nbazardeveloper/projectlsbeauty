import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "What is a Russian Manicure?",
    a: "A Russian Manicure is a dry nail care technique that uses an e-file (electric drill) to meticulously clean and prep the skin around the nail. It results in an incredibly clean, precise finish with no cutting of the cuticles — just gentle removal of dead skin for a polished, long-lasting look.",
  },
  {
    q: "What is Strong Gel Manicure at Glowly?",
    a: "Our Strong Gel (Hard Gel) Manicure combines the precision of a Russian Manicure prep with a durable hard gel application. It's stronger than regular gel polish, won't lift, and protects your natural nails — perfect for clients who want length, strength, and a flawless finish.",
  },
  {
    q: "What is a Russian Pedicure?",
    a: "A Russian Pedicure applies the same e-file dry technique to feet — carefully removing dead skin, cleaning around the nails, and shaping them. The result is smoother skin and neater nails without water soaking, which helps the polish last longer.",
  },
  {
    q: "How is a Russian Manicure different from a regular manicure?",
    a: "A traditional manicure involves soaking the hands and using nippers to cut cuticles, which can cause regrowth and irritation. The Russian technique is entirely dry, uses precision e-file bits, and removes only the non-living tissue — it's more hygienic, more precise, and the results last significantly longer.",
  },
  {
    q: "What's included in the Strong Gel service?",
    a: "Our Strong Gel service includes: removal of previous product, full Russian Manicure prep, hard gel application, shaping, and your choice of gel color or French. Everything is included in one flat price — no hidden add-ons.",
  },
];

const SIGNATURE_COLOR = "#0097A7";

const services = [
  {
    slug: "nails",
    name: "Nails",
    isSignature: true,
    fromPrice: "60",
    icon: "/images/services/nails.png",
  },
  {
    slug: "hair-styling",
    name: "Hair Styling",
    fromPrice: "-",
    icon: "/images/services/hair-styling.png",
  },
  {
    slug: "facials",
    name: "Facials",
    fromPrice: "85",
    icon: "/images/services/facials.png",
  },
  {
    slug: "brows",
    name: "Brows",
    fromPrice: "30",
    icon: "/images/services/brows.png",
  },
  {
    slug: "lashes",
    name: "Lashes",
    fromPrice: "20",
    icon: "/images/services/lashes.png",
  },
  {
    slug: "massage",
    name: "Massage",
    fromPrice: "-",
    icon: "/images/services/massage.png",
  },
  {
    slug: "permanent-makeup",
    name: "Permanent Makeup",
    fromPrice: "180",
    icon: "/images/services/permanent-makeup.png",
  },
  {
    slug: "sugaring",
    name: "Sugaring",
    fromPrice: "15",
    icon: "/images/services/sugaring.png",
  },
  {
    slug: "waxing",
    name: "Waxing",
    fromPrice: "15",
    icon: "/images/services/waxing.png",
  },
];

function ServicesAccordion() {
  return (
    <div className="space-y-4">
      {services.map((service, index) => {
        const isOpen = false;
        const priceLabel = isNaN(Number(service.fromPrice)) ? service.fromPrice : `$${service.fromPrice}`;

        return (
          <div key={index} className="relative">
            {service.isSignature && (
              <div className="absolute -top-3 left-6 z-20 bg-glowly-action-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Signature
              </div>
            )}

            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                borderRadius: isOpen ? "32px" : "9999px",
                border: isOpen ? "none" : `2px solid ${SIGNATURE_COLOR}`,
                backgroundColor: isOpen ? "rgba(92, 225, 230, 0.15)" : "white",
              }}
            >
              <div className="w-full flex items-center justify-between px-4 lg:px-7 py-3 lg:py-5 text-left gap-2">
                <div className="flex items-center gap-3 lg:gap-4 min-w-0 flex-1">
                  <div
                    className="flex-shrink-0 w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,151,167,0.1)" }}
                  >
                    <img src={service.icon} alt={service.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <span className={`font-display text-glowly-black truncate ${
                    service.name.length > 12 ? 'text-xl lg:text-3xl' : 'text-xl lg:text-3xl'
                  }`}>
                    {service.name}
                  </span>
                </div>

                <div className="flex items-center gap-3 lg:gap-6 flex-shrink-0">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <span className="font-sans text-[10px] lg:text-sm text-glowly-black/60 uppercase tracking-tighter">From</span>
                    <span className="font-display text-2xl lg:text-3xl text-glowly-black whitespace-nowrap">{priceLabel}</span>
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center px-4 lg:px-6 py-2 text-[14px] lg:text-sm font-bold rounded-full bg-glowly-orange text-white hover:opacity-90 transition whitespace-nowrap"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((item, i) => (
        <div
          key={i}
          className="border-2 border-glowly-orange rounded-full overflow-hidden transition-all duration-300"
          style={{ borderRadius: open === i ? "28px" : "9999px" }}
        >
          <button
            className="w-full flex items-center justify-between px-7 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-display text-lg lg:text-xl text-glowly-black pr-4">
              {item.q}
            </span>
            <div
              className="flex-shrink-0 w-9 h-9 rounded-full bg-glowly-orange/90 flex items-center justify-center transition-transform duration-300"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="8" y1="2" x2="8" y2="14" />
                <line x1="2" y1="8" x2="14" y2="8" />
              </svg>
            </div>
          </button>
          {open === i && (
            <div className="px-7 pb-6">
              <p className="font-sans text-sm lg:text-base text-glowly-black/70 leading-relaxed">
                {item.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">

      <div
        className="hidden lg:block absolute top-0 right-0 pointer-events-none z-0"
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
        <main className="pt-24 lg:pt-0"></main>
        <Hero />
      </div>

      <section id="services" className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl lg:text-5xl text-center text-glowly-black mb-12">
            Services
          </h2>
          <ServicesAccordion />
        </div>
      </section>

      <section id="reviews" className="py-16 lg:py-24 bg-glowly-lavender/70 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl lg:text-4xl text-center mb-12 text-glowly-black">
            Reviews from <span className="font-bold text-glowly-action-orange">Google Maps</span>
          </h2>
          <div className="relative">
            <button
              onClick={() => {
                const container = document.getElementById('reviews-container');
                container?.scrollBy({ left: -350, behavior: 'smooth' });
              }}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-glowly-action-orange text-white rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={() => {
                const container = document.getElementById('reviews-container');
                container?.scrollBy({ left: 350, behavior: 'smooth' });
              }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-glowly-action-orange text-white rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <div
              id="reviews-container"
              className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none'}}
            >
              {[
                { name: "Sviatoslav", text: "I'm happy with my experience with LS Beauty Salon. Olivia (Hairstylist) and Juliana (Nail technician ) were so friendly, attentive, and professional. I'm delighted with their work!" },
                { name: "Halyna G", text: "I'm happy with my experience with LS Beauty Salon. Olivia (Hairstylist) and Juliana (Nail technician ) were so friendly, attentive, and professional. I'm delighted with their work!" },
                { name: "Alia N.", text: "New location isI had my nails done with Lina - she is the best !👌 I'm happy with my nails-color , clean cuticle, shape! ❤️She is amazing! Clean tools , nice interior, coffee and tea -100% right place to spend for your Beauty!Also , I had my eyelash extension and eyebrows shaping and tinting with Anna - I'm very happy ! Lashes look so natural, my eyebrows have a perfect shape and color ! She is great !I can't wait for my next appointments with this incredible team ! incredible! This one was a 10/10. Will definitely be returning!" },
                { name: "Al", text: "BI recently had the most incredible experience from the moment I walked in, I knew I was in for a treat. I showed the nail artist a picture from Pinterest, and they not only replicated it flawlessly but also customized the color to perfection. The attention to detail and level of customization truly exceeded my expectations. The atmosphere was relaxing, the staff was friendly and attentive, and the end result was exactly what I had envisioned. I highly recommend them to anyone looking for top-notch nail services. I'll definitely be returning for more pampering in the future!est place in the city to get your nails done. Very friendly, professional." },
                { name: "Kelly", text: "The attenToday I had eyelash extensions done at the LS salon with the wonderful esthetician Anna. Say that I am happy is to say nothing! I am delighted ! 😍 Anna was truly attentive to all my requests and the characteristics of my eyes and the result is absolutely amazing! 🤩❤ I will definitely come to her again not only for eyelash extensions but also for permanent makeup, because she showed me her work and they are really excellent! 👌 I recommend Anna at LS salon to everyone as a highly qualified professional !❣ Thank you very much again Anna!tion to detail here is unmatched. My nails look perfect!" },
              ].map((rev, i) => (
  <div key={i} className="min-w-[300px] md:min-w-[350px] bg-white rounded-[32px] p-6 border border-glowly-lavender/30 shadow-sm snap-start">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-glowly-lavender rounded-full flex items-center justify-center text-white font-display font-bold">
        {rev.name[0]}
      </div>
      <div>
        {/* ИМЯ: Сделали крупнее (text-base) и чисто черным (text-black) */}
        <div className="font-sans font-bold text-base text-black">{rev.name}</div>
        <div className="flex text-glowly-orange text-xs">★★★★★</div>
      </div>
    </div>

    {/* ТЕКСТ ОТЗЫВА: 
        1. Заменили text-sm (14px) на text-base (16px) или text-lg (18px)
        2. Заменили text-glowly-black/70 (с прозрачностью) на text-black (насыщенный черный)
        3. Убрали или увеличили line-clamp, если текст стал не влезать
    */}
    <p className="font-sans text-base font-medium text-black mb-4 line-clamp-4">
      {rev.text}
    </p>

    <button className="font-sans text-xs font-bold text-glowly-black/60 mb-4 hover:text-glowly-orange transition-colors underline">
      Read more
    </button>
    
    <div className="rounded-2xl overflow-hidden h-40 bg-glowly-lavender/10 flex items-center justify-center">
      <span className="text-glowly-lavender text-xs font-sans italic">Review Image</span>
    </div>
  </div>
))}
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `#reviews-container::-webkit-scrollbar { display: none; }` }} />
      </section>

      <section id="why" className="relative py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="lg:hidden rounded-t-[48px] overflow-hidden flex flex-col"
            style={{ backgroundColor: "rgba(73, 208, 201, 0.8)" }}
          >
            <div className="p-8 flex flex-col gap-8">
              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-2 w-fit shadow-sm">
                  <h3 className="font-display text-2xl text-glowly-black">Experienced Team</h3>
                </div>
                <p className="font-sans text-xl text-glowly-black/80 leading-relaxed">
                  Skilled nail technicians with 
                  <br />
                  <span className="font-bold text-xl">5+ years of experience</span>.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-2 w-fit shadow-sm">
                  <h3 className="font-display text-2xl text-glowly-black">Maintenance On Us</h3>
                </div>
                <p className="font-sans text-xl text-glowly-black/80 leading-relaxed">
                  Our <span className="font-bold text-xl">10-day guarantee</span> covers your manicure.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-2 w-fit shadow-sm">
                  <h3 className="font-display text-2xl text-glowly-black">Complete Service</h3>
                </div>
                <p className="font-sans text-xl text-glowly-black/80 leading-relaxed">
                  One price covers everything from removal to design.
                </p>
              </div>
            </div>
            <div className="flex items-end justify-center" style={{ minHeight: "300px" }}>
              <img
                src="/images/why/master.png"
                alt="Experienced Team"
                className="w-auto object-contain"
                style={{ maxHeight: "320px" }}
              />
            </div>
          </div>

          <div className="relative hidden lg:flex flex-row items-stretch">
            <div
              className="relative lg:w-1/2 items-end justify-center hidden lg:flex"
              style={{
                marginLeft: "calc(-1 * (max(0px, (100vw - 1280px) / 2) + 1.5rem))",
                width: "calc(50% + max(0px, (100vw - 1280px) / 2) + 1.5rem)",
                backgroundColor: "rgba(73, 208, 201, 0.8)",
                minHeight: "550px",
              }}
            >
              <div className="relative w-full h-full flex items-end justify-center">
                <img
                  src="/images/why/master.png"
                  alt="Experienced Team"
                  className="relative z-10 w-auto object-contain"
                  style={{
                    height: "115%",
                    maxHeight: "none",
                    position: "absolute",
                    bottom: "0",
                    filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))"
                  }}
                />
              </div>
              <div className="absolute bottom-10 left-10 text-white/40 pointer-events-none z-0">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M0 100 Q 50 50 100 100 T 200 100" />
                  <path d="M0 120 Q 50 70 100 120 T 200 120" />
                </svg>
              </div>
            </div>
            <div
              className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center gap-10"
              style={{
                backgroundColor: "rgba(73, 208, 201, 0.8)",
                borderTopRightRadius: "80px",
                borderBottomRightRadius: "80px",
              }}
            >
              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-2 w-fit shadow-sm">
                  <h3 className="font-display text-2xl text-glowly-black">Experienced Team</h3>
                </div>
                <p className="font-sans text-glowly-black/80 text-xl leading-relaxed max-w-md">
                  Skilled nail technicians with <span className="font-bold text-xl">5+ years of experience</span>.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-2 w-fit shadow-sm">
                  <h3 className="font-display text-2xl text-glowly-black">Maintenance On Us</h3>
                </div>
                <p className="font-sans text-glowly-black/80 text-xl leading-relaxed max-w-md">
                  Our <span className="font-bold text-xl">10-day guarantee</span> covers your manicure.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-2 w-fit shadow-sm">
                  <h3 className="font-display text-2xl text-glowly-black">Complete Service</h3>
                </div>
                <p className="font-sans text-glowly-black/80 text-xl leading-relaxed max-w-md">
                  One price covers everything from removal to design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section id="locations" className="py-12 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 lg:px-6">
    <div
      className="rounded-[32px] lg:rounded-[48px] p-8 lg:p-16 shadow-xl relative overflow-hidden"
      style={{ backgroundColor: "#49d0c9CC" }}
    >
      {/* Декоративный элемент (только для десктопа, чтобы не загромождать мобилку) */}
      <div className="hidden lg:block absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <svg width="160" height="160" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </div>

      <div className="relative z-10">
        <h2 className="font-display text-4xl lg:text-6xl text-center text-glowly-black mb-4">
          Visit <span className="text-glowly-action-orange">Us</span>
        </h2>
        <p className="font-sans text-2xl lg:text-xl text-center text-glowly-black/80 mb-10 lg:mb-16 max-w-2xl mx-auto leading-relaxed">
          Your destination for beauty, relaxation, & rejuvenation
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Контакты */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="w-full">
             
              
              <div className="space-y-5">
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <a href="tel:2679624747" className="font-sans text-xl font-bold text-glowly-black hover:text-glowly-action-orange transition-colors">
                    (267) 962-4747
                  </a>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <p className="font-sans text-2xl text-glowly-black/90 leading-tight">
                    24 Paoli Pike, Paoli, PA 19301
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex justify-center items-center px-10 py-4 bg-glowly-action-orange text-white font-sans text-sm font-black uppercase tracking-widest rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get Directions
            </a>
          </div>

          {/* График работы */}
          <div className="w-full bg-white/90 backdrop-blur-md rounded-[28px] p-6 lg:p-10 border border-white/90 shadow-inner">
            <h3 className="font-display text-2xl text-glowly-black mb-6 text-center lg:text-left">Opening Hours</h3>
            <div className="space-y-4 font-sans">
              <div className="flex justify-between items-center border-b border-glowly-black/5 pb-3">
                <span className="text-glowly-black/60 uppercase text-[10px] lg:text-xs font-bold tracking-widest">Mon — Sat</span>
                <span className="text-glowly-black font-bold text-base lg:text-lg">8:30am – 7:00pm</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-1 border-b border-glowly-black/5 pb-3 text-center sm:text-left">
                <span className="text-glowly-black/60 uppercase text-[10px] lg:text-xs font-bold tracking-widest">Sunday</span>
                <span className="text-glowly-black font-medium text-sm italic opacity-80">
                  By special appointment only
                </span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white/40 rounded-2xl">
              <p className="text-[11px] lg:text-xs text-glowly-black/70 leading-relaxed text-center italic">
                * We recommend booking in advance to secure your preferred time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="relative mb-8" style={{ width: "320px", height: "220px" }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 80 Q 60 40 80 20" stroke="rgba(92,225,230,0.3)" strokeWidth="1.5" fill="none"/>
              <path d="M10 110 Q 50 70 90 50" stroke="rgba(92,225,230,0.25)" strokeWidth="1" fill="none"/>
              <path d="M300 80 Q 260 40 240 20" stroke="rgba(92,225,230,0.3)" strokeWidth="1.5" fill="none"/>
              <path d="M310 110 Q 270 70 230 50" stroke="rgba(92,225,230,0.25)" strokeWidth="1" fill="none"/>
              <path d="M20 160 Q 60 180 80 200" stroke="rgba(92,225,230,0.3)" strokeWidth="1.5" fill="none"/>
              <path d="M300 160 Q 260 180 240 200" stroke="rgba(92,225,230,0.3)" strokeWidth="1.5" fill="none"/>
            </svg>
            <div
              className="absolute inset-x-8 inset-y-4 rounded-2xl flex flex-col items-center justify-center shadow-lg"
              style={{ background: "linear-gradient(135deg, rgba(92,225,230,0.6) 0%, rgba(150,140,210,0.7) 100%)" }}
            >
              <span className="font-display text-3xl text-white/90 tracking-wide">LS Beauty</span>
              <span className="font-sans text-xs text-white/60 tracking-widest mt-1">Salon &amp; Spa</span>
            </div>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl text-glowly-black mb-3">
            Gift Cards are here!
          </h2>
          <a
            href="#Home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-glowly-orange text-white font-sans font-bold text-base rounded-full hover:opacity-80 transition-opacity"
          >
            <span>→</span> Visit Us Now
          </a>
        </div>
      </section>

      <section id="faq" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl lg:text-4xl text-center text-glowly-black mb-12">
            Strong Gel Manicure FAQ
          </h2>
          <FaqAccordion />
        </div>
      </section>

      <Footer />
    </div>
  );
}