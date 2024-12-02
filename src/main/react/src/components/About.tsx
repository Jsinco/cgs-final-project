import { ReactNode } from 'react';

interface AboutPropsWithImgSrc {
    h2Text: string;
    h1Text?: string;
    paragraphText?: string;
    paragraph?: ReactNode;
    imgSrc: string;
    imgAlt: string;
}

interface AboutPropsWithImgContent {
    h2Text?: string;
    h1Text?: string;
    paragraphText?: string;
    paragraph?: ReactNode;
    imgContent: ReactNode;
}

interface AboutPropsWithParagraphNode {
    h2Text: string;
    h1Text?: string;
    paragraphText?: string;
    paragraph: ReactNode;
    imgContent: ReactNode;
}

type AboutProps = AboutPropsWithImgSrc | AboutPropsWithImgContent | AboutPropsWithParagraphNode;

function About({ h2Text, h1Text, paragraphText, paragraph, ...props }: AboutProps) {
    return (
        <>
            <div className="main" id="about">
                <div className="main__container">
                    <div className="main__content">
                        <h2>{h2Text && h2Text}</h2>
                        <br/>
                        <h1>{h1Text && h1Text}</h1>
                        {paragraph ? paragraph : <p>{paragraphText}</p>}
                    </div>
                    <div className="main__img--container">
                        {'imgSrc' in props ? (
                            <img src={props.imgSrc} alt={props.imgAlt} className="main__img--card" />
                        ) : (
                            props.imgContent
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;