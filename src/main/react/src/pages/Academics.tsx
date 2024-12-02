import "./styling/Global.css";
import useGradientEffect from "./hooks/useGradientEffect.ts";
import Header from "../components/Header.tsx";
import About from "../components/About.tsx";
import hccHawkLogo from "../assets/ml6erdXe_400x400.png";

function Academics() {
    useGradientEffect();

    const buttons = [
        { text: "Academics Beyond HCC", url: "/beyondhcc" },
    ];

    return (
        <div id="app">
            <Header
                headingText="Academics"
                h2text="What I'm doing in school"
                buttons={buttons}
            />
            <About
                h2Text="Majoring in Computer Science"
                h1Text="Graduating 2026 for my Associates"
                paragraphText="I am currently attending Hillsborough Community College and majoring in Computer Science. I plan to graduate in 2026 with my Associates in Science. I am taking classes that will help me transfer to a University and earn my Bachelor's in Computer Science.
                I'll be taking a variety of classes including CGS 1000, COP 1000, and MAC 1105."
                imgSrc={hccHawkLogo}
                imgAlt="HCC Logo"
            />
            <footer id="footer">
                <h1></h1>
            </footer>
        </div>
    );
}

export default Academics;