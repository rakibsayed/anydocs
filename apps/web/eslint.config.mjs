// apps/web/eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import sharedRules from "../../packages/config/eslint-preset.js"; // Shared rules

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Next.js defaults
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Your custom rules
  {
    rules: {
      ...sharedRules.rules,
      // Frontend-specific overrides
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "warn"
    },
    settings: {
      ...sharedRules.settings,
      // Next.js-specific settings
      next: {
        rootDir: "apps/web/"
      }
    }
  }
];