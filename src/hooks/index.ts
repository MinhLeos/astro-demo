import type { AstroIntegration } from "astro";

export default function testHooks(): AstroIntegration {
  return {
    name: "astro-hooks",
    hooks: {
      "astro:config:setup": ({ isRestart }) => {
        console.log('astro:config:setup: ');
      },
      "astro:config:done": ({ config }) => {
        console.log('astro:config:done: ');
      },
      "astro:server:setup": () => {
        console.log('astro:server:setup');
      },
      "astro:server:start": () => {
        console.log('astro:server:start');
      },
      "astro:server:done": () => {
        console.log('astro:server:done');
      },
      "astro:build:start": () => {
        console.log('astro:build:start');
      },
      "astro:build:setup": () => {
        console.log('astro:build:setup');
      },
      "astro:build:generated": () => {
        console.log('astro:build:generated');
      },
      "astro:build:ssr": () => {
        console.log('astro:build:ssr');
      },
      "astro:build:done": () => {
        console.log('astro:build:done');
      },
    },
  }
}