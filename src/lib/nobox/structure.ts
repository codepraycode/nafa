import { Space } from "nobox-client";
import { createRowSchema } from "./config";
import { BareArticle } from "./type";
import { articles as articleInitial } from "./initialData";



export const ArticleStructure: Space<BareArticle> = {
    space: "articles",
    description: "A Record Space for Nafa articles",
    initialData: articleInitial,
    structure: {
        title: {
            description: "Article title",
            type: String,
            required: true
        },
        image: {
            description: "Article image",
            type: String,
            required: true
        },
        content: {
            description: "Article content",
            required: true,
            type: String,
        },
        slug: {
            description: "Article slug",
            required: true,
            type: String,
        },
        author: {
            description: "Article's author",
            type: String,
            defaultValue: "Nafa",
            required: false,
        },
        tags: {
            description: "Article tags",
            required: false,
            type: Array,
        },
        createdAt: {
            description: "Article's creation date",
            type: String,
        }
    }
}

export const ArticleModel = createRowSchema<BareArticle>(ArticleStructure);
