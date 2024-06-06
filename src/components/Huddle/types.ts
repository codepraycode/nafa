

type Image = {
    src: string,
    width: number,
    height: number
}

export type IPageHeader = {
    text?: string,
    title?: string,
    image: Image,
}

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
    image: Image,
}

export interface PageDataItemHighlight extends PageDataItem {
    heading: string[],
    bg: string,
}
