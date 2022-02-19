import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
    return (
        <Container id="portfolio">
            <h2>My portfolio</h2>

            <div className="projects">

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <div className="project-links">
                                <a href="#s" target="_blank" rel="noreferrer">
                                    <img src={githubIcon} alt="GitHub" />
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Placeholder title</h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ex possimus dolores et voluptas recusandae labore omnis magnam vero totam cumque officia beatae suscipit exercitationem laboriosam voluptate amet harum. Dolore.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <div className="project-links">
                                <a href="#a" target="_blank" rel="noreferrer">
                                    <img src={githubIcon} alt="GitHub" />
                                </a>
                                <a href="#a" target="_blank" rel="noreferrer">
                                    <img src={externalLinkIcon} alt="Visitar site" />
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Placeholder</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam a soluta aliquam quam quod, iusto nisi error voluptas modi! Rem rerum optio eos reiciendis repellendus, officiis dolorum? Minima, facere!
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <div className="project-links">
                                <a href="https://joaotuliojt.github.io/sunnyside-agency/" target="_blank" rel="noreferrer">
                                    <img src={externalLinkIcon} alt="Visitar site" />
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Placeholder</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto est ex officia dolorum numquam quis quia sequi recusandae accusantium laborum quisquam natus accusamus eaque mollitia non aut, atque itaque!
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <div className="project-links">
                                <a href="#s" target="_blank" rel="noreferrer">
                                    <img src={externalLinkIcon} alt="Visiter site" />
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Placeholder</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid vel hic, ratione amet cumque adipisci unde tenetur ipsum qui, doloremque dicta similique animi laudantium minima delectus, necessitatibus quas dolor corporis.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <div className="project-links">
                                <a href="#r" target="_blank" rel="noreferrer">
                                    <img src={githubIcon} alt="Visitar site" />
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Placeholder</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem voluptatibus nesciunt totam rerum, culpa sequi unde molestiae alias architecto commodi tenetur soluta dolore odio excepturi quasi distinctio iure id.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <div className="project-links">
                                <a href="#e" target="_blank" rel="noreferrer">
                                    <img src={githubIcon} alt="Visiter site" />
                                </a>
                                <a href="#e" target="_blank" rel="noreferrer">
                                    <img src={externalLinkIcon} alt="Visiter site" />
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Placeholder</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quod doloribus quasi, corporis officiis, officia consequatur ullam laborum dicta soluta sint sapiente similique ratione sit qui cupiditate libero eum dolorum.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                                <li>Placeholder</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>



            </div>
        </Container>
    );
}