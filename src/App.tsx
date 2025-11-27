import type { ReactNode } from 'react'
import './App.css'
import {
  contact,
  education,
  experiences,
  hero,
  highlights,
  interests,
  projects,
  publications,
  skills,
} from './data/profile'

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="info-pill">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="section">
      <div className="section-header">
        <div>
          <p className="eyebrow">featured</p>
          <h2>{title}</h2>
        </div>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}

function App() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-meta">
          <p className="eyebrow">Portfolio · 2025</p>
          <p className="eyebrow">LinkedIn: <a href={contact.linkedin} target="_blank" rel="noreferrer" className="link-inline">{contact.linkedin.replace('https://www.', '')}</a></p>
        </div>
        <h1>{hero.name}</h1>
        <h3>{hero.title}</h3>
        <p className="hero-summary">{hero.summary[0]}</p>
        <p className="hero-summary">{hero.summary[1]}</p>
        <div className="hero-actions">
          <a className="btn primary" href={contact.linkedin} target="_blank" rel="noreferrer">
            View LinkedIn Profile
          </a>
          <a className="btn ghost" href={`mailto:${contact.email}`}>
            Get in Touch
          </a>
        </div>
        <div className="contact-grid">
          <InfoPill label="Location" value={contact.location} />
          <InfoPill label="Phone" value={contact.phone} />
          <InfoPill label="Email" value={contact.email} />
          <InfoPill label="LinkedIn" value={contact.linkedin.replace('https://www.linkedin.com/in/', '')} />
        </div>
      </header>

      <section className="highlight-grid">
        {highlights.map((item) => (
          <article key={item.label}>
            <p className="label">{item.label}</p>
            <h4>{item.value}</h4>
          </article>
        ))}
      </section>

      <Section title="Work Experience" subtitle="Building dependable data & GenAI platforms end-to-end.">
        <div className="stacked-cards">
          {experiences.map((experience) => (
            <article className="card" key={`${experience.company}-${experience.role}-${experience.period}`}>
              <div className="card-header">
                <div>
                  <h3>{experience.company}</h3>
                  <p>{experience.location}</p>
                </div>
                <div className="timeline">
                  <strong>{experience.role}</strong>
                  <span>{experience.period}</span>
                </div>
              </div>
              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="tag-row">
                {experience.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Education" subtitle="Integrated dual-degree technologist grounded in research.">
        <div className="education-card">
          <div>
            <h3>{education.school}</h3>
            <p>{education.program}</p>
          </div>
          <div className="timeline">
            <strong>{education.period}</strong>
            <span>{education.cgpa}</span>
          </div>
        </div>
      </Section>

      <Section title="Publications & Articles" subtitle="Select work spanning encryption, analytics, and applied research.">
        <div className="list-grid">
          {publications.map((pub) => (
            <a className="list-card" key={pub.title} href={pub.link} target="_blank" rel="noreferrer">
              <div>
                <h4>{pub.title}</h4>
                <p>{pub.outlet}</p>
              </div>
              <span>↗</span>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Projects" subtitle="Minimal, production-ready builds across HR, explainable AI, and mental health.">
        <div className="list-grid">
          {projects.map((project) => (
            <article className="list-card" key={project.name}>
              <div>
                <h4>{project.name}</h4>
                <p>{project.context}</p>
              </div>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Skills & Platform Stack">
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.label}>
              <p className="label">{skill.label}</p>
              <p>{skill.items.join(' · ')}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Interests" subtitle="Outside of code, I recharge through movement and exploration.">
        <div className="interests">
          {interests.map((interest) => (
            <span className="tag" key={interest}>
              {interest}
            </span>
          ))}
        </div>
      </Section>

      <footer className="footer">
        <p>
          Built with React · Crafted for recruiters & collaborators. This snapshot reflects the latest professional narrative mirrored
          from LinkedIn and ongoing engagements.
        </p>
      </footer>
    </main>
  )
}

export default App
