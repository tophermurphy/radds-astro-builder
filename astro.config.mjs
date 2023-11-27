import { defineConfig } from 'astro/config';
import payloadColorsSCSS from './plugins/vite-plugin-payload-scss-colors';
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://radds-astro.pages.dev",
  vite: {
    plugins: [payloadColorsSCSS()],
    css: {
      preprocessorOptions: {
        scss: {
          //? Is there a better way todo this with @use or @forward. They are not working now.
          additionalData: `
                    @import "node_modules/bootstrap/scss/_functions.scss";
                    @import "src/styles/variables.scss";
                    @import "node_modules/bootstrap/scss/_variables.scss"; 
                    @import "node_modules/bootstrap/scss/_variables-dark.scss"; 
                    @import "node_modules/bootstrap/scss/_maps.scss";
                    @import "node_modules/bootstrap/scss/_mixins.scss";
                    `
        }
      }
    }
  },
  integrations: [purgecss()]
});

//? May or may not need these

// @import "@bootstrap/scss/root";
// @import "@bootstrap/scss/utilities";
// @import "@bootstrap/scss/reboot";
// @import "@bootstrap/scss/type";
// @import "@bootstrap/scss/images";
// @import "@bootstrap/scss/containers";
// @import "@bootstrap/scss/grid";
// @import "@bootstrap/scss/helpers";
// @import "@bootstrap/scss/utilities/api";