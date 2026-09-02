import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const GENERATE_ID_REGEX = /\/index\.(?:md|yaml)$|\.(?:md|yaml)$/;

const layouts = defineCollection({
  loader: glob({
    base: "src/content/layouts",
    generateId: ({ entry }) => entry.replace(GENERATE_ID_REGEX, ""),
    pattern: "**/*.(md|yaml)",
  }),
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

const screens = defineCollection({
  loader: glob({
    base: "src/content/screens",
    generateId: ({ entry }) => entry.replace(GENERATE_ID_REGEX, ""),
    pattern: "**/*.(md|yaml)",
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    content: z
      .object({
        items: z.array(
          z.object({ label: z.string(), level: z.literal([1, 2, 3, 4, 5]) }),
        ),
      })
      .or(z.object({ action: z.object({ label: z.string() }) }))
      .or(
        z.object({
          deprecatedTitle: z.string(),
          githubUser: z.string(),
          selfDescription: z.string(),
        }),
      )
      .or(
        z.object({
          email: z.string(),
          message: z.string(),
          name: z.string(),
          submit: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { layouts, screens };
