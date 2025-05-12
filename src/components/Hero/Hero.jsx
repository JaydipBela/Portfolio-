import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMessageCircle, FiArrowDown } from 'react-icons/fi'
import './Hero.css'
import images from '../../assets/Images.js'

const Hero = () => {

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile', label: 'LinkedIn' },
    { icon: <FiMessageCircle />, url: 'mailto:jaydipbela1625@gmail.com', label: 'Message' }
  ]



  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="greeting">
            Hello, I'm
          </span>

          <h1 className="name">
           Jaydip Bela
          </h1>

          <div className="title-wrapper">
            <h2 className="title">
              <span className="title-prefix">Frontend</span> Developer
              <span className="cursor"></span>
            </h2>
          </div>

          <p className="description">
            I build engaging, responsive web applications with React.js.
            Passionate about creating intuitive user experiences and clean, maintainable code.
          </p>

          <div className="cta-buttons">
            <Link
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary"
            >
              View My Work
            </Link>

            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-secondary"
            >
              Contact Me
            </Link>
          </div>

          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="social-icon"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image dark">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="image-wrapper">
              <img src={images.Profile} alt="Developer Portrait" />
            </div>
          </div>
        </div>
      </div>

      {/* <Link
        to="skills"
        smooth={true}
        offset={-70}
        duration={500}
        className="scroll-down"
      >
        <FiArrowDown />
      </Link> */}
    </section>
  )
}

export default Hero