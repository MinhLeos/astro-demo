import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import customDirective from "./src/directives/index.ts";
import testHooks from "./src/hooks/index.ts";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),
  output: "server",
  extensions: {
    ".jsx": "react",
    ".tsx": "react",
    ".vue": "vue",
    ".svelte": "svelte",
    ".ts": "typescript",
  },
  integrations: [
    react(),
    vue(),
    svelte(),
    tailwind(),
    customDirective(),
    testHooks(),
  ],
  server: ({ command }) => ({ port: command === "dev" ? 3000 : 3001 }),
});
