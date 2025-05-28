import { FiDownload, FiUser, FiMail, FiMapPin, FiCalendar } from 'react-icons/fi'
import './About.css'
import images from '../../assets/Images.js'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const personalInfo = [
    { icon: <FiUser />, label: 'Name', value: 'Jaydip Bela' },
    { icon: <FiCalendar />, label: 'Experience', value: 'Fresher' },
    { icon: <FiMapPin />, label: 'Location', value: 'Amroli, Surat' },
    { icon: <FiMail />, label: 'Email', value: 'jaydipbela1625@gmail.com' },
  ]


  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'VNSGU',
      year: '2022 - 2025',
      description: 'Graduated with honors. Coursework focused on web development.'
    }
  ]


  const experience = [
    {
      position: 'Frontend Developer Intern',
      company: 'Tech Solutions Inc.',
      year: 'Summer 2022',
      description: 'Worked on developing responsive web applications using React.js. Collaborated with the design team to implement UI components.'
    }
  ]

useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 50%",
      toggleActions: "play none none none"
    }
  });

  tl.fromTo('.about .section-title',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6 }
  )
    .fromTo('.about-content',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo('.about-image img',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6 },
      "-=0.3"
    )
    .fromTo('.about-text',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo('.personal-info',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo('.resume-btn',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo('.qualifications',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo('.tabs-container',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo('.education',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
    .fromTo('.experience',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    )
  
   
}, []);

useEffect(() => {
  ScrollTrigger.refresh();
}, []);


  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-image">
            <img  src={images.Profile}
              alt="John Doe Portrait"
            />
          </div>

          <div className="about-text">
            <h3>Frontend React Developer</h3>

            <p>
              Hello! I'm Jadyip, a passionate frontend developer specializing in React.js.
              I'm enthusiastic about creating intuitive and responsive web applications
              that provide excellent user experiences.
            </p>

            <p>
              As a fresh graduate, I bring a modern approach to web development,
              staying updated with the latest trends and best practices in the industry.
              I'm eager to contribute to innovative projects and continue growing my skills
              in a professional environment.
            </p>

            <div className="personal-info">
              {personalInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">
                    {info.icon}
                  </div>
                  <div className="info-text">
                    <span className="info-label">{info.label}:</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="resume-btn">
              <a href="/assets/resume.pdf" className="btn btn-primary">
                <FiDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="qualifications">
          <div className="tabs-container">
            <div className="tabs">
              <button className="tab-btn active">Education</button>
              <button className="tab-btn">Experience</button>
            </div>

            <div className="tab-content">
              <div className="education">
                <div className="timeline">
                  {education.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h4>{item.degree}</h4>
                        <div className="timeline-place">{item.institution}</div>
                        <div className="timeline-date">{item.year}</div>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="experience" style={{ display: 'none' }}>
                <div className="timeline">
                  {experience.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h4>{item.position}</h4>
                        <div className="timeline-place">{item.company}</div>
                        <div className="timeline-date">{item.year}</div>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About