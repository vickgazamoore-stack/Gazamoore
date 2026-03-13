import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  SiAffinitydesigner,
  SiCss,
  SiExpress,
  SiFigma,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiVite,
} from 'react-icons/si'
import heroAsset from '../assets/hero.png'
import driveKonaImage from '../assets/image/drive kona.png'
import gazaMarketImage from '../assets/image/Gaza-Market.png'
import skillSyncImage from '../assets/image/skillsync img.png'
import { CONTACT_LINKS } from '../data/site.js'

const experienceCards = [
  {
    title: 'CIB on the Mobile',
    summary: 'Led UI/UX improvements for account overview, transaction clarity, and onboarding flows.',
    type: 'Product Design + Frontend',
    badge: 'UX',
  },
  {
    title: 'SkillSync Marketplace',
    summary: 'Designed and implemented role-based flows for clients, artisans, and admin operations.',
    type: 'UX + Full Stack',
    badge: 'FS',
  },
  {
    title: 'Drive Konacuv Platform',
    summary: 'Built investor and operations dashboards with route, trip, and payout visibility.',
    type: 'System Design + Backend',
    badge: 'BE',
  },
  {
    title: 'GazaMarket Commerce',
    summary: 'Shipped multi-vendor features: discovery, split checkout, seller analytics, and disputes.',
    type: 'Marketplace Engineering',
    badge: 'PM',
  },
]

const stackTop = [
  { name: 'Figma', Icon: SiFigma, tone: 'toneFigma' },
  { name: 'React', Icon: SiReact, tone: 'toneReact' },
  { name: 'Node.js', Icon: SiNodedotjs, tone: 'toneNode' },
  { name: 'JavaScript', Icon: SiJavascript, tone: 'toneJs' },
  { name: 'CSS', Icon: SiCss, tone: 'toneCss' },
]

const stackBottom = [
  { name: 'Next.js', Icon: SiNextdotjs, tone: 'toneNext' },
  { name: 'Vite', Icon: SiVite, tone: 'toneVite' },
  { name: 'AI', Icon: SiAffinitydesigner, tone: 'toneAi' },
  { name: 'Express', Icon: SiExpress, tone: 'toneExpress' },
  { name: 'MongoDB', Icon: SiMongodb, tone: 'toneMongo' },
]

const featuredProjects = [
  {
    title: 'Drive Konacuv Transport Platform',
    body: 'A Figma product design concept for a transport and logistics platform connecting investors, drivers, and passengers through one unified workflow.',
    tags: ['Product Design', 'Figma', 'UX Flow'],
    preview: 'drive',
    image: driveKonaImage,
  },
  {
    title: 'SkillSync Artisan Marketplace',
    body: 'A role-based marketplace where artisans and clients collaborate through clear job posting and fulfillment flows.',
    tags: ['UX Research', 'React', 'REST APIs'],
    image: skillSyncImage,
  },
  {
    title: 'GazaMarket Marketplace Platform',
    body: 'A multi-vendor commerce platform with discovery, split checkout, seller operations, and admin moderation workflows.',
    tags: ['Marketplace', 'React', 'MongoDB'],
    image: gazaMarketImage,
  },
]

