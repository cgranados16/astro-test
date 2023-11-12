import { defineConfig } from "astro/config";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  vite: {
    ssr: {
      noExternal: ["@cgranados/material-web-library"],
    },
  },
});
