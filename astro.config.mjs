import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import customDirective from './src/directives/index.ts';

// https://astro.build/config
export default defineConfig({
  extensions: {
    '.jsx': 'react',
    '.tsx': 'react',
    '.vue': 'vue',
    '.svelte': 'svelte'
  },
  integrations: [react(), vue(), svelte(), tailwind(), customDirective()],
  server: ({command}) => ({port: command === 'dev' ? 3000 : 3001})
});