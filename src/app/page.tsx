import About from "@/components/Home/About";
import Articles from "@/components/Home/Articles";
import Hero from "@/components/Home/Hero";
import KickOff from "@/components/Home/KickOff";
import MV from "@/components/Home/MV";
import Partners from "@/components/Home/Partners";
import Projects from "@/components/Home/Projects";
import RG from "@/components/Home/RG";
import LiveScores from "@/components/Home/Scores";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <KickOff />
            <LiveScores />
            <Articles />
            <RG />
            <MV />
            <Projects />
            <Partners />
        </>
    );
}
