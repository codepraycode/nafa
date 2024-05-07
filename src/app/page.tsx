import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import KickOff from "@/components/Home/KickOff";
import MV from "@/components/Home/MV";
import Partners from "@/components/Home/Partners";
import RG from "@/components/Home/RG";
import LiveScores from "@/components/Home/Scores";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <KickOff />
            <LiveScores />
            <RG />
            <MV />
            <Partners />
        </>
    );
}
