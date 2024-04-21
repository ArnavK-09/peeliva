import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import node from "@astrojs/node";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    solidJs(),
    UnoCSS({
      injectReset: true,
    }),
  ],
});
