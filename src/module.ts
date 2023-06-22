import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponentsDir,
  addServerHandler,
installModule,
} from "@nuxt/kit";
import { defu } from "defu";

// Module options TypeScript interface definition
export interface ModuleOptions {
  i18n: any;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "my-module",
    configKey: "myModule",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    i18n: {
      langDir: "lang",
      locales: [
        {
          code: "en",
          file: "en.json",
        },
      ],
    },
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    installModule('@nuxtjs/i18n', options.i18n);

    addComponentsDir({
      path: resolve("./runtime/components"),
    });

    nuxt.hook("vite:extendConfig", (config) => {
      // config.optimizeDeps = defu({ exclude: ["fsevents"] });
    });

    // addServerHandler({
    //   route: "/api/hi",
    //   handler: resolve("./runtime/server/api/hi.get"),
    // });
  },
});
