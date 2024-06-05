import { defineConfig, s } from "velite";

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export default defineConfig({
  root: "./src/content",
  collections: {
    changes_en: {
      name: "Change_EN",
      pattern: "changelog/en/**/*.md",
      schema: s.object({
        title: s.string(),
        date: s.isodate(),
        content: s.markdown(),
      }),
    },
    changes_fr: {
      name: "Change_FR",
      pattern: "changelog/fr/**/*.md",
      schema: s.object({
        title: s.string(),
        date: s.isodate(),
        content: s.markdown(),
      }),
    },
    abouts_en: {
      name: "About_EN",
      pattern: "about/en/**/*.md",
      schema: s.object({
        title: s.string(),
        content: s.markdown(),
      }),
    },
    abouts_fr: {
      name: "About_FR",
      pattern: "about/fr/**/*.md",
      schema: s.object({
        title: s.string(),
        content: s.markdown(),
      }),
    },
  },
});
