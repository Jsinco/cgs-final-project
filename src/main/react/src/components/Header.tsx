import doodleStar from '../assets/star-doodle.svg';
import './Header.css';

const logos = [doodleStar];

const placeLogos = (amount: number) => {
    for (let i = 0; i < amount; i++) {
        const logo = document.createElement('img');
        logo.src = logos[Math.floor(Math.random() * logos.length)];
        logo.className = 'logo';
        logo.style.top = `${Math.random() * 90}vh`;
        logo.style.left = `${Math.random() * 90}vw`;
        logo.style.width = `${Math.random() * 30 + 10}px`;
        logo.style.opacity = `${Math.random()}`;
        document.body.appendChild(logo);
    }
    return null;
}

interface ButtonProps {
    text: string;
    url: string;
}

interface HeaderProps {
    headingText: string;
    buttons?: ButtonProps[]; // Optional prop for buttons
    h2text?: string; // Optional prop for h2 text
}

function Header({ headingText, buttons, h2text }: HeaderProps) {
    return (
        <header>
            <section className="gradient-background">
                <div className="background__container">
                    <h1 className="background__heading">
                        <p>{headingText}</p>

                        {h2text && <h2 className="background__description">
                            {h2text}</h2>}
                    </h1>
                </div>
                {buttons && buttons.map((button, index) => (
                    <button key={index} onClick={() => window.location.href = button.url}>
                        {button.text}
                    </button>
                ))}
                <div className="logos-container">
                    {placeLogos(10)}
                </div>
            </section>
        </header>
    );
}

export default Header;

// {logos.map((logo, index) => (
//                         <img
//                             key={index}
//                             src={logo}
//                             alt={`logo-${index}`}
//                             className="logo"
//                             style={{
//                                 top: `${Math.random() * 100}vh`, // Random vertical position
//                                 left: `${Math.random() * 100}vw`, // Random horizontal position
//                                 width: `${Math.random() * 30 + 10}px`, // Random width between 10px to 40px
//                                 opacity: Math.random(), // Random opacity to make it feel more natural
//                             }}
//                         />
//                     ))}