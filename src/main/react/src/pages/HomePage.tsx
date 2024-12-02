import "./styling/Global.css";
import "./styling/Home.css";
import Header from "../components/Header.tsx";
import About from "../components/About.tsx";
import useGradientEffect from "./hooks/useGradientEffect.ts";
import reactLogo from "../assets/react.svg";
import viteLogo from '/vite.svg';
import tsLogo from "../assets/Typescript_logo_2020.svg";

function HomePage() {
    useGradientEffect();

    const buttons = [
        { text: "Academics", url: "/academics" },
    ];

    return (
        <div id="app">
            <Header headingText="Welcome" buttons={buttons} h2text="Scroll for more Information" />
            <About
                h2Text="CGS-100 Final Project Site"
                paragraphText="Written with React + Vite + TypeScript.
                This site is a mockup of a site that would be used for an about me website.
                Navigate to other pages by clicking 'Academics' above."
                imgContent={
                    <div className="main__img--card">
                        <img src={reactLogo} alt="React" className="reactLogo"/>
                        <img src={viteLogo} alt="React" className="reactLogo"/>
                        <img src={tsLogo} alt="React" className="reactLogo"/>
                    </div>
                }
            />
            <footer id="footer">
                <h1></h1>
            </footer>
        </div>
    );
}

export default HomePage;