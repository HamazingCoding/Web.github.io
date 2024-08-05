import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // 'https://<your-github-account>.github.io'
  site: 'https://HamazingCoding-github.io'
});