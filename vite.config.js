import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ourStory: resolve(__dirname, 'our-story.html'),
        ourProjects: resolve(__dirname, 'our-projects.html'),
        materialsBrands: resolve(__dirname, 'materials-brands.html'),
        contactUs: resolve(__dirname, 'contact-us.html'),
      }
    }
  }
});
