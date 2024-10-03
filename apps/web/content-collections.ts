import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { remarkGfm, remarkHeading, remarkStructure } from "fumadocs-core/mdx-plugins";


const blogs = defineCollection({
    name: "posts",
    directory: "content/blog",
    include: "*.mdx",
    schema: (z) => ({
        title: z.string(),
        description: z.string(),
        author_name: z.string(),
        author_image: z.string(),
        type: z.string(),
        date: z.string(),
        // tags: z.array(z.string()),
        image: z.string().optional(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            remarkPlugins: [remarkGfm, remarkHeading, remarkStructure],
        }
        );

        return {
            ...document,
            mdx,
            slug: document._meta.path,
            url: `/blog/${document._meta.path}`,
        };
    },
});

export default defineConfig({
    collections: [blogs],
});