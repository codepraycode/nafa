import { Space } from "nobox-client";
import { createRowSchema } from "../config";
import { Blog } from "../type";
import { getBaseContentStructure } from "./base";



export const BlogStructure: Space<Blog> = {
    space: "blogs",
    description: "A Record Space for Nafa blogs",
    structure: {
        ...getBaseContentStructure("Blog"),
        summary: {
            description: "Blog summary",
            type: String,
            required: false,
        },
        likes: {
            description: "Blog likes",
            type: Number,
            required: false,
            defaultValue: 0
        },
        comments: {
            description: "Blog comments",
            type: Object,
        },
        publishedAt: {
            description: "Blog's creation date",
            type: String,
        },
    }
}

export const BlogModel = createRowSchema<Blog>(BlogStructure);
