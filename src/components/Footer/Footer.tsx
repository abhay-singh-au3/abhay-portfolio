import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'

export function Footer() {
    return (
        <Container className="footer">
            <a href="/" className="logo">
                <span>A</span>
                <span>Singh</span>
            </a>
            <div>
                <p>
                    This website was made with <img src={reactIcon} alt="React" /> with
                    <span>❤️</span>
                </p>
            </div>

            <div className="social-media">
                <a
                    href="#l"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedinIcon} alt="Linkedin" />
                </a>

                <a
                    href="#l"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={githubIcon} alt="GitHub" />
                </a>

                <a
                    href="#l"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagramIcon} alt="Instagram" />
                </a>

                <a
                    href="#l"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={discordIcon} alt="Discord" />
                </a>
            </div>
        </Container>
    )
}