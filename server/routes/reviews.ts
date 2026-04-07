import { Router, Request, Response } from "express";

const router = Router();

// ── In-memory cache ──────────────────────────────────────────────────────────
interface CacheEntry {
  data: GoogleReview[];
  timestamp: number;
}

interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}

let cache: CacheEntry | null = null;
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

// ── GET /api/reviews ─────────────────────────────────────────────────────────
router.get("/", async (_req: Request, res: Response) => {
  try {
    // Return cached data if fresh
    if (cache && Date.now() - cache.timestamp < CACHE_TTL_MS) {
      return res.json({ reviews: cache.data, cached: true });
    }

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return res.status(500).json({
        error: "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID in environment variables",
      });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&reviews_sort=newest&key=${apiKey}&language=en`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      return res.status(502).json({
        error: `Google Places API error: ${data.status}`,
        message: data.error_message || "",
      });
    }

    const allReviews: GoogleReview[] = data.result?.reviews || [];

    // Filter: only 5-star reviews with non-empty text
    const fiveStarReviews = allReviews.filter(
      (r) => r.rating === 5 && r.text && r.text.trim().length > 10
    );

    // Update cache
    cache = { data: fiveStarReviews, timestamp: Date.now() };

    return res.json({ reviews: fiveStarReviews, cached: false });
  } catch (err) {
    console.error("[reviews] fetch error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// ── POST /api/reviews/clear-cache — dev helper ───────────────────────────────
router.post("/clear-cache", (_req: Request, res: Response) => {
  cache = null;
  res.json({ message: "Cache cleared" });
});

export default router;