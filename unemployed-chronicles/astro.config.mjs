import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import storyblok from "@storyblok/astro";
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    vue(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        blogPost: 'storyblok/BlogPost',
      },
      apiOptions: {
        // Choose Storyblok Space Region
        region: 'us',
      }
    })
  ]
});