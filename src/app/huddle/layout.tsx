import Partners from "@/components/Home/Partners";
import PageContent from "@/components/Huddle/PageMenuContent";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/UI/Section";
import huddleData from "@/data/huddle.json";
import {metadata as MainMeta} from "@/app/layout";
import { Metadata } from "next";


export const metadata: Metadata = {
  ...MainMeta
};

export default function DashboardLayout({children}: {
  children: React.ReactNode
}) {
    return (
        <>
            <PageHeader
                title={huddleData.header.title}
                image={huddleData.header.image.src}
            />


            <Section name="page-content">
                {/* { children } */}
                <PageContent />
            </Section>

            <Partners/>
        </>
    )
}
