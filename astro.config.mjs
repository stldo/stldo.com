// @ts-check
import cloudflare from "@astrojs/cloudflare";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { AnyChar } from "anychar";
import { defineConfig, svgoOptimizer } from "astro/config";

const anyChar = new AnyChar();

export default defineConfig({
  adapter: cloudflare(),

  devToolbar: { enabled: false },

  experimental: {
    svgOptimizer: svgoOptimizer({
      plugins: [
        { name: "cleanupIds", params: { minify: true, remove: true } },
        {
          name: "prefixIds",
          params: {
            delim: "",
            prefix: () => `svg-${anyChar.next()}`,
          },
        },
      ],
    }),
  },

  vite: {
    build: {
      assetsInlineLimit: 0,
    },

    plugins: [vanillaExtractPlugin()],

    resolve: {
      tsconfigPaths: true,
    },
  },
});
