import "./styling/Global.css";
import "./styling/AcademicsBeyondHCC.css";

import useGradientEffect from "./hooks/useGradientEffect.ts";
import Header from "../components/Header.tsx";
import About from "../components/About.tsx";
import fauLogo from "../assets/Florida-Atlantic-Owls-Logo.png";

function AcademicsBeyondHCC() {
    useGradientEffect();

    const buttons = [
        { text: "Future Career", url: "/career" },
    ];

    return (
        <div id="app">
            <Header
                headingText="Beyond HCC"
                h2text="What comes after HCC"
                buttons={buttons}
            />
            <About
                h2Text="What comes after HCC"
                paragraphText="After graduating from HCC I plan to attend a proper University and obtain my
                Bachelor's degree in Computer Science. I have yet to decide on which University I will attend,
                but my current two choices are the University of South Florida and Florida Atlantic University."
                imgContent={
                    <img src={fauLogo} alt="React" className="fauLogo"/>
                }
            />
            <footer id="footer">
                <h1></h1>
            </footer>
        </div>
    );
}

export default AcademicsBeyondHCC;