import Partners from "@/components/Home/Partners";
import HuddlePageContent from "@/components/Huddle/PageMenuContent";
import {metadata as MainMeta} from "@/app/layout";
import { Metadata } from "next";
import HuddlePageHeader from "@/components/Huddle/PageHeader";


export const metadata: Metadata = {
  ...MainMeta
};

export default function DashboardLayout({children}: {
  children: React.ReactNode
}) {
    return (
        <>
            <HuddlePageHeader />


            <HuddlePageContent />
            

            <Partners/>
        </>
    )
}
