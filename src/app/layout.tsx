import type { Metadata } from "next";
import siteData from "@/data.json";
import "@/styles/style.scss";
import Header from "@/components/Header";
import Footer from "../components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



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
                <main>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
  );
}
