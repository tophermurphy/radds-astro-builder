import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @import "@bootstrap/scss/_functions.scss";
                    @import "src/styles/variables.scss";
                    @import "@bootstrap/scss/_variables.scss"; 
                    @import "@bootstrap/scss/_variables-dark.scss"; 
                    @import "@bootstrap/scss/_maps.scss";
                    @import "@bootstrap/scss/_mixins.scss";
                    @import "@bootstrap/scss/root";
                    @import "@bootstrap/scss/utilities";
                    @import "@bootstrap/scss/reboot";
                    @import "@bootstrap/scss/type";
                    @import "@bootstrap/scss/images";
                    @import "@bootstrap/scss/containers";
                    @import "@bootstrap/scss/grid";
                    @import "@bootstrap/scss/helpers";
                    @import "@bootstrap/scss/utilities/api";
                    `,
                }
            }
        }
    }
});
