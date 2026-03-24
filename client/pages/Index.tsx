import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { useState } from "react";

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

const services = [
  {
    name: "Hard Gel Manicure",
    isSignature: true,
    fromPrice: "80",
    description: "Using the Russian Manicure technique and Glowly's innovative Liquid Strong Gel formula, we deliver the highest-quality gel manicure. Enjoy a non-toxic manicure, all protected by our 10-day guarantee.",
    tiers: [
      { label: "Junior\nNail Tech", price: "80" },
      { label: "Nail\nTech", price: "110" },
      { label: "Senior\nNail Tech", price: "125" },
      { label: "Expert\nNail Tech", price: "145", isHighlight: true },
    ],
  },
  {
    name: "Russian Gel Manicure",
    fromPrice: "70",
    description: "Based on the Russian Manicure technique, this service is excellent for growing your natural nails, restoring acrylic damage, and achieving a gel manicure that lasts beautifully.",
    tiers: [
      { label: "Junior\nNail Tech", price: "70" },
      { label: "Nail\nTech", price: "100" },
      { label: "Senior\nNail Tech", price: "115" },
      { label: "Expert\nNail Tech", price: "130", isHighlight: true },
    ],
  },
  {
    name: "Gel Extension",
    fromPrice: "180",
    description: "Durable, flexible nail extensions in your perfect shape and length, created with a safe e-file technique and finished with strong gel. 7-day wear guarantee included.",
    tiers: [
      { label: "Nail\nTech", price: "180" },
      { label: "Senior\nNail Tech", price: "180" },
      { label: "Expert\nNail Tech", price: "200", isHighlight: true },
    ],
  },
  {
    name: "Manicure",
    fromPrice: "60",
    description: "No polish. Russian style e-file manicure that deeply cleans and smooths the nails and cuticles for a naturally neat look.",
    tiers: [
      { label: "Junior\nNail Tech", price: "60" },
      { label: "Nail\nTech", price: "60" },
      { label: "Senior\nNail Tech", price: "70" },
      { label: "Expert\nNail Tech", price: "80", isHighlight: true },
    ],
  },
  {
    name: "Gel Pedicure",
    fromPrice: "80",
    description: "Dry e-file pedicure with perfectly cleaned cuticles, high-shine gel polish, and smooth soles finished with pro foot foam.",
    tiers: [
      { label: "Junior\nNail Tech", price: "80" },
      { label: "Nail\nTech", price: "110" },
      { label: "Senior\nNail Tech", price: "115" },
      { label: "Expert\nNail Tech", price: "130", isHighlight: true },
    ],
  },
  {
    name: "Pedicure",
    fromPrice: "70",
    description: "No polish. Dry e-file pedicure with deep cuticle cleaning and smooth soles, finished with pro foot foam for a fresh, natural look without polish.",
    tiers: [
      { label: "Junior\nNail Tech", price: "70" },
      { label: "Nail\nTech", price: "80" },
      { label: "Senior\nNail Tech", price: "90" },
      { label: "Expert\nNail Tech", price: "100", isHighlight: true },
    ],
  },
];

