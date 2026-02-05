import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import './Eventi.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const eventTypes = [
  {
    icon: '💒',
    title: 'Matrimoni',
    description: 'Rendi il giorno più bello della vostra vita ancora più speciale. Menù personalizzati, allestimenti curati e un servizio impeccabile per celebrare il vostro amore.',
    features: ['Menù su misura', 'Consulenza gratuita', 'Allestimenti personalizzati', 'Fino a 90 ospiti']
  },
  {
    icon: '👶',
    title: 'Battesimi',
    description: 'Festeggia l\'arrivo del nuovo arrivato con la famiglia e gli amici in un ambiente accogliente e familiare.',
    features: ['Menù bambini dedicato', 'Sale private', 'Torta personalizzata', 'Animazione su richiesta']
  },
  {
    icon: '✝️',
    title: 'Comunioni e Cresime',
    description: 'Momenti importanti meritano un\'atmosfera speciale. Organizziamo tutto per rendere la festa indimenticabile.',
    features: ['Menù tradizionali', 'Decorazioni a tema', 'Angolo dolci', 'Fotografia su richiesta']
  },
  {
    icon: '🎂',
    title: 'Compleanni',
    description: 'Che sia per 18 o 80 anni, ogni compleanno è una festa da celebrare con i sapori della tradizione.',
    features: ['Torte artigianali', 'Menù personalizzato', 'Allestimenti festivi', 'Musica su richiesta']
  },
  {
    icon: '💼',
    title: 'Eventi Aziendali',
    description: 'Cene di lavoro, team building, presentazioni. Spazi e servizi pensati per il mondo business.',
    features: ['WiFi gratuito', 'Menù business lunch', 'Fatturazione dedicata', 'Sale riservate']
  },
  {
    icon: '🎊',
    title: 'Feste Private',
    description: 'Anniversari, lauree, pensionamenti... ogni occasione è buona per festeggiare insieme.',
    features: ['Massima flessibilità', 'Menù à la carte', 'Servizio dedicate', 'Orari personalizzati']
  }
]

const packages = [
  {
    name: 'Essenziale',
    price: '€35',
    perPerson: true,
    features: [
      'Antipasto della casa',
      'Primo a scelta (2 opzioni)',
      'Secondo con contorno',
      'Dolce della casa',
      'Acqua e vino della casa',
      'Caffè'
    ],
    note: 'Minimo 20 persone'
  },
  {
    name: 'Tradizione',
    price: '€50',
    perPerson: true,
    popular: true,
    features: [
      'Ricco buffet antipasti',
      'Due primi a scelta',
      'Secondo di carne o pesce',
      'Contorno di stagione',
      'Dessert assortiti',
      'Vini DOC abruzzesi',
      'Caffè e digestivo'
    ],
    note: 'Minimo 30 persone'
  },
  {
    name: 'Gran Gala',
    price: '€70',
    perPerson: true,
    features: [
      'Aperitivo di benvenuto',
      'Gran buffet antipasti',
      'Due primi della tradizione',
      'Intermezzo sorbetto',
      'Secondo di mare e terra',
      'Contorni misti',
      'Gran dessert e torta',
      'Vini premium selezionati',
      'Open bar finale'
    ],
    note: 'Minimo 40 persone'
  }
]

export default function Eventi() {
  return (
    <div className="eventi-page">
      {/* Hero */}
      <section className="eventi-hero">
        <div className="eventi-hero__bg"></div>
        <div className="eventi-hero__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Eventi & Cerimonie</span>
            <h1>Il Tuo Evento<br /><em>Speciale</em></h1>
            <p className="eventi-hero__text">
              Organizziamo eventi indimenticabili con la qualità e l'attenzione 
              che ci contraddistinguono da oltre 60 anni
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="eventi-intro section">
        <div className="container">
          <div className="eventi-intro__content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>90 Posti per i<br />Vostri Momenti Speciali</h2>
              <p>
                Da oltre 60 anni accompagniamo le famiglie chietine nei loro momenti 
                più importanti. La nostra esperienza, unita alla passione per la 
                cucina tradizionale, ci permette di offrire un servizio completo 
                e personalizzato per qualsiasi tipo di evento.
              </p>
              <p>
                Dalle cerimonie più intime ai banchetti più importanti, il nostro 
                staff è pronto a seguirvi passo dopo passo nella organizzazione 
                del vostro evento perfetto.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="eventi-types section">
        <div className="eventi-types__bg"></div>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Cosa Organizziamo</span>
            <h2 className="section-title">Tipologie di Eventi</h2>
          </motion.div>

          <div className="events-grid">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.title}
                className="event-card"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="event-card__icon">{event.icon}</span>
                <h3 className="event-card__title">{event.title}</h3>
                <p className="event-card__desc">{event.description}</p>
                <ul className="event-card__features">
                  {event.features.map((feature) => (
                    <li key={feature}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="eventi-packages section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">I Nostri Menù</span>
            <h2 className="section-title">Pacchetti Cerimonie</h2>
          </motion.div>

          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`package-card ${pkg.popular ? 'package-card--popular' : ''}`}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {pkg.popular && <span className="package-card__badge">Più Richiesto</span>}
                <h3 className="package-card__name">{pkg.name}</h3>
                <div className="package-card__price">
                  <span className="package-card__price-value">{pkg.price}</span>
                  {pkg.perPerson && <span className="package-card__price-per">a persona</span>}
                </div>
                <ul className="package-card__features">
                  {pkg.features.map((feature) => (
                    <li key={feature}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="package-card__note">{pkg.note}</p>
                <Link to="/contatti" className="btn btn-primary package-card__btn">
                  Richiedi Preventivo
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="packages-disclaimer">
            I prezzi e i menù sono indicativi e possono essere personalizzati in base 
            alle vostre esigenze. Contattateci per un preventivo su misura.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="eventi-services section">
        <div className="eventi-services__bg"></div>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Servizi Extra</span>
            <h2 className="section-title">Tutto Incluso</h2>
          </motion.div>

          <div className="services-list">
            {[
              { icon: '🎵', text: 'Musica e intrattenimento su richiesta' },
              { icon: '📸', text: 'Collaborazione con fotografi professionisti' },
              { icon: '💐', text: 'Allestimenti floreali personalizzati' },
              { icon: '🎂', text: 'Torte artigianali e confettata' },
              { icon: '🚗', text: 'Ampio parcheggio nelle vicinanze' },
              { icon: '♿', text: 'Locale accessibile' }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="service-item__icon">{service.icon}</span>
                <span className="service-item__text">{service.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="eventi-cta section">
        <div className="eventi-cta__bg"></div>
        <div className="container">
          <motion.div
            className="eventi-cta__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Organizziamo Insieme<br />il Tuo Evento</h2>
            <p>
              Contattaci per una consulenza gratuita e senza impegno. 
              Saremo felici di ascoltare le tue esigenze e creare 
              l'evento perfetto per te.
            </p>
            <div className="eventi-cta__actions">
              <Link to="/contatti" className="btn btn-primary btn-lg">
                Richiedi un Preventivo
              </Link>
              <a href="tel:+390871063781" className="btn btn-secondary btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Chiamaci
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
