import { FiCode, FiLayers, FiTool, FiDatabase, FiUsers, FiClock, FiRefreshCw, FiEdit3 } from 'react-icons/fi'
import './Skills.css'

const Skills = () => {

  const skillsCategories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: <FiCode />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 70 },
      ]
    },

  ]

  const softSkills = [
    { name: 'Teamwork', icon: <FiUsers /> },
    { name: 'Time Management', icon: <FiClock /> },
    { name: 'Adaptability', icon: <FiRefreshCw /> },
    { name: 'Creativity', icon: <FiEdit3 /> },
  ]




  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-intro">
          <p>
            As a frontend developer, I leverage modern tools and frameworks to build
            responsive, user-friendly web applications. Here's a breakdown of my
            technical skills and proficiency levels.
          </p>
        </div>

        <div className="skills-grid">
          {skillsCategories.map(category => (
            <div key={category.id} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        data-level={skill.level}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        <div className="skill-category soft-skills-container">
            <div className="category-header">
              <div className="category-icon"><FiTool /></div>
              <h3>Professional Skills</h3>
            </div>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <div className="soft-skill-icon">
                    {skill.icon}
                  </div>
                  <h4 className="soft-skill-name">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills