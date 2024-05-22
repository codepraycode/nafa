import { Space } from "nobox-client";
import { createRowSchema } from "../config";
import { BareArticle } from "../type";
import { articles as articleInitial } from "../initialData";
import { getBaseContentStructure } from "./base";



export const ArticleStructure: Space<BareArticle> = {
    space: "articles",
    description: "A Record Space for Nafa articles",
    initialData: articleInitial,
    structure: {
        ...getBaseContentStructure("Article"),
        image: {
            description: "Article image",
            type: String,
            required: true
        },
    }
}

export const ArticleModel = createRowSchema<BareArticle>(ArticleStructure);
