import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: 'about', label: 'عن الشركة' },
    { to: 'whyus', label: 'لماذا نحن' },
    { to: 'apartments', label: 'شقق سكنية' },
    { to: 'services', label: 'خدماتنا' },
    { to: 'coastal', label: 'شاليهات ساحلية' },
    { to: 'testimonials', label: 'آراء العملاء' },
    { to: 'lands', label: 'أراضي استثمارية' },
    { to: 'news', label: 'الأخبار' },
    { to: 'contact', label: 'تواصل معنا' },
  ]

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
        <div className="navbar__inner container">


          <div className="navbar__logo">
            <img src="/logo.png" alt="Logo" className="navbar__logo-img" />
          </div>

          <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={700}
                  offset={-120}
                  className="navbar__link"
                  activeClass="navbar__link--active"
                  spy={true}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button
              className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
