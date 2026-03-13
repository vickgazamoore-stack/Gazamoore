import driveKonaImage from '../assets/image/drive kona.png'
import gazaMarketImage from '../assets/image/Gaza-Market.png'
import skillSyncImage from '../assets/image/skillsync img.png'

const transportSections = [
  {
    title: 'Problem',
    body:
      'Investors lacked visibility into how their vehicles were being used and how returns were generated, while passengers and drivers had disjointed, manual touchpoints.',
  },
  {
    title: 'Solution',
    body:
      'A Figma-led product concept where investors can purchase and lease vehicles, track performance, and where passengers and drivers interact through clear, digital workflows.',
  },
  {
    title: 'User Flow',
    body:
      'End-to-end flows for investors onboarding vehicles, assigning them to routes, monitoring trips, and reconciling payouts, alongside booking and trip management for passengers.',
  },
  {
    title: 'Wireframes',
    body:
      'Low-fidelity wireframes were used to validate navigation, data density, and the hierarchy of investor metrics before visual design.',
  },
  {
    title: 'UI Design',
    body:
      'Clean dashboards with clear typography, status indicators, and card-based layouts make complex financial and operational data easy to scan.',
  },
  {
    title: 'Prototype Scope',
    body:
      'The project focused on interface structure, booking flows, investor visibility, and dashboard concepts presented as a clickable product design prototype.',
  },
  {
    title: 'Technology Used',
    body: 'Product Design, Figma, Wireframing, User Flows, Interactive Prototyping.',
  },
]

const skillSyncSections = [
  {
    title: 'Problem',
    body:
      'Clients struggled to find verified, trustworthy artisans, and artisans lacked a structured way to receive and manage job requests.',
  },
  {
    title: 'User Research',
    body:
      'Interviews with clients and artisans uncovered key pain points around trust, discovery, and unclear expectations before work began.',
  },
  {
    title: 'UX Design Process',
    body:
      'Mapped journeys for both sides of the marketplace, created personas, and iterated on wireframes to ensure the flows were transparent and balanced.',
  },
  {
    title: 'Role-based dashboards',
    body:
      'Distinct dashboards for admins, artisans, and clients with tailored views, permissions, and actions for each role.',
  },
  {
    title: 'Job posting workflow',
    body:
      'A guided flow for clients to define scope, budget, and timelines, while artisans can easily review, accept, or negotiate requests.',
  },
  {
    title: 'Backend system',
    body:
      'Role-based access control, structured job states, and notifications implemented on top of a RESTful backend.',
  },
]

const gazaMarketSections = [
  {
    title: 'Live Demo',
    body: 'Available at gaza-market.vercel.app.',
  },
  {
    title: 'Multi-Seller Search',
    body: 'Search across vendors with price, rating, and delivery comparison.',
  },
  {
    title: 'Split Checkout',
    body: 'Single cart and checkout flow for orders that span multiple sellers.',
  },
  {
    title: 'Seller Dashboards',
    body: 'Inventory, orders, payouts, and analytics for each vendor.',
  },
  {
    title: 'Admin Tools',
    body: 'Verification, disputes, commissions, and moderation workflows.',
  },
  {
    title: 'Technology Stack',
    body: 'Node.js, React, MongoDB, and Stripe payments.',
  },
]

function CaseStudy({ title, subtitle, sections, image, imageAlt }) {
  return (
    <article className="caseStudy">
      <header className="caseStudyHeader">
        <h2>{title}</h2>
        {subtitle ? <p className="muted">{subtitle}</p> : null}
      </header>
      {image ? (
        <div className="caseStudyMedia">
          <img className="caseStudyImage" src={image} alt={imageAlt} />
        </div>
      ) : null}
      <div className="caseStudyGrid">
        {sections.map((s) => (
          <section key={s.title} className="caseBlock">
            <h3>{s.title}</h3>
            <p className="bodyText">
              {s.title === 'Live Demo' ? (
                <a
                  href="https://gaza-market.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  gaza-market.vercel.app
                </a>
              ) : (
                s.body
              )}
            </p>
          </section>
        ))}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <>
      <section className="section">
        <div className="sectionHeader">
          <h1>Projects</h1>
          <p className="muted">
            Selected case studies that showcase both product design and
            full-stack development.
          </p>
        </div>
      </section>

      <section className="section">
        <CaseStudy
          title="Drive Konacuv Transport & Logistics Platform"
          subtitle="Transport & Logistics Figma Case Study"
          image={driveKonaImage}
          imageAlt="Drive Konacuv Figma transport platform design preview"
          sections={transportSections}
        />
      </section>

      <section className="section">
        <CaseStudy
          title="SkillSync Artisan Marketplace"
          subtitle="Role-based artisan marketplace"
          image={skillSyncImage}
          imageAlt="SkillSync artisan marketplace preview"
          sections={skillSyncSections}
        />
      </section>

      <section className="section">
        <CaseStudy
          title="GazaMarket Marketplace Platform"
          subtitle="Multi-vendor marketplace (Buyers/Sellers/Admin)"
          image={gazaMarketImage}
          imageAlt="GazaMarket marketplace preview"
          sections={gazaMarketSections}
        />
      </section>
    </>
  )
}
