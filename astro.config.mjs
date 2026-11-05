import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://iamjhnwll-ux.github.io',
  integrations: [sitemap()],
});
