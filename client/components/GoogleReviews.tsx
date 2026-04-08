import { useState, useRef } from "react";

// ── Types ────────────────────────────────────────────────────────────────────
interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}

// ── Hardcoded real reviews ────────────────────────────────────────────────────
const HARDCODED_REVIEWS: GoogleReview[] = [
  {
    author_name: "Ellie Blakey",
    author_url: "https://www.google.com/maps/place/?q=place_id:ChIJM8YCrCztxokROrn7um45rdM",
    profile_photo_url: "",
    rating: 5,
    text: "Highly recommend!! Lira always does an amazing job with my Russian manicures! Great attention to detail and each manicure lasts me 4 weeks.",
    time: 1744070400,
    relative_time_description: "2 weeks ago",
  },
  {
    author_name: "Natalia Varava",
    author_url: "https://www.google.com/maps/place/?q=place_id:ChIJM8YCrCztxokROrn7um45rdM",
    profile_photo_url: "",
    rating: 5,
    text: "Best nails. Been a customer for over 4 years now. It's 2026. Still the best nails!",
    time: 1741392000,
    relative_time_description: "a month ago",
  },
  {
    author_name: "Stefanie Cap",
    author_url: "https://www.google.com/maps/place/?q=place_id:ChIJM8YCrCztxokROrn7um45rdM",
    profile_photo_url: "",
    rating: 5,
    text: "I had my first Russian manicure last week with Lira. She spent so much time doing the actual manicure before any product touched my nails. I was blown away by the expertise. The amount of care and talent is unmatched. I'll be a loyal customer now. Thanks again for elevating my nails 💅💕",
    time: 1741392000,
    relative_time_description: "a month ago",
  },
  {
    author_name: "Shereen Elkachuty",
    author_url: "https://www.google.com/maps/place/?q=place_id:ChIJM8YCrCztxokROrn7um45rdM",
    profile_photo_url: "",
    rating: 5,
    text: "Had an amazing experience with Uliana — highly recommend!",
    time: 1733616000,
    relative_time_description: "3 months ago",
  },
  {
    author_name: "Brittany Pizzutillo",
    author_url: "https://www.google.com/maps/place/?q=place_id:ChIJM8YCrCztxokROrn7um45rdM",
    profile_photo_url: "",
    rating: 5,
    text: "Traveled from Swedesboro, NJ. 100% worth it. The attention to detail is superior. Staff were very nice and explained everything with each step as this was my first Russian mani/pedi. I will absolutely now be a regular customer.",
    time: 1728259200,
    relative_time_description: "5 months ago",
  },
];

// ── Star rating ──────────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-glowly-orange"
          aria-hidden="true"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

// ── Google "G" logo ──────────────────────────────────────────────────────────
function GoogleLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Google" role="img">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

// ── Avatar ───────────────────────────────────────────────────────────────────
function Avatar({ src, name }: { src: string; name: string }) {
  const [imgError, setImgError] = useState(false);

  if (!src || imgError) {
    return (
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-body-md flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #0097A7, #49d0c9)" }}
        aria-hidden="true"
      >
        {name?.[0]?.toUpperCase() ?? "?"}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${name}'s Google profile photo`}
      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      onError={() => setImgError(true)}
      loading="lazy"
      width="40"
      height="40"
    />
  );
}

// ── Single review card ────────────────────────────────────────────────────────
function ReviewCard({ review, index }: { review: GoogleReview; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 180;
  const displayText =
    isLong && !expanded ? review.text.slice(0, 180).trim() + "…" : review.text;

  return (
    <article
      role="listitem"
      className="review-card flex flex-col justify-between"
      style={{ animationDelay: `${index * 0.08}s` }}
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <Avatar src={review.profile_photo_url} name={review.author_name} />
          <div className="min-w-0">
            <a
              href={review.author_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-bold text-body-md text-black hover:text-glowly-orange transition-colors truncate block max-w-[140px]"
              itemProp="author"
            >
              {review.author_name}
            </a>
            <Stars rating={review.rating} />
          </div>
        </div>
        <div className="flex-shrink-0 mt-0.5">
          <GoogleLogo />
        </div>
      </div>

      <p
        className="font-sans text-body-sm text-black/80 leading-relaxed flex-1 mb-3"
        itemProp="reviewBody"
      >
        {displayText}
        {isLong && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="ml-1 text-glowly-orange font-semibold hover:underline text-body-xs whitespace-nowrap"
            aria-expanded={expanded}
          >
            {expanded ? "show less" : "read more"}
          </button>
        )}
      </p>

      <time
        className="font-sans text-body-xs text-black/40 mt-auto"
        dateTime={new Date(review.time * 1000).toISOString()}
        itemProp="datePublished"
      >
        {review.relative_time_description}
      </time>
    </article>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function GoogleReviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reviews = HARDCODED_REVIEWS;

  const scroll = (dir: "left" | "right") => {
    containerRef.current?.scrollBy({
      left: dir === "left" ? -370 : 370,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="reviews"
      className="py-16 lg:py-24 relative"
      aria-label="Customer Reviews"
      style={{ overflow: "visible" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(to bottom, white 0%, transparent 0%, transparent 74%, white 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 151, 167, 0.5)",
          zIndex: 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative" style={{ zIndex: 3 }}>
        <h2 className="font-cormorant-heading text-section text-center mb-3 text-glowly-black">
          Reviews from{" "}
          <span className="font-bold text-glowly-action-orange">Google Maps</span>
        </h2>

        <div className="flex items-center justify-center mb-10">
          <a
            href="https://www.google.com/maps/place/?q=place_id:ChIJM8YCrCztxokROrn7um45rdM"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-body-sm text-glowly-black/70 hover:text-glowly-orange transition-colors"
          >
            <GoogleLogo />
            <span>See all reviews on Google</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15,3 21,3 21,9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        <div className="relative">
          {reviews.length > 1 && (
            <>
              {[
                { dir: "left" as const, label: "Previous reviews", path: "M15 18l-6-6 6-6" },
                { dir: "right" as const, label: "Next reviews", path: "M9 18l6-6-6-6" },
              ].map(({ dir, label, path }) => (
                <button
                  key={dir}
                  onClick={() => scroll(dir)}
                  aria-label={label}
                  className={`absolute ${dir === "left" ? "-left-4" : "-right-4"} top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-glowly-action-orange text-white rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity`}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </button>
              ))}
            </>
          )}

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            role="list"
            aria-label="Customer reviews"
          >
            {reviews.map((review, i) => (
              <ReviewCard key={`${review.author_name}-${review.time}`} review={review} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `#reviews div::-webkit-scrollbar { display: none; }` }} />
    </section>
  );
}