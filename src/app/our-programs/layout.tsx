import Partners from "@/components/Home/Partners";
import {metadata as MainMeta} from "@/app/layout";
import { Metadata } from "next";
import GiridonHeader from "@/components/Giridon/GirdonHeader";
import Section from "@/components/UI/Section";
import ExpoloreItems from "@/components/ExploreItems";
import giridonData from "@/data/gridiron.json";


export const metadata: Metadata = {
  ...MainMeta
};

export default function DashboardLayout({children}: {
  children: React.ReactNode
}) {
    return (
        <>
            <GiridonHeader />

            <Section name="page-content">
                {children}
                <ExpoloreItems
                    title={giridonData.itemTitle}
                    data={giridonData.items}
                />
            </Section>
            

            <Partners/>
        </>
    )
}