function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {services.map((service, index) => {
        const isOpen = open === index;

        return (
          <div key={index} className="relative">
            {service.isSignature && (
              <div className="absolute -top-3 left-6 z-20 bg-glowly-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Signature
              </div>
            )}

            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                borderRadius: isOpen ? "32px" : "9999px",
                border: isOpen
                  ? "none"
                  : service.isSignature
                    ? "2px solid #0097A7"
                    : "2px solid #5ce1e6",
                backgroundColor: isOpen ? "rgba(92, 225, 230, 0.15)" : "white",
              }}
            >
              {/* Header row */}
              <button
                className="w-full flex items-center justify-between px-5 lg:px-7 py-4 lg:py-5 text-left"
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="font-display text-lg lg:text-3xl text-glowly-black pr-4">
                  {service.name}
                </span>
                <div className="flex items-center gap-3 lg:gap-4">
                  {!isOpen && (
                    <>
                      <span className="font-sans text-xs lg:text-sm text-glowly-black/60">From</span>
                      <span className="font-display text-lg lg:text-3xl text-glowly-black">${service.fromPrice}</span>
                    </>
                  )}
                  <div
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      backgroundColor: service.isSignature && !isOpen ? "#0097A7" : "rgba(92,225,230,0.3)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={service.isSignature && !isOpen ? "white" : "#0097A7"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </div>
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div className="px-5 lg:px-7 pb-6 lg:pb-8 flex flex-col gap-4 lg:gap-6">
                  <div className="flex-1">
                    <p className="font-sans text-sm lg:text-base text-glowly-black/80 leading-relaxed mb-4 lg:mb-6">
                      {service.description}
                    </p>
                    <a
                      href="#Home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex px-6 lg:px-7 py-2.5 lg:py-3 bg-glowly-orange text-white font-sans font-bold text-xs lg:text-sm rounded-full uppercase tracking-wider hover:opacity-80 transition-opacity"
                    >
                      Book Now
                    </a>
                  </div>

                  {/* Price tiers - mobile-first responsive grid */}
                  <div className="grid grid-cols-2 gap-3 lg:flex lg:gap-2 lg:flex-nowrap">
                    {service.tiers!.map((tier, ti) => (
                      <div
                        key={ti}
                        className="flex flex-col items-center justify-between px-3 lg:px-4 py-3 lg:py-4 rounded-2xl min-w-[90px] lg:min-w-[80px]"
                        style={{
                          backgroundColor: tier.isHighlight
                            ? "rgba(92, 225, 230, 0.4)"
                            : "rgba(255,255,255,0.75)",
                        }}
                      >
                        <span className="font-sans text-xs text-glowly-black/70 text-center whitespace-pre-line leading-tight mb-2 lg:mb-3">
                          {tier.label}
                        </span>
                        <span className="font-display text-xl lg:text-3xl text-glowly-black">${tier.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
          className="border border-glowly-lavender rounded-full overflow-hidden transition-all duration-300"
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
              className="flex-shrink-0 w-9 h-9 rounded-full bg-glowly-lavender/30 flex items-center justify-center transition-transform duration-300"
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

      {/* Blob — rgba(x,0) instead of transparent to avoid grey banding */}
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




   <section id="reviews" className="py-16 lg:py-24 bg-glowly-lavender/10 overflow-hidden relative">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="font-display text-3xl lg:text-4xl text-center mb-12 text-glowly-black">
      Reviews from <span className="text-glowly-orange">Google Maps</span>
    </h2>

    <div className="relative">
      {/* Кнопки навигации */}
      <button 
        onClick={() => {
          const container = document.getElementById('reviews-container');
          container?.scrollBy({ left: -350, behavior: 'smooth' });
        }}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-glowly-orange text-white rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      
      <button 
        onClick={() => {
          const container = document.getElementById('reviews-container');
          container?.scrollBy({ left: 350, behavior: 'smooth' });
        }}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-glowly-orange text-white rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      {/* Контейнер с отзывами */}
      <div 
        id="reviews-container"
        className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {[
          { name: "Sviatoslav", text: "I’m happy with my experience with LS Beauty Salon. Olivia (Hairstylist) and Juliana (Nail technician ) were so friendly, attentive, and professional. I’m delighted with their work!" },
          { name: "Halyna G", text: "I’m happy with my experience with LS Beauty Salon. Olivia (Hairstylist) and Juliana (Nail technician ) were so friendly, attentive, and professional. I’m delighted with their work!" },
          { name: "Alia N.", text: "New location isI had my nails done with Lina - she is the best !👌 I’m happy with my nails-color , clean cuticle, shape! ❤️She is amazing! Clean tools , nice interior, coffee and tea -100% right place to spend for your Beauty!Also , I had my eyelash extension and eyebrows shaping and tinting with Anna - I’m very happy ! Lashes look so natural, my eyebrows have a perfect shape and color ! She is great !I can’t wait for my next appointments with this incredible team ! incredible! This one was a 10/10. Will definitely be returning!" },
          { name: "Al", text: "BI recently had the most incredible experience from the moment I walked in, I knew I was in for a treat. I showed the nail artist a picture from Pinterest, and they not only replicated it flawlessly but also customized the color to perfection. The attention to detail and level of customization truly exceeded my expectations. The atmosphere was relaxing, the staff was friendly and attentive, and the end result was exactly what I had envisioned. I highly recommend them to anyone looking for top-notch nail services. I'll definitely be returning for more pampering in the future!est place in the city to get your nails done. Very friendly, professional." },
          { name: "Kelly", text: "The attenToday I had eyelash extensions done at the LS salon with the wonderful esthetician Anna. Say that I am happy is to say nothing! I am delighted ! 😍 Anna was truly attentive to all my requests and the characteristics of my eyes and the result is absolutely amazing! 🤩❤ I will definitely come to her again not only for eyelash extensions but also for permanent makeup, because she showed me her work and they are really excellent! 👌 I recommend Anna at LS salon to everyone as a highly qualified professional !❣ Thank you very much again Anna!tion to detail here is unmatched. My nails look perfect!" },
        ].map((rev, i) => (
          <div key={i} className="min-w-[300px] md:min-w-[350px] bg-white rounded-[32px] p-6 border border-glowly-lavender/30 shadow-sm snap-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-glowly-lavender rounded-full flex items-center justify-center text-white font-display font-bold">
                {rev.name[0]}
              </div>
              <div>
                <div className="font-sans font-semibold text-sm text-glowly-black">{rev.name}</div>
                <div className="flex text-glowly-orange text-xs">★★★★★</div>
              </div>
            </div>
            
            <p className="font-sans text-sm text-glowly-black/70 mb-4 line-clamp-3">
              {rev.text}
            </p>
            
            <button className="font-sans text-xs text-glowly-black/40 mb-4 hover:text-glowly-orange transition-colors">
              Read more
            </button>
            
            <div className="rounded-2xl overflow-hidden h-40 bg-glowly-lavender/10 flex items-center justify-center">
               <span className="text-glowly-lavender text-xs font-sans">Review Image</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* CSS для скрытия скроллбара (можно также добавить в global.css) */}
  <style dangerouslySetInnerHTML={{ __html: `
    #reviews-container::-webkit-scrollbar {
      display: none;
    }
  `}} />
</section>


 <section id="why" className="relative py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Мобильный layout — единый блок: текст сверху, картинка снизу */}
          <div
            className="lg:hidden rounded-t-[48px] overflow-hidden flex flex-col"
            style={{ backgroundColor: "rgba(92, 225, 230, 0.2)" }}
          >
            {/* Текст */}
            <div className="p-8 flex flex-col gap-8">
              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-2 w-fit shadow-sm">
                  <h3 className="font-display text-2xl text-glowly-black">Experienced Team</h3>
                </div>
                <p className="font-sans text-glowly-black/80 leading-relaxed">
                  Skilled nail technicians with 
                  <br />
            <span className="font-bold">5+ years of experience</span>.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-2 w-fit shadow-sm">
                  <h3 className="font-display text-2xl text-glowly-black">Maintenance On Us</h3>
                </div>
                <p className="font-sans text-glowly-black/80 leading-relaxed">
                  Our <span className="font-bold">10-day guarantee</span> covers your manicure.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-2 w-fit shadow-sm">
                  <h3 className="font-display text-2xl text-glowly-black">Complete Service</h3>
                </div>
                <p className="font-sans text-glowly-black/80 leading-relaxed">
                  One price covers everything from removal to design.
                </p>
              </div>
            </div>

            {/* Картинка внизу */}
            <div className="flex items-end justify-center" style={{ minHeight: "300px" }}>
              <img
                src="/images/why/master.png"
                alt="Experienced Team"
                className="w-auto object-contain"
                style={{ maxHeight: "320px" }}
              />
            </div>
          </div>

          {/* Десктопный layout — без изменений */}
          <div className="relative hidden lg:flex flex-row items-stretch">

            {/* Левая часть: Фон до края экрана и крупное изображение — только десктоп */}
            <div 
              className="relative lg:w-1/2 items-end justify-center hidden lg:flex"
              style={{
                marginLeft: "calc(-1 * (max(0px, (100vw - 1280px) / 2) + 1.5rem))",
                width: "calc(50% + max(0px, (100vw - 1280px) / 2) + 1.5rem)",
                backgroundColor: "rgba(92, 225, 230, 0.2)",
                minHeight: "550px", // Высота блока, чтобы было куда "расти" вверх
              }}
            >
              {/* Контейнер для фото мастера */}
              <div className="relative w-full h-full flex items-end justify-center">
                <img 
                  src="/images/why/master.png" 
                  alt="Experienced Team" 
                  className="relative z-10 w-auto object-contain"
                  style={{ 
                    /* Выход за края СВЕРХУ: */
                    height: "125%", // Картинка на 25% больше фона
                    maxHeight: "none",
                    position: "absolute",
                    bottom: "0", // Прижата к НИЗУ
                    filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))" 
                  }}
                />
              </div>
              
              {/* Декоративные линии */}
              <div className="absolute bottom-10 left-10 text-white/40 pointer-events-none z-0">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M0 100 Q 50 50 100 100 T 200 100" />
                  <path d="M0 120 Q 50 70 100 120 T 200 120" />
                </svg>
              </div>
            </div>

            {/* Правая часть: Контент */}
            <div 
              className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center gap-10"
              style={{ 
                backgroundColor: "rgba(92, 225, 230, 0.2)",
                borderTopRightRadius: "80px",
                borderBottomRightRadius: "80px",
              }}
            >
              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-2 w-fit shadow-sm">
                  <h3 className="font-display text-2xl text-glowly-black">Experienced Team</h3>
                </div>
                <p className="font-sans text-glowly-black/80 leading-relaxed max-w-md">
                  Skilled nail technicians with <span className="font-bold">3+ years of experience</span>.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-2 w-fit shadow-sm">
                  <h3 className="font-display text-2xl text-glowly-black">Maintenance On Us</h3>
                </div>
                <p className="font-sans text-glowly-black/80 leading-relaxed max-w-md">
                  Our <span className="font-bold">10-day guarantee</span> covers your manicure.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-white rounded-full px-6 py-2 w-fit shadow-sm">
                  <h3 className="font-display text-2xl text-glowly-black">Complete Service</h3>
                </div>
                <p className="font-sans text-glowly-black/80 leading-relaxed max-w-md">
                  One price covers everything from removal to design.
                </p>
              </div>
            </div>

          </div>{/* конец десктопного flex-row */}
        </div>
      </section>


      <section id="locations" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contacts block */}
          <div
            className="rounded-[48px] p-10 lg:p-16"
            style={{ backgroundColor: "rgba(92, 225, 230, 0.15)" }}
          >
            <h2 className="font-display text-3xl lg:text-4xl text-center text-glowly-black mb-12">
              Contacts
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-display text-2xl lg:text-3xl text-glowly-black mb-5">Financial District</h3>
                <div className="font-sans text-base text-glowly-black/80 space-y-1">
                  <p>(267) 962-4747</p>
                  <p>24 Paoli Pike, Paoli, PA 19301</p>
                
                </div>
              
              </div>
              <div>
             
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-6 px-6 py-2.5 bg-glowly-orange text-white font-sans text-sm font-bold rounded-full uppercase tracking-wider hover:opacity-80 transition-opacity"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          {/* Card illustration */}
          <div className="relative mb-8" style={{ width: "320px", height: "220px" }}>
            {/* Декоративные линии вокруг */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 80 Q 60 40 80 20" stroke="rgba(92,225,230,0.3)" strokeWidth="1.5" fill="none"/>
              <path d="M10 110 Q 50 70 90 50" stroke="rgba(92,225,230,0.25)" strokeWidth="1" fill="none"/>
              <path d="M300 80 Q 260 40 240 20" stroke="rgba(92,225,230,0.3)" strokeWidth="1.5" fill="none"/>
              <path d="M310 110 Q 270 70 230 50" stroke="rgba(92,225,230,0.25)" strokeWidth="1" fill="none"/>
              <path d="M20 160 Q 60 180 80 200" stroke="rgba(92,225,230,0.3)" strokeWidth="1.5" fill="none"/>
              <path d="M300 160 Q 260 180 240 200" stroke="rgba(92,225,230,0.3)" strokeWidth="1.5" fill="none"/>
            </svg>
            {/* Карточка */}
            <div
              className="absolute inset-x-8 inset-y-4 rounded-2xl flex flex-col items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(135deg, rgba(92,225,230,0.6) 0%, rgba(150,140,210,0.7) 100%)",
              }}
            >
              <span className="font-display text-3xl text-white/90 tracking-wide">LS Beauty</span>
              <span className="font-sans text-xs text-white/60 tracking-widest mt-1">Salon &amp; Spa</span>
            </div>
          </div>

          <h2 className="font-display text-3xl lg:text-4xl text-glowly-black mb-3">
            Gift Cards are here!
          </h2>
          <p className="font-sans text-base text-glowly-black/60 mb-8">
            Now available for purchase at both NYC locations.
          </p>
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