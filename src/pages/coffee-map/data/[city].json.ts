import type { APIRoute } from "astro";
import { coffeeCityGuides } from "../../../data/coffeeShops";

export function getStaticPaths() {
  return coffeeCityGuides.map((city) => ({
    params: { city: city.id },
  }));
}

export const GET = (({ params }) => {
  const city = coffeeCityGuides.find((option) => option.id === params.city);

  if (!city) {
    return new Response(null, { status: 404 });
  }

  return new Response(JSON.stringify(city), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}) satisfies APIRoute;
