import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://katsu30.github.io/',
});