export function Home() {
  const [imageErrors, setImageErrors] = useState({})

  return (
    <div className="homeScene">
      <section className="homeHero" aria-label="Intro" id="home">
        <div className="homeHeroMedia" aria-hidden="true">
          <img src={heroAsset} alt="" className="heroAvatar" />
        </div>

        <div className="homeHeroCopy">
          <p className="homeLeadIn">Hello! I am Victor Ekeator</p>
          <p className="homeEyebrow">A designer and engineer who builds products with clarity.</p>
          <h1 className="typingHeadline">
            <span className="typingText">I&apos;m a Software Engineer</span>
            <span className="typingCaret" aria-hidden="true" />
          </h1>
          <p className="homeSubline">
            Currently focused on full stack web applications, UX-driven interfaces,
            and business-ready digital systems.
          </p>
          <div className="cta homeCta">
            <Link className="btn primary" to="/projects">
              View Projects
            </Link>
            <Link className="btn" to="/contact">
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </section>

      <section className="homeWork" id="work">
        <div className="sectionHeader sectionHeaderLeft">
          <h2>Work Experience</h2>
          <p className="muted">Selected product and engineering work across different domains.</p>
        </div>

        <div className="experienceGrid">
          {experienceCards.map((card) => (
            <article className="experienceCard" key={card.title}>
              <span className="experienceBadge" aria-hidden="true">
                {card.badge}
              </span>
              <p className="experienceType">{card.type}</p>
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="homeOrbit" aria-label="Tech stack">
        <p className="homeOrbitText">
          I currently collaborate with cross-functional teams to ship useful products.
        </p>
        <div className="stackConstellation" role="list" aria-label="Tools and technologies">
          <div className="stackRow stackRowTop">
            {stackTop.map((item) => (
              <span
                role="listitem"
                className={`stackBubble ${item.tone}`}
                key={item.name}
                title={item.name}
                aria-label={item.name}
              >
                <item.Icon />
              </span>
            ))}
          </div>
          <div className="stackRow stackRowBottom">
            {stackBottom.map((item) => (
              <span
                role="listitem"
                className={`stackBubble stackBubbleMuted ${item.tone}`}
                key={item.name}
                title={item.name}
                aria-label={item.name}
              >
                <item.Icon />
              </span>
            ))}
          </div>
          <svg className="stackCurves" viewBox="0 0 100 145" preserveAspectRatio="none" aria-hidden="true">
            {stackBottom.map((item, index) => {
              const x = 28 + index * 11
              const c1x = x + (50 - x) * 0.08
              const c2x = x + (50 - x) * 0.72
              return (
                <path
                  key={`${item.name}-curve`}
                  d={`M ${x} 0 C ${c1x} 37, ${c2x} 95, 50 145`}
                />
              )
            })}
          </svg>
        </div>
        <div className="orbitSystem" aria-hidden="true">
          <span className="orbitRing orbitRingOne" />
          <span className="orbitRing orbitRingTwo" />
          <span className="orbitRing orbitRingThree" />
          <div className="orbitCore">
            <span>VE</span>
          </div>
        </div>
      </section>

      <section className="homeFeatured" id="about">
        {featuredProjects.map((project, index) => (
          <article className={`featuredRow ${index % 2 === 1 ? 'reverse' : ''}`} key={project.title}>
            <div className="featuredVisual" aria-hidden="true">
              {project.image && !imageErrors[project.title] ? (
                <img
                  className="featuredMediaImage"
                  src={project.image}
                  alt=""
                  onError={() =>
                    setImageErrors((prev) => ({ ...prev, [project.title]: true }))
                  }
                />
              ) : project.preview === 'drive' ? (
                <div className="drivePreview">
                  <div className="driveNav">
                    <span className="driveBrand">KONACUV</span>
                    <span className="driveNavDot" />
                  </div>
                  <div className="driveHero">
                    <div className="driveForm">
                      <span className="driveTitle">Book Your Trip</span>
                      <span className="driveInput" />
                      <span className="driveInput" />
                      <div className="driveMeta">
                        <span className="driveTag" />
                        <span className="driveTag" />
                      </div>
                    </div>
                    <div className="driveTaxi" />
                  </div>
                  <div className="driveCards">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              ) : (
                <div className="featuredWireframe" />
              )}
            </div>
            <div className="featuredCopy">
              <p className="featuredEyebrow">Featured Project</p>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
              <div className="tags" aria-label="Technology used">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link className="inlineLink" to="/projects">
                Open case study
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="homeContact" id="contact">
        <h2>Contact</h2>
        <p>
          I&apos;m available for product design and full stack development work. If you have a
          project or opportunity, let&apos;s talk.
        </p>
        <a href={`mailto:${CONTACT_LINKS.email}`} className="inlineLink">
          {CONTACT_LINKS.email}
        </a>
      </section>
    </div>
  )
}
