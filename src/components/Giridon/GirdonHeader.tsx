'use client';
import { usePath } from "@/hooks/usePath";
import PageHeader from "../PageHeader";
import giridonData from "@/data/gridiron.json";



type PageHeaderType = typeof giridonData.pathways.header;

export default function GiridonHeader() {

    let data:PageHeaderType | null = null;

    const {recent} = usePath();


    switch(recent) {
        case 'gridiron-development-program':
            data = giridonData.pathways.header;
            break;
        case 'gridiron-guardians-program':
            data = giridonData.guidian.header;
            break;
        case 'gridiron-gems-program':
            data = giridonData.gems.header;
            break;
        default:
            break;
    }

    if (!data) {
        return <></>
    }

    return (
        <PageHeader
            title={data.title}
            image={data.image.src}
            text={data.text}
        />
    )
}