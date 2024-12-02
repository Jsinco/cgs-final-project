import "./styling/Global.css";
import "./styling/EmergingTechnologies.css";
import useGradientEffect from "./hooks/useGradientEffect.ts";
import Header from "../components/Header.tsx";
import About from "../components/About.tsx";
import ktLogo from "../assets/ktlogo.png";

function EmergingTechnologies() {
    useGradientEffect();

    const buttons = [
        { text: "Works Cited", url: "/cites" },
    ];

    return (
        <div id="app">
            <Header
                headingText="Emerging Technology"
                h2text="What I think is the future of technology"
                buttons={buttons}
            />
            <About
                h2Text="Kotlin: The Future of App Development"
                paragraph={
                    <div>
                        <p>
                            Kotlin is a modern programming language created by JetBrains,
                            designed to be fully interoperable with Java and to address common programming challenges.
                            It has gained significant popularity, especially in the realm of Android app development,
                            but its use cases are expanding rapidly.
                        </p>
                        <br/>
                        <h1>Why Kotlin?</h1>
                        <p>
                            Kotlin is used for a variety of purposes such as Android app development, server-side
                            development,
                            and web development. It is known for its conciseness, safety, and versatility. As a
                            developer
                            I find these features extremely valuable, as they allow me to write clean, efficient code.
                        </p>
                        <br/>
                        <h1>Multiplatform</h1>
                        <p>
                            I believe multiplatform is the future of programming. Write once, run anywhere is
                            the ideal scenario for developers. Kotlin Multiplatform allows developers to write
                            code that can be compiled to run on multiple platforms, such as iOS, Android, JVM, and even Node.js.
                        </p>
                    </div>
                }
                imgContent={
                    <div>
                        <img src={ktLogo} alt="Kotlin Logo" className="ktLogo"/>
                    </div>
                }
            />
            <footer id="footer">
                <h1></h1>
            </footer>
        </div>
    );
}

export default EmergingTechnologies;