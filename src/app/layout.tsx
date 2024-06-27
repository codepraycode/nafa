import type { Metadata } from "next";
import siteData from "@/data/site.json";
import "@/styles/style.scss";
import Header from "@/components/Header";
import Footer from "../components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScreenIndicator from "@/components/ScreenIndicator";
import { DndContext } from "@dnd-kit/core";



export const metadata: Metadata = {
  title: siteData.siteTitle,
  description: siteData.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
            <body>
                <Header/>
                <ScreenIndicator />
                <main>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
  );
}
