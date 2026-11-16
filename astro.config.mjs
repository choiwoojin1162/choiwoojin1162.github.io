import { defineConfig } from 'astro/config';

const base = process.env.ASTRO_BASE || '/';

export default defineConfig({
  base,
  output: 'static',
  build: {
    assets: 'assets',
  },
});
