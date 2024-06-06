

export type PageData = {
    title: string,
    paragraph: string[],
    text: string[],
    itemTitle?: string,
    items: PageDataItem[]
}

export type PageDataItem = {
    title: string,
    text: string,
    image: {
        src: string,
        width: number,
        height: number
    },
}

export interface PageDataItemHighlight extends PageDataItem {
    heading: string[],
    bg: string,
}
