// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  tie : 'leo5869.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
