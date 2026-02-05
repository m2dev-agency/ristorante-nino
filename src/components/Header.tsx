import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import './Header.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/storia', label: 'La Nostra Storia' },
  { path: '/menu', label: 'Il Menù' },
  { path: '/eventi', label: 'Eventi' },
  { path: '/contatti', label: 'Contatti' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        {/* Logo */}
        <Link to="/" className="header__logo" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="logo">
            <span className="logo__text">Nino</span>
            <span className="logo__subtext">Ristorante</span>
            <span className="logo__year">dal 1961</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-list__item">
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    `nav-list__link ${isActive ? 'nav-list__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <Link to="/contatti" className="header__cta btn btn-primary">
          Prenota
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className={`header__toggle ${isMobileMenuOpen ? 'header__toggle--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="mobile-menu__nav">
              <ul className="mobile-menu__list">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <Link 
                to="/contatti" 
                className="btn btn-primary mobile-menu__cta"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prenota un Tavolo
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
