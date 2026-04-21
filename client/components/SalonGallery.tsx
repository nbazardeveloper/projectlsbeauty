// SalonGallery.tsx
// Place AFTER ExperiencedTeam and BEFORE Location in Index.tsx
// Usage: import { SalonGallery } from "@/components/SalonGallery";
//
// Photo paths (replace with real images):
//   /images/gallery/reception.webp        — reception interior (first, prominent)
//   /images/gallery/desk-1.webp           — nail desk close-up
//   /images/gallery/shelves.webp          — shelves with nail polishes
//   /images/gallery/chairs.webp           — manicure chairs
//   /images/gallery/process-1.webp        — working process
//   /images/gallery/process-2.webp        — working process
//   /images/gallery/process-3.webp        — working process
//   /images/gallery/tools.webp            — tools laid out
//   /images/gallery/nails-closeup.webp    — finished nails close-up (used in FAQ bg)

import { useState } from "react";

// ── FAQ data (same as Index.tsx — import from shared data if you prefer) ──────
const faqs = [
  {
    q: "What is a Russian Manicure?",
    a: "A Russian Manicure is a dry nail care technique that uses an e-file (electric drill) to meticulously clean and prep the skin around the nail. It results in an incredibly clean, precise finish with no cutting of the cuticles — just gentle removal of dead skin for a polished, long-lasting look.",
  },
  {
    q: "What is Strong Gel Manicure at LS Beauty?",
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

// Gallery photos: first item will be the large hero tile
const GALLERY_PHOTOS = [
  {
    src: "/images/gallery/reception.webp",
    alt: "Reception area at LS Beauty Salon & Spa, Paoli PA",
    span: "lg:col-span-2 lg:row-span-2", // large tile
  },
  {
    src: "/images/gallery/desk-1.webp",
    alt: "Nail desk setup at LS Beauty Salon",
    span: "",
  },
  {
    src: "/images/gallery/shelves.webp",
    alt: "Nail polish shelves at LS Beauty Salon",
    span: "",
  },
  {
    src: "/images/gallery/chairs.webp",
    alt: "Manicure chairs at LS Beauty Salon Paoli PA",
    span: "",
  },
  {
    src: "/images/gallery/process-1.webp",
    alt: "Nail technician performing Russian manicure at LS Beauty",
    span: "",
  },
  {
    src: "/images/gallery/process-2.webp",
    alt: "Nail technician working at LS Beauty Salon",
    span: "lg:col-span-2",
  },
  {
    src: "/images/gallery/tools.webp",
    alt: "Professional nail tools at LS Beauty Salon",
    span: "",
  },
  {
    src: "/images/gallery/process-3.webp",
    alt: "Nail care process at LS Beauty Salon Paoli PA",
    span: "",
  },
];

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

export function SalonGallery() {
  return (
    <>
      {/* ── Gallery Section ── */}
      <section
        id="gallery"
        className="py-16 lg:py-24 bg-white"
        aria-label="Salon Gallery"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-sans text-body-sm text-glowly-orange uppercase tracking-widest mb-3 text-center">
            Our space
          </p>
          <h2 className="section-heading">Inside LS Beauty</h2>

          {/* Mosaic grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[220px] gap-3 lg:gap-4">
            {GALLERY_PHOTOS.map((photo, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-[20px] ${photo.span}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section — original white bg + orange borders ── */}
      <section
        id="faq"
        className="py-16 lg:py-24 bg-white"
        aria-label="Russian Manicure & Strong Gel FAQ"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant-heading text-display-lg lg:text-display-xl text-center text-glowly-black mb-12">
            Russian Manicure &amp; Strong Gel FAQ
          </h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



// // SalonGallery.tsx
// // Place AFTER ExperiencedTeam and BEFORE Location in Index.tsx
// // Usage: import { SalonGallery } from "@/components/SalonGallery";
// //
// // Photo paths (replace with real images):
// //   /images/gallery/reception.webp        — reception interior (first, prominent)
// //   /images/gallery/desk-1.webp           — nail desk close-up
// //   /images/gallery/shelves.webp          — shelves with nail polishes
// //   /images/gallery/chairs.webp           — manicure chairs
// //   /images/gallery/process-1.webp        — working process
// //   /images/gallery/process-2.webp        — working process
// //   /images/gallery/process-3.webp        — working process
// //   /images/gallery/tools.webp            — tools laid out
// //   /images/gallery/nails-closeup.webp    — finished nails close-up (used in FAQ bg)

// import { useState } from "react";

// // ── FAQ data (same as Index.tsx — import from shared data if you prefer) ──────
// const faqs = [
//   {
//     q: "What is a Russian Manicure?",
//     a: "A Russian Manicure is a dry nail care technique that uses an e-file (electric drill) to meticulously clean and prep the skin around the nail. It results in an incredibly clean, precise finish with no cutting of the cuticles — just gentle removal of dead skin for a polished, long-lasting look.",
//   },
//   {
//     q: "What is Strong Gel Manicure at LS Beauty?",
//     a: "Our Strong Gel (Hard Gel) Manicure combines the precision of a Russian Manicure prep with a durable hard gel application. It's stronger than regular gel polish, won't lift, and protects your natural nails — perfect for clients who want length, strength, and a flawless finish.",
//   },
//   {
//     q: "What is a Russian Pedicure?",
//     a: "A Russian Pedicure applies the same e-file dry technique to feet — carefully removing dead skin, cleaning around the nails, and shaping them. The result is smoother skin and neater nails without water soaking, which helps the polish last longer.",
//   },
//   {
//     q: "How is a Russian Manicure different from a regular manicure?",
//     a: "A traditional manicure involves soaking the hands and using nippers to cut cuticles, which can cause regrowth and irritation. The Russian technique is entirely dry, uses precision e-file bits, and removes only the non-living tissue — it's more hygienic, more precise, and the results last significantly longer.",
//   },
//   {
//     q: "What's included in the Strong Gel service?",
//     a: "Our Strong Gel service includes: removal of previous product, full Russian Manicure prep, hard gel application, shaping, and your choice of gel color or French. Everything is included in one flat price — no hidden add-ons.",
//   },
// ];

// // Gallery photos: first item will be the large hero tile
// const GALLERY_PHOTOS = [
//   {
//     src: "/images/gallery/reception.webp",
//     alt: "Reception area at LS Beauty Salon & Spa, Paoli PA",
//     span: "lg:col-span-2 lg:row-span-2", // large tile
//   },
//   {
//     src: "/images/gallery/desk-1.webp",
//     alt: "Nail desk setup at LS Beauty Salon",
//     span: "",
//   },
//   {
//     src: "/images/gallery/shelves.webp",
//     alt: "Nail polish shelves at LS Beauty Salon",
//     span: "",
//   },
//   {
//     src: "/images/gallery/chairs.webp",
//     alt: "Manicure chairs at LS Beauty Salon Paoli PA",
//     span: "",
//   },
//   {
//     src: "/images/gallery/process-1.webp",
//     alt: "Nail technician performing Russian manicure at LS Beauty",
//     span: "",
//   },
//   {
//     src: "/images/gallery/process-2.webp",
//     alt: "Nail technician working at LS Beauty Salon",
//     span: "lg:col-span-2",
//   },
//   {
//     src: "/images/gallery/tools.webp",
//     alt: "Professional nail tools at LS Beauty Salon",
//     span: "",
//   },
//   {
//     src: "/images/gallery/process-3.webp",
//     alt: "Nail care process at LS Beauty Salon Paoli PA",
//     span: "",
//   },
// ];

// function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div
//       className="accordion-item border-2 border-glowly-orange"
//       style={{ borderRadius: open ? "28px" : "9999px" }}
//     >
//       <button
//         className="w-full flex items-center justify-between px-7 py-5 text-left"
//         onClick={() => setOpen(!open)}
//         aria-expanded={open}
//         id={`faq-btn-${index}`}
//         aria-controls={`faq-panel-${index}`}
//       >
//         <span className="font-cormorant-heading text-body-lg lg:text-body-xl text-glowly-black pr-4">
//           {q}
//         </span>
//         <div
//           className="flex-shrink-0 w-9 h-9 rounded-full bg-glowly-orange/90 flex items-center justify-center transition-transform duration-300"
//           style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
//         >
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
//             <line x1="8" y1="2" x2="8" y2="14" />
//             <line x1="2" y1="8" x2="14" y2="8" />
//           </svg>
//         </div>
//       </button>
//       {open && (
//         <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-btn-${index}`} className="px-7 pb-6">
//           <p className="font-sans text-body-sm lg:text-body-md text-glowly-black/70 leading-relaxed">{a}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export function SalonGallery() {
//   return (
//     <>
//       {/* ── Gallery Section ── */}
//       <section
//         id="gallery"
//         className="py-16 lg:py-24 bg-white"
//         aria-label="Salon Gallery"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="font-sans text-body-sm text-glowly-orange uppercase tracking-widest mb-3 text-center">
//             Our space
//           </p>
//           <h2 className="section-heading">Inside LS Beauty</h2>

//           {/* Mosaic grid */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[220px] gap-3 lg:gap-4">
//             {GALLERY_PHOTOS.map((photo, i) => (
//               <div
//                 key={i}
//                 className={`overflow-hidden rounded-[20px] ${photo.span}`}
//               >
//                 <img
//                   src={photo.src}
//                   alt={photo.alt}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//                   loading="lazy"
//                   width="400"
//                   height="300"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ Section — original white bg + orange borders ── */}
//       <section
//         id="faq"
//         className="py-16 lg:py-24 bg-white"
//         aria-label="Russian Manicure & Strong Gel FAQ"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="font-cormorant-heading text-display-lg lg:text-display-xl text-center text-glowly-black mb-12">
//             Russian Manicure &amp; Strong Gel FAQ
//           </h2>
//           <div className="space-y-3">
//             {faqs.map((item, i) => (
//               <FaqItem key={i} q={item.q} a={item.a} index={i} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }