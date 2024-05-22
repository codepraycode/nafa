import { Content } from "../type";

export const getBaseContentStructure = (prefix:string) =>({
    title: {
        description: `${prefix} title`,
        type: String,
        required: true
    },
    content: {
        description: `${prefix} content`,
        required: true,
        type: String,
    },
    slug: {
        description: `${prefix} slug`,
        required: true,
        type: String,
    },
    author: {
        description: `${prefix}'s author`,
        type: String,
        defaultValue: "Nafa",
        required: false,
    },
    tags: {
        description: `${prefix} tags`,
        required: false,
        type: Array,
    },
    createdAt: {
        description: `${prefix}'s creation date`,
        type: String,
    },
    updatedAt: {
        description: `${prefix}'s last update date`,
        type: String,
    }
}
)