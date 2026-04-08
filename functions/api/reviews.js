export async function onRequest(context) {
  const apiKey = context.env.VITE_GOOGLE_PLACES_API_KEY;
  const placeId = context.env.VITE_GOOGLE_PLACE_ID;

  // Лог для дебага
  if (!apiKey || !placeId) {
    return new Response(JSON.stringify({ 
      error: "Missing env variables",
      hasKey: !!apiKey,
      hasPlaceId: !!placeId
    }), {
      headers: { "Content-Type": "application/json" }
    });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,name&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  // Возвращаем весь ответ Google как есть для дебага
  return new Response(JSON.stringify(data), {
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}