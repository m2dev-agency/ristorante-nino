import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Decorative Top Border */}
      <div className="footer__border"></div>

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-text">Nino</span>
              <span className="footer__logo-subtext">Ristorante</span>
            </div>
            <p className="footer__tagline">
              Cucina tradizionale abruzzese dal 1961.<br />
              Oltre 60 anni di passione e autenticità.
            </p>
            <div className="footer__badge">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2Z"/>
              </svg>
              <span>Travellers' Choice</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__nav">
            <h4 className="footer__heading">Esplora</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/storia">La Nostra Storia</Link></li>
              <li><Link to="/menu">Il Menù</Link></li>
              <li><Link to="/eventi">Eventi e Cerimonie</Link></li>
              <li><Link to="/contatti">Contatti</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__contact">
            <h4 className="footer__heading">Contatti</h4>
            <address className="footer__address">
              <p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Viale Principessa di Piemonte 7<br />
                66100 Chieti (CH)
              </p>
              <p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+390871063781">+39 0871 63781</a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div className="footer__hours">
            <h4 className="footer__heading">Orari</h4>
            <ul className="footer__schedule">
              <li><span>Lunedì</span><span>Chiuso</span></li>
              <li><span>Mar - Sab</span><span>9:00-15:00 / 19:30-22:00</span></li>
              <li><span>Domenica</span><span>9:00-16:00</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Ristorante Nino - Falasca Emilia & C. S.n.c. - Tutti i diritti riservati.
          </p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
