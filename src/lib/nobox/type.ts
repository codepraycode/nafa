import { ReturnObject } from "nobox-client";

export interface Content {
    title: string;
    author?: string;
    content: string;
    slug: string;
    tags?: string[];
    createdAt: String | Date;
    updatedAt?: String | Date;
}

export interface BareArticle extends Content {
    image: string,
}


export interface Blog extends Content {  
  summary?: string; // Optional short summary of the blog post
  publishedAt?: Date; // Optional field for the published date
  likes?: number; // Optional field to store the number of likes
  comments?: Comment[]; // Optional array to store comments
}


interface Comment {
  userId: string;
  userName: string;
  content: string;
  createdAt: Date;
}



export type ArticleItem = ReturnObject<BareArticle>;
export type BlogItem = ReturnObject<Blog>;
