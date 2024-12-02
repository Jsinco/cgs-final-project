import "./styling/Global.css";
import "./styling/Cites.css";

import useGradientEffect from "./hooks/useGradientEffect.ts";
import Header from "../components/Header.tsx";
import About from "../components/About.tsx";
import hccHawkLogo from "../assets/ml6erdXe_400x400.png";
import kotlinLogo from "../assets/kotlin-2.svg";

function Cites() {
    useGradientEffect();

    const buttons = [
        { text: "Back Home", url: "/" },
    ];

    return (
        <div id="app">
            <Header
                headingText="Cites"
                h2text="Cited Sources"
                buttons={buttons}
            />
            <About
                paragraph={
                    <div>
                        <h1>Works Cited</h1>
                        <h2>The Kotlin Programming Language</h2>
                        <p><a href="https://kotlinlang.org/" target="_blank"
                              rel="noopener noreferrer">kotlinlang.org</a></p>
                        <h2>Computer Information Technology AS</h2>
                        <p><a
                            href="https://www.hccfl.edu/academics/subjects/information-technology/computer-information-technology"
                            target="_blank" rel="noopener noreferrer">hccfl.edu</a></p>
                    </div>
                }
                imgContent={
                    <div>
                        <br/>
                        <img src={kotlinLogo} alt="Kotlin Logo" className="kotlinLogo"/>
                        <div className="main__img--card">
                            <img src={hccHawkLogo} alt="HCC Logo" className="hccLogo"/>
                        </div>
                    </div>
                }
            />
            <footer id="footer">
                <h1></h1>
            </footer>
        </div>
    );
}

export default Cites;