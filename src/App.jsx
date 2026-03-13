import { useEffect } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Projects } from './pages/Projects.jsx'
import { Resume } from './pages/Resume.jsx'
import { Contact } from './pages/Contact.jsx'
import { CONTACT_LINKS } from './data/site.js'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function Layout({ children }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className={`page ${isHome ? 'homePage' : ''}`}>
      <header className={`topbar ${isHome ? 'topbarHome' : ''}`}>
        <NavLink className={`brand ${isHome ? 'brandHome' : ''}`} to="/">
          Victor Ekeator
        </NavLink>
        <nav className="nav" aria-label="Primary navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className={`content ${isHome ? 'contentHome' : ''}`}>{children}</main>

      {!isHome ? (
        <footer className="footer">
          <div className="footerMain">
            <div>
              <p className="muted">
                Let&apos;s build something meaningful together. Reach out any
                time.
              </p>
            </div>
            <div className="footerLinks">
              <a href={`mailto:${CONTACT_LINKS.email}`}>{CONTACT_LINKS.email}</a>
              <a
                href={CONTACT_LINKS.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={CONTACT_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <p className="muted copyright">
            © {new Date().getFullYear()} Victor Uzoma Ekeator. All rights
            reserved.
          </p>
        </footer>
      ) : null}
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/resume"
          element={
            <Layout>
              <Resume />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </>
  )
}

export default App
