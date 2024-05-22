import { ReturnObject } from "nobox-client";

export interface BareArticle {    
    title: string;
    image: string,
    content: string;
    slug: string;
    author?: string;
    tags?: string[];
    createdAt: String | Date;
    updatedAt?: String | Date;
}

export type ArticleItem = ReturnObject<BareArticle>;
