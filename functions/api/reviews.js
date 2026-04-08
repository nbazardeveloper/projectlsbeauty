export async function onRequest(context) {
  const apiKey = context.env.VITE_GOOGLE_PLACES_API_KEY;
  const placeId = context.env.VITE_GOOGLE_PLACE_ID;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&reviews_sort=newest&key=${apiKey}&language=en`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== "OK") {
    return new Response(JSON.stringify({ error: data.error_message }), {
      status: 502,
      headers: { "Content-Type": "application/json" }
    });
  }

  const reviews = (data.result?.reviews || []).filter(
    (r) => r.rating === 5 && r.text?.trim().length > 10
  );

  return new Response(JSON.stringify({ reviews }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  });
}