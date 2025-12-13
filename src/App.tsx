import { useState } from 'react'
import type { ReactNode } from 'react'
import './App.css'
import {
  contact,
  education,
  experiences,
  hero,
  publications,
  skills,
} from './data/profile'
import { LinkedInIcon, EmailIcon, PhoneIcon, GitHubIcon, LeetCodeIcon, StratascratchIcon, GoogleScholarIcon } from './components/Icons'
import { SkillIcon } from './components/SkillIcons'

function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

function Navbar() {
  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Publications', href: '#publications' },
    { label: 'Education', href: '#education' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#" className="navbar-logo" onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
          <span className="navbar-logo-icon">G</span>
        </a>
        <div className="navbar-right">
          <div className="navbar-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a 
            href="/guramritpal_resume.pdf" 
            download
            className="navbar-resume-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

function ExperienceItem({ experience, index, total }: { experience: typeof experiences[0]; index: number; total: number }) {
  const [isExpanded, setIsExpanded] = useState(index === 0)

  return (
    <div className="chain-item">
      <div className="chain-connector">
        {index < total - 1 && <div className="chain-line"></div>}
        <div className="chain-node"></div>
      </div>
      <div className="chain-content">
        <div 
          className={`chain-header ${isExpanded ? 'expanded' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="chain-header-main">
            <div>
              <h3>{experience.role}</h3>
              {experience.companyUrl ? (
                <a 
                  href={experience.companyUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="chain-company"
                  onClick={(e) => e.stopPropagation()}
                >
                  {experience.company}
                  <span className="link-arrow">↗</span>
                </a>
              ) : (
                <p className="chain-company">{experience.company}</p>
              )}
            </div>
            <p className="chain-location">{experience.location}</p>
          </div>
          <div className="chain-header-meta">
            <span className="chain-period">{experience.period}</span>
            <button className="expand-btn" aria-label={isExpanded ? 'Collapse' : 'Expand'}>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className={isExpanded ? 'expanded' : ''}
              >
                <path d="M5 7.5 L10 12.5 L15 7.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className={`chain-details ${isExpanded ? 'expanded' : ''}`}>
          <ul className="chain-bullets">
            {experience.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
          <div className="chain-tags">
            {experience.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main className="page">
        <header className="hero">
        <h1>{hero.name}</h1>
        <h2>{hero.title}</h2>
        <p className="hero-summary">{hero.summary[0]}</p>
        <div className="hero-icons">
          <a 
            href={contact.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="icon-link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={22} />
          </a>
          <a 
            href={`mailto:${contact.email}`}
            className="icon-link"
            aria-label="Email"
          >
            <EmailIcon size={22} />
          </a>
          <a 
            href={`tel:${contact.phone}`}
            className="icon-link"
            aria-label="Phone"
          >
            <PhoneIcon size={22} />
          </a>
          <a 
            href={contact.github} 
            target="_blank" 
            rel="noreferrer" 
            className="icon-link"
            aria-label="GitHub"
          >
            <GitHubIcon size={22} />
          </a>
          <a 
            href={contact.leetcode} 
            target="_blank" 
            rel="noreferrer" 
            className="icon-link"
            aria-label="LeetCode"
          >
            <LeetCodeIcon size={22} />
          </a>
          <a 
            href={contact.stratascratch} 
            target="_blank" 
            rel="noreferrer" 
            className="icon-link"
            aria-label="Stratascratch"
          >
            <StratascratchIcon size={22} />
          </a>
          <a 
            href={contact.scholar} 
            target="_blank" 
            rel="noreferrer" 
            className="icon-link"
            aria-label="Google Scholar"
          >
            <GoogleScholarIcon size={22} />
          </a>
        </div>
      </header>

      <Section id="experience" title="Experience">
        <div className="chain">
          {experiences.map((experience, index) => (
            <ExperienceItem 
              key={`${experience.company}-${experience.role}-${experience.period}`}
              experience={experience}
              index={index}
              total={experiences.length}
            />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.label} className="skill-category">
              <h3 className="skill-category-title">{skill.label}</h3>
              <div className="skill-icons-grid">
                {skill.items.map((item) => (
                  <div key={item} className="skill-badge" title={item}>
                    <SkillIcon name={item} />
                    <span className="skill-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="publications" title="Publications & Articles">
        <div className="publications-list">
          {publications.map((pub) => (
            <a 
              key={pub.title} 
              href={pub.link} 
              target="_blank" 
              rel="noreferrer"
              className="publication-item"
            >
              <div className="publication-content">
                <h4 className="publication-title">{pub.title}</h4>
                <p className="publication-outlet">{pub.outlet}</p>
                {pub.citations && (
                  <span className="publication-citations">{pub.citations} citations</span>
                )}
              </div>
              <span className="publication-arrow">↗</span>
            </a>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="education-minimal">
          <div className="education-main">
            <div className="education-info">
              {education.schoolUrl ? (
                <a 
                  href={education.schoolUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="education-school-link"
                >
                  <h3>
                    {education.school}
                    <span className="link-arrow">↗</span>
                  </h3>
                </a>
              ) : (
                <h3>{education.school}</h3>
              )}
              <p>{education.program}</p>
            </div>
          </div>
          <div className="education-meta">
            <span>{education.period}</span>
            <span>{education.cgpa}</span>
          </div>
        </div>
      </Section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {hero.name}. All rights reserved.</p>
      </footer>
      </main>
    </>
  )
}

export default App
