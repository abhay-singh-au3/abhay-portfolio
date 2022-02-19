import { Container } from "./styles";

import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
    return (
        <Container id="about">
            <div className="about-text">
                <ScrollAnimation animateIn="fadeInLeft">
                    <h2>About me</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
                    <p>Experienced software engineer based in mumbai with a background in building and integrating Loyalty Management System and ChatBots for various brands. </p>
                </ScrollAnimation>
                {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta error ut numquam possimus eius dolorum voluptate ad nam assumenda minima, sint rem, quos blanditiis expedita quasi distinctio! Natus, non!</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nemo quasi, ipsam minus asperiores at doloremque magni labore, perspiciatis impedit dolorum ab atque mollitia excepturi animi nisi deserunt dicta expedita?</p>
                </ScrollAnimation> */}

                <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
                    <h3>Here are my main skills:</h3>
                </ScrollAnimation>
                <div className="hard-skills">

                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                            <img src={reactIcon} alt="React" />
                        </ScrollAnimation>
                    </div>

                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
                            <img src={jsIcon} alt="JavaScript" />
                        </ScrollAnimation>
                    </div>

                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
                            <img src={htmlIcon} alt="Html" />
                        </ScrollAnimation>
                    </div>

                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
                            <img src={cssIcon} alt="Css" />
                        </ScrollAnimation>
                    </div>
                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
                            <img src={nodeIcon} alt="Node" />
                        </ScrollAnimation>
                    </div>

                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
                            <img src={typescriptIcon} alt="Typescript" />
                        </ScrollAnimation>
                    </div>


                </div>
            </div>
            <div className="about-image">
                <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
                {/* TODO: Changes image url later */}
                    <img src="https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png" alt="Profile" />
                </ScrollAnimation>
            </div>
        </Container>
    )
}