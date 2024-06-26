'use client';
import { usePathname } from "next/navigation";
import PageHeader from "../PageHeader";
import huddleData from "@/data/huddle.json";
import { IPageHeader } from "./types";

export default function HuddlePageHeader() {
    let pageH: IPageHeader | null = null;

    const p = usePathname();
    const aspect = p.split("/").pop();

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

    return (
        <PageHeader
            title={
                <span className="lg-fs-128 fs-48 lg-lh-117 lh-43">
                    {pageH.title || pageH.text as string}
                </span>
            }
            image={pageH.image.src}
        />
    )
}