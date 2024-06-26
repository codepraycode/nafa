import Partners from "@/components/Home/Partners";
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


            {children}
            

            <Partners/>
        </>
    )
}
