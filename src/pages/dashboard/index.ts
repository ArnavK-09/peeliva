// imports
import type { APIRoute } from "astro";

// GET /dashboard -> /dashboard/overview
export const GET = (async ({ redirect }) => {
  return redirect("/dashboard/overview");
}) as APIRoute;
