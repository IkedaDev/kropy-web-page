// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(), // 👈 2. La registramos aquí para levantar el módulo virtual 'virtual:astro-icon'
  ],
});
