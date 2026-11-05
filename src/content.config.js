import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    period: z.string(),
    area: z.string(),
    summary: z.string(),
    order: z.number(),
    tools: z.array(z.string()),
    flow: z.array(z.string()),
    outcomes: z.array(z.object({ value: z.string(), label: z.string() })),
  }),
});

export const collections = { work };
