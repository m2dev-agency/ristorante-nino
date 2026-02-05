import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import './Home.css'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__overlay"></div>
          <div className="hero__pattern"></div>
        </div>
        
        <div className="hero__content container">
          <motion.div
            className="hero__text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="hero__badge" variants={fadeInUp}>
              <span>★</span> Travellers' Choice <span>★</span>
            </motion.div>
            
            <motion.h1 className="hero__title" variants={fadeInUp}>
              <span className="hero__title-line">Ristorante</span>
              <span className="hero__title-main">Nino</span>
            </motion.h1>
            
            <motion.div className="hero__year" variants={fadeInUp}>
              <span className="hero__year-line"></span>
              <span className="hero__year-text">dal 1961</span>
              <span className="hero__year-line"></span>
            </motion.div>
            
            <motion.p className="hero__tagline" variants={fadeInUp}>
              Oltre 60 anni di cucina tradizionale abruzzese<br />
              nel cuore di Chieti
            </motion.p>
            
            <motion.div className="hero__actions" variants={fadeInUp}>
              <Link to="/contatti" className="btn btn-primary btn-lg">
                Prenota un Tavolo
              </Link>
              <Link to="/menu" className="btn btn-secondary btn-lg">
                Scopri il Menù
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="hero__scroll">
          <span>Scorri</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-preview__grid">
            <motion.div 
              className="about-preview__content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-subtitle">La Nostra Storia</span>
              <h2>Una tradizione che<br /><em>dura da generazioni</em></h2>
              <p className="about-preview__text">
                Dal 1961, la famiglia Nino accoglie i suoi ospiti con la stessa passione 
                e dedizione di sempre. Ogni piatto racconta una storia di territorio, 
                di sapori autentici e di ricette tramandate con amore.
              </p>
              <p className="about-preview__text">
                Nel cuore del centro storico di Chieti, a pochi passi dal Teatro Marrucino, 
                il nostro ristorante è diventato un punto di riferimento per chi cerca 
                l'autentica cucina abruzzese.
              </p>
              <Link to="/storia" className="about-preview__link">
                Scopri la nostra storia
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div 
              className="about-preview__visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="about-preview__image">
                <div className="about-preview__image-placeholder">
                  <span>60+</span>
                  <small>anni di storia</small>
                </div>
              </div>
              <div className="about-preview__badge">
                <div className="about-preview__badge-content">
                  <span className="about-preview__badge-number">90</span>
                  <span className="about-preview__badge-text">coperti</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties section">
        <div className="specialties__bg"></div>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="section-subtitle">I Nostri Piatti</span>
            <h2 className="section-title">Le Specialità della Casa</h2>
          </motion.div>

          <motion.div 
            className="specialties__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: 'Saccottini Pera e Gorgonzola',
                desc: 'Il nostro piatto iconico, citato in tutte le recensioni',
                tag: 'Signature'
              },
              {
                name: 'Pasta alla Chitarra',
                desc: 'Con ragù abruzzese, fatto come da tradizione',
                tag: 'Tradizione'
              },
              {
                name: 'Arrosticini Artigianali',
                desc: 'Preparati a mano ogni giorno con carne selezionata',
                tag: 'Abruzzo'
              },
              {
                name: 'Baccalà del Martedì',
                desc: 'Specialità disponibile ogni martedì',
                tag: 'Speciale'
              },
              {
                name: 'Agnello ai Ferri',
                desc: 'Classico della cucina abruzzese, cotto alla perfezione',
                tag: 'Tradizione'
              },
              {
                name: 'Torta Triplo Cioccolato',
                desc: 'Il dolce della casa per concludere in dolcezza',
                tag: 'Dolce'
              }
            ].map((dish) => (
              <motion.div 
                key={dish.name}
                className="specialty-card"
                variants={fadeInUp}
              >
                <div className="specialty-card__image">
                  <div className="specialty-card__placeholder"></div>
                  <span className="specialty-card__tag">{dish.tag}</span>
                </div>
                <div className="specialty-card__content">
                  <h3 className="specialty-card__name">{dish.name}</h3>
                  <p className="specialty-card__desc">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="specialties__cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/menu" className="btn btn-gold">
              Scopri tutto il Menù
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="section-subtitle">I Nostri Servizi</span>
            <h2 className="section-title">Molto più di un Ristorante</h2>
          </motion.div>

          <motion.div 
            className="services__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: '🍽️',
                title: 'Ristorante & Pizzeria',
                desc: 'Cucina tradizionale e pizza cotta a regola d\'arte'
              },
              {
                icon: '🎉',
                title: 'Eventi & Cerimonie',
                desc: 'Matrimoni, battesimi, comunioni e feste private'
              },
              {
                icon: '🥡',
                title: 'Asporto & Delivery',
                desc: 'I nostri piatti anche a casa tua, disponibili su Deliveroo'
              },
              {
                icon: '🌾',
                title: 'Menù Celiaci',
                desc: 'Attenzione speciale per chi ha esigenze particolari'
              },
              {
                icon: '💼',
                title: 'Pranzi di Lavoro',
                desc: 'Menù dedicato per la pausa pranzo veloce ma gustosa'
              },
              {
                icon: '🐕',
                title: 'Pet Friendly',
                desc: 'I vostri amici a quattro zampe sono i benvenuti'
              }
            ].map((service) => (
              <motion.div 
                key={service.title}
                className="service-card"
                variants={fadeInUp}
              >
                <span className="service-card__icon">{service.icon}</span>
                <h4 className="service-card__title">{service.title}</h4>
                <p className="service-card__desc">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews section">
        <div className="reviews__bg"></div>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="section-subtitle">Dicono di Noi</span>
            <h2 className="section-title">Le Voci dei Nostri Ospiti</h2>
          </motion.div>

          <div className="reviews__stats">
            <motion.div 
              className="review-stat"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="review-stat__icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2Z"/>
                </svg>
              </span>
              <span className="review-stat__value">4.3</span>
              <span className="review-stat__label">Google</span>
              <span className="review-stat__count">200+ recensioni</span>
            </motion.div>

            <motion.div 
              className="review-stat review-stat--featured"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="review-stat__badge">Travellers' Choice</span>
              <span className="review-stat__value">#24</span>
              <span className="review-stat__label">di 173 ristoranti a Chieti</span>
              <span className="review-stat__count">326+ recensioni</span>
            </motion.div>

            <motion.div 
              className="review-stat"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="review-stat__icon">🌾</span>
              <span className="review-stat__value">4.1</span>
              <span className="review-stat__label">Gluto</span>
              <span className="review-stat__count">Specializzati senza glutine</span>
            </motion.div>
          </div>

          <motion.div 
            className="reviews__quotes"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                text: 'Cucina casalinga genuina, porzioni abbondanti e prezzi onesti. Un vero gioiello di Chieti!',
                author: 'Marco R.',
                source: 'TripAdvisor'
              },
              {
                text: 'I saccottini pera e gorgonzola sono incredibili. Da provare assolutamente quando si è in zona.',
                author: 'Laura B.',
                source: 'Google'
              },
              {
                text: 'Finalmente un ristorante che presta vera attenzione ai celiaci. Ci torneremo sicuramente!',
                author: 'Giulia M.',
                source: 'Gluto'
              }
            ].map((review, index) => (
              <motion.blockquote 
                key={index}
                className="review-quote"
                variants={fadeInUp}
              >
                <p className="review-quote__text">"{review.text}"</p>
                <footer className="review-quote__footer">
                  <cite className="review-quote__author">{review.author}</cite>
                  <span className="review-quote__source">{review.source}</span>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-section__bg"></div>
        <div className="container">
          <motion.div 
            className="cta-section__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Vieni a trovarci</h2>
            <p>
              Prenota il tuo tavolo e vieni a scoprire i sapori autentici 
              della tradizione abruzzese.
            </p>
            <div className="cta-section__buttons">
              <Link to="/contatti" className="btn btn-primary btn-lg">
                Prenota Ora
              </Link>
              <a href="tel:+390871063781" className="btn btn-secondary btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Chiama
              </a>
            </div>
            <div className="cta-section__info">
              <p>Viale Principessa di Piemonte 7, Chieti Centro</p>
              <p>Tel: +39 0871 63781</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
