
import { useState } from "react";
import heroImg from "./assets/heroo.png";
import logo from "./assets/logo.png";
import "./App.css";

const INSTAGRAM_URL = "https://www.instagram.com/vastranchal.stodio/";
const WHATSAPP_NUMBER = "919131198203";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Vastranchal Studio! I'd love to explore your collection."
  )}`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* Announcement Bar */}
      <div className="announcement">
        <span className="announcement-dot"></span>
        OUR ONLINE SHOPPING PLATFORM IS COMING SOON
        <span className="announcement-dot"></span>
      </div>

      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Vastranchal Studio Logo" />
          <div className="brand-text">
            <span className="brand-name">VASTRANCHAL</span>
            <span className="brand-subtitle">STUDIO · EST. 2026</span>
          </div>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>Our Story</a>
          <a href="#collection" onClick={closeMenu}>Coming Soon</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
        >
          EXPLORE INSTAGRAM ↗
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">

          <span className="eyebrow">
            THE ART OF TIMELESS STYLE
          </span>

          <h1>
            Fashion that feels
            <br />
            <em>uniquely you.</em>
          </h1>

          <p className="hero-description">
            Discover styles that celebrate your individuality.
            From everyday elegance to statement looks,
            find outfits that make every moment special.
          </p>

          <div className="hero-actions">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              SEE OUR COLLECTION <span>↗</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              SHOP VIA WHATSAPP
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line"></span>
            A NEW ONLINE SHOPPING EXPERIENCE IS ON ITS WAY
          </div>

        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={heroImg}
              alt="Vastranchal Studio Women's Fashion"
            />
          </div>

          <div className="vertical-label">
            VASTRANCHAL STUDIO — 2026
          </div>

          {/* <div className="hero-decoration">V.</div> */}
        </div>

        <div className="hero-index">01 / 03</div>
      </section>

      {/* Brand Introduction */}
      <section className="about-section" id="about">

        <div className="section-label">
          <span>01 — OUR PHILOSOPHY</span>
          <span>THE VASTRANCHAL STORY</span>
        </div>

        <div className="about-content">
          <span className="eyebrow">MADE FOR YOUR MOMENTS</span>

          <h2>
            Your style.
            <br />
            <em>Your statement.</em>
          </h2>

          <p>
            At Vastranchal Studio, fashion is more than just
            what you wear. It's how you express yourself.
            We bring you thoughtfully selected women's wear
            that blends elegance, comfort and contemporary style.
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="about-link"
          >
            DISCOVER OUR STYLE ↗
          </a>
        </div>

      </section>

      {/* Coming Soon Section */}
      <section className="collection-section" id="collection">

        <div className="collection-decoration">V</div>

        <div className="coming-soon-content">

          <span className="eyebrow">
            SOMETHING EXCITING IS ON ITS WAY
          </span>

          <div className="coming-soon-label">
            <span></span>
            ONLINE STORE LAUNCH
            <span></span>
          </div>

          <h2>
            Your favourite fashion.
            <br />
            <em>Coming online soon.</em>
          </h2>

          <p>
            We're creating an exclusive online shopping
            experience just for you. Soon, you'll be able
            to discover and shop your favourite Vastranchal
            styles, all in one place.
          </p>

          <div className="collection-actions">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="primary-btn light-btn"
            >
              FOLLOW US ON INSTAGRAM ↗
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="collection-whatsapp"
            >
              HAVE A LOOK IN MIND? CHAT WITH US ↗
            </a>
          </div>

          <div className="launch-note">
            UNTIL THEN, EXPLORE OUR COLLECTION ON INSTAGRAM
          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">

        <div className="contact-content">
          <span className="eyebrow">LET'S CONNECT</span>

          <h2>
            Love a look?
            <br />
            <em>Let's talk.</em>
          </h2>

          <p>
            Have a question about our collection?
            We're just a message away. Connect with us
            and we'd love to help you find your style.
          </p>
        </div>

        <div className="contact-actions">

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">◎</span>
            <span>
              <strong>Instagram</strong>
              <small>Explore our latest styles</small>
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">◉</span>
            <span>
              <strong>WhatsApp</strong>
              <small>Chat with us directly</small>
            </span>
            <span className="contact-arrow">↗</span>
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">

        <a href="#home" className="footer-brand">
          <img src={logo} alt="Vastranchal Studio" />
          <span>VASTRANCHAL STUDIO</span>
        </a>

        <span className="footer-tagline">
          CELEBRATE YOUR STYLE.
        </span>

        <span className="copyright">
          © 2026 VASTRANCHAL STUDIO
        </span>

      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 .5A15.4 15.4 0 0 0 2.8 23.8L.7 31.5l7.9-2.1A15.5 15.5 0 1 0 16 .5Zm0 28.1a12.6 12.6 0 0 1-6.4-1.7l-.5-.3-4.7 1.2 1.3-4.6-.3-.5A12.6 12.6 0 1 1 16 28.6Zm6.9-9.4c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7-.1-.2-.9-2.1-1.3-2.8-.3-.7-.7-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.3-1.4 3.2s1.5 3.7 1.7 4c.2.3 2.9 4.4 7 6.2 1 .4 1.8.7 2.4.8 1 .3 1.9.2 2.6.1.8-.1 2.3-.9 2.7-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z"/>
        </svg>
      </a>
      <a
  href={INSTAGRAM_URL}
  target="_blank"
  rel="noreferrer"
  className="floating-instagram"
  aria-label="Follow us on Instagram"
>
  <svg viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
</a>

    </main>
  );
}

export default App;
