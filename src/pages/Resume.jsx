import { CONTACT_LINKS } from '../data/site.js'

const skills = {
  design: ['UX Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  development: [
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST APIs',
  ],
}

const keyTechnologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Figma',
  'Git',
  'GitHub',
  'VS Code',
]

const tools = ['Figma', 'Git', 'GitHub', 'VS Code', 'Notion']

const projectHighlights = [
  {
    title: 'SkillSync',
    role: 'Full Stack Developer & Product Designer',
    details:
      'Built a role-based artisan marketplace connecting service providers with clients. Developed frontend interfaces and backend services, including job posting workflows and artisan profile management.',
    link: 'https://github.com/vickgazamoore-stack/skillsync_.git',
    linkLabel: 'github.com/vickgazamoore-stack/skillsync_.git',
  },
  {
    title: 'Drive Konacuv',
    role: 'Product Designer / UX Designer',
    details:
      'Designed a logistics and transportation platform interface in Figma. Created wireframes, user flows, and interactive prototypes to improve usability for transport service users.',
  },
  {
    title: 'Gazamarket',
    role: 'Product Designer',
    details:
      'Designed an e-commerce marketplace concept focused on product discovery, vendor management, and intuitive shopping flows.',
    link: 'https://gaza-market.vercel.app',
    linkLabel: 'gaza-market.vercel.app',
  },
]

const certifications = [
  'B.Eng Petroleum Engineering',
  'LearnFactory/TechRise Certification - Product Design (UI/UX)',
  'Certiport IC3 Digital Literacy Certification',
  'CPN National Skills Qualification (NSQ) Level 3 - UI/UX Design',
  'CPN National Skills Qualification (NSQ) Level 3 - Frontend Web Development',
]

const education = [
  {
    institution: 'IT Skill Center Lagos',
    program: 'Full Stack Software Development',
    period: 'Aug 2025 - Mar 2026',
  },
  {
    institution: 'LearnFactory Nigeria - Abia State TechRise',
    program: 'Product Design UI/UX',
    period: 'Feb 2025 - May 2025',
  },
  {
    institution: 'Federal University of Technology, Owerri',
    program: 'B.Eng Petroleum Engineering',
    period: '2004 - 2010',
  },
]

export function Resume() {
  return (
    <>
      <section className="section">
        <div className="sectionHeader pageIntro">
          <h1>Resume</h1>
          <p className="muted">
            Ekeator Victor Uzoma, Full Stack Software Developer and Product
            Designer (UI/UX).
          </p>
        </div>
        <div className="panel prosePanel resumeIntro">
          <div className="resumeMeta">
            <p className="resumeMetaRow">
              <span className="resumeMetaLabel">Location</span>
              <span className="resumeMetaValue">
                Aba / Lagos, Nigeria
              </span>
            </p>
            <p className="resumeMetaRow">
              <span className="resumeMetaLabel">Phone</span>
              <span className="resumeMetaValue">08037933012</span>
            </p>
            <p className="resumeMetaRow">
              <span className="resumeMetaLabel">Email</span>
              <a
                className="resumeMetaValue"
                href={`mailto:${CONTACT_LINKS.email}`}
              >
                {CONTACT_LINKS.email}
              </a>
            </p>
            <p className="resumeMetaRow">
              <span className="resumeMetaLabel">LinkedIn</span>
              <a
                className="resumeMetaValue"
                href={CONTACT_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {CONTACT_LINKS.linkedinLabel}
              </a>
            </p>
            <p className="resumeMetaRow">
              <span className="resumeMetaLabel">GitHub</span>
              <a
                className="resumeMetaValue"
                href={CONTACT_LINKS.github}
                target="_blank"
                rel="noreferrer"
              >
                {CONTACT_LINKS.githubLabel}
              </a>
            </p>
            <p className="resumeMetaRow">
              <span className="resumeMetaLabel">CV</span>
              <span className="resumeMetaValue">
                Available on request via{' '}
                <a href={`mailto:${CONTACT_LINKS.email}`}>
                  {CONTACT_LINKS.email}
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <article className="panel prosePanel">
          <h2>Professional summary</h2>
          <p className="bodyText">
            Full Stack Software Developer and Product Designer (UI/UX) with
            training in frontend and backend development as well as
            user-centered product design. Experienced in designing intuitive
            interfaces and building scalable web applications. Passionate about
            translating ideas into functional digital products that solve
            real-world problems. Seeking a role as a Full Stack Developer or
            Product Designer.
          </p>
        </article>
      </section>

      <section className="section twoCol">
        <article className="panel">
          <h2>Skills</h2>
          <h3 className="subHeading">Full stack</h3>
          <ul className="bulletList">
            <li>Full Stack Development</li>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Web Application Development</li>
            <li>Responsive Web Design</li>
            <li>Node.js &amp; Express.js</li>
          </ul>
          <h3 className="subHeading">Design</h3>
          <ul className="bulletList">
            {skills.design.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <h3 className="subHeading">Development</h3>
          <ul className="bulletList">
            {skills.development.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </article>
        <article className="panel">
          <h2>Key technologies</h2>
          <ul className="bulletList">
            {keyTechnologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <h2>Tools</h2>
          <ul className="bulletList">
            {tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <h2>Education</h2>
          <ul className="bulletList">
            {education.map((item) => (
              <li key={item.institution}>
                <strong>{item.institution}</strong> - {item.program} (
                {item.period})
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="grid">
          {projectHighlights.map((project) => (
            <article className="card" key={project.title}>
              <h3>
                {project.title} - {project.role}
              </h3>
              {project.link ? (
                <p className="bodyText">
                  GitHub:{' '}
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.linkLabel}
                  </a>
                </p>
              ) : null}
              <p className="bodyText">{project.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section twoCol">
        <article className="panel">
          <h2>Certifications</h2>
          <ul className="bulletList">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="panel prosePanel">
          <h2>Language</h2>
          <p className="bodyText">English</p>
        </article>
      </section>
    </>
  )
}
