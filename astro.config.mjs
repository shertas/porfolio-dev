// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://shertas.github.io",
  base: "/porfolio-dev/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
