import { CONTACT_LINKS } from '../data/site.js'

export function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    // In a real app this would be sent to an API or email service.
    console.log({ name, email, message })
    alert('Thank you for reaching out! Your message has been noted.')
    event.currentTarget.reset()
  }

  return (
    <>
      <section className="section">
        <div className="sectionHeader">
          <h1>Contact</h1>
          <p className="muted">
            Let&apos;s talk about your next product, feature, or idea.
          </p>
        </div>
      </section>

      <section className="section contactLayout">
        <article className="panel contactPanel">
          <h2>Contact form</h2>
          <form className="contactForm" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me a bit about your project or question."
                required
              />
            </label>
            <button className="btn primary" type="submit">
              Send Message
            </button>
          </form>
        </article>

        <article className="panel contactPanel">
          <h2>Direct contact</h2>
          <p className="bodyText">
            Prefer email or a quick DM? Feel free to reach out directly using
            the details below.
          </p>
          <ul className="bulletList contactList">
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${CONTACT_LINKS.email}`}>
                {CONTACT_LINKS.email}
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a
                href={CONTACT_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {CONTACT_LINKS.linkedinLabel}
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{' '}
              <a
                href={CONTACT_LINKS.github}
                target="_blank"
                rel="noreferrer"
              >
                {CONTACT_LINKS.githubLabel}
              </a>
            </li>
            <li>
              <strong>Location:</strong> Nigeria
            </li>
          </ul>
        </article>
      </section>
    </>
  )
}
