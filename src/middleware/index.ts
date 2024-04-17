import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((_ctx, next) => {
  return next();
});
