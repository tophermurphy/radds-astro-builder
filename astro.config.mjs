import { defineConfig } from 'astro/config';
import payloadColorsSCSS from './plugins/vite-plugin-payload-scss-colors';
import purgecss from "astro-purgecss";

import sitemap from "@astrojs/sitemap";
import dotenv from 'dotenv'

dotenv.config({ path:  `./.env.${process.env.NODE_ENV}`});

console.log('nodeenv', process.env)

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL,
  integrations:[sitemap()],
  vite: {
    plugins: [payloadColorsSCSS()],
    css: {
      preprocessorOptions: {
        scss: {
          //? Is there a better way todo this with @use or @forward. They are not working now.
          additionalData: `
          @import "node_modules/bootstrap/scss/_functions.scss";
          @import "src/styles/_custom_color_variables.scss";
          @import "node_modules/bootstrap/scss/_variables.scss"; 
          @import "node_modules/bootstrap/scss/_variables-dark.scss";
          @import "src/styles/_custom_color_maps.scss";
          @import "node_modules/bootstrap/scss/_maps.scss";
          @import "node_modules/bootstrap/scss/_mixins.scss";
                    `
        }
      }
    }
  },
  integrations: [purgecss(), sitemap()]
});
