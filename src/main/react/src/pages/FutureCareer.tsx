import "./styling/Global.css";
import useGradientEffect from "./hooks/useGradientEffect.ts";
import Header from "../components/Header.tsx";
import About from "../components/About.tsx";
import hccHawkLogo from "../assets/ml6erdXe_400x400.png";

function FutureCareer() {
    useGradientEffect();

    const buttons = [
        { text: "Emerging Technologies", url: "/tech" },
    ];

    return (
        <div id="app">
            <Header
                headingText="Future Career"
                h2text="What I plan to do in the future"
                buttons={buttons}
            />
            <About
                h2Text="Job Title: Software Developer"
                paragraphText="Upon graduating from a University with my Bachelor's in Computer Science,
                I plan to become a Software Developer. I want to work for a company that is
                innovative and has a positive impact on the world. I want to work on projects
                that are challenging and that will help me grow as a developer."
                imgSrc={hccHawkLogo}
                imgAlt="HCC Logo"
            />
            <footer id="footer">
                <h1></h1>
            </footer>
        </div>
    );
}

export default FutureCareer;