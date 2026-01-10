import React from 'react'
import './About.css'
import pro_img from '../../../assets/profile.jpeg'

const About = () => {
  const skills = [
    { name: 'HTML & CSS', percent: 95 },
    { name: 'JavaScript', percent: 92 },
    { name: 'React JS', percent: 95 },
    { name: 'Node JS & Express JS', percent: 90 },
    { name: 'MongoDB & SQL', percent: 90 },
    { name: 'Git & GitHub', percent: 90 },
  ]

  return (
    <section id="about" className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
        <div className="header-underline"></div>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={pro_img} alt="Profile" />
        </div>

        <div className="about-details">
          <p>
            I’m a Full Stack Developer passionate about creating responsive,
            dynamic, and scalable web applications. I enjoy solving real-world
            problems using clean, efficient code with a focus on both frontend
            and backend technologies.
          </p>

          <div className="skill-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <span className="skill-name">{skill.name}</span>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>

                <span className="skill-percent">{skill.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
