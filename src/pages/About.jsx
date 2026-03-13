export function About() {
  return (
    <>
      <section className="section">
        <div className="sectionHeader pageIntro">
          <h1>About</h1>
          <p className="muted">
            Product Designer (UI/UX) and Full Stack Web Developer based in
            Nigeria.
          </p>
        </div>
        <p className="bodyText">
          Victor Ekeator is a Product Designer and Full Stack Web Developer
          passionate about solving real-world problems through technology. He
          specializes in designing user-centered digital products and building
          scalable web applications that are both intuitive and performant.
        </p>
      </section>

      <section className="section">
        <article className="panel prosePanel">
          <h2>Background</h2>
          <p className="bodyText">
            Victor&apos;s experience spans UX research, product thinking, and
            backend development. He enjoys working end-to-end&mdash;from
            understanding user needs and mapping journeys, to designing
            high-fidelity interfaces and implementing robust backend systems.
            Whether collaborating with cross-functional teams or leading
            delivery on complex features, he focuses on clarity, communication,
            and measurable impact.
          </p>
        </article>
      </section>

      <section className="section twoCol">
        <article className="panel">
          <h2>Design skills</h2>
          <ul className="bulletList">
            <li>UX Research</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Design Systems</li>
          </ul>
        </article>
        <article className="panel">
          <h2>Development skills</h2>
          <ul className="bulletList">
            <li>HTML, CSS, JavaScript</li>
            <li>Node.js &amp; Express.js</li>
            <li>MongoDB &amp; REST APIs</li>
            <li>Authentication &amp; backend architecture</li>
          </ul>
        </article>
      </section>
    </>
  )
}
