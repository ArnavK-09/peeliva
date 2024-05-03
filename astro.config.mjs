import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  output: "static",
  site: "https://arnavk-09.github.io",
  base: "peeliva",
  integrations: [
    solidJs(),
    UnoCSS({
      injectReset: true,
    }),
  ],
});
