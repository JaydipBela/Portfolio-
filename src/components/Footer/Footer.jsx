import { FiGithub, FiLinkedin, FiMessageCircle, FiHeart } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear()

  // Social links
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile', label: 'LinkedIn' },
    { icon: <FiMessageCircle />, url: 'mailto:contact@example.com', label: 'Message' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">Jaydip Bela</span>
            <p className="tagline">Building Modern Web Experiences</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Connect</h3>
            <div className="social-icons">
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
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Jadyip Bela. All Rights Reserved.
          </p>
          <p className="made-with">
            Made with <FiHeart className="heart-icon" /> in React.js
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer