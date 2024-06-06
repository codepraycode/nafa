'use client';
import { usePathname } from "next/navigation";
import PageHeader from "../PageHeader";
import huddleData from "@/data/huddle.json";
import { PageData, IPageHeader } from "./types";

export default function HuddlePageHeader() {
    let pageH: IPageHeader | null = null;

    const p = usePathname();
    // console.log(p.split("/").pop());
    const aspect = p.split("/").pop();

    // console.log(aspect);

    const sections = huddleData.sections;

    for (let e of sections){
        if (!e) continue;

        if (e.text.toLowerCase() === aspect?.toLowerCase()) {
            pageH = e;
            break;
        }
    }

    if (!pageH) {
        pageH = huddleData.header;
    }


    console.log(pageH);

    return (
        <PageHeader
            title={pageH.title || pageH.text as string}
            image={pageH.image.src}
        />
    )
}