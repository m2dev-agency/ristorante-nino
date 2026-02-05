import { motion } from 'motion/react'
import './Storia.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const timelineEvents = [
  {
    year: '1961',
    title: 'L\'inizio di un Sogno',
    description: 'Nel cuore di Chieti nasce Ristorante Nino. Una piccola trattoria familiare che sin da subito si distingue per la qualità della cucina casalinga e l\'accoglienza genuina.'
  },
  {
    year: '1970',
    title: 'La Prima Espansione',
    description: 'Grazie al passaparola e alla fedeltà dei clienti, il ristorante si amplia. Nuove sale vengono aggiunte per accogliere sempre più ospiti affezionati.'
  },
  {
    year: '1985',
    title: 'La Seconda Generazione',
    description: 'I figli prendono le redini dell\'attività, portando nuova energia pur mantenendo intatte le ricette della tradizione. Nasce la pizzeria.'
  },
  {
    year: '2000',
    title: '40 Anni di Storia',
    description: 'Il ristorante festeggia il suo quarantennale. Ormai un punto di riferimento per matrimoni, cerimonie e momenti speciali delle famiglie chietine.'
  },
  {
    year: '2015',
    title: 'Travellers\' Choice',
    description: 'TripAdvisor premia Ristorante Nino con il prestigioso riconoscimento Travellers\' Choice, entrando nel 10% dei migliori ristoranti al mondo.'
  },
  {
    year: '2021',
    title: '60 Anni di Eccellenza',
    description: 'Sei decenni di storia, tre generazioni, un\'unica passione: offrire ai nostri ospiti il meglio della cucina abruzzese in un ambiente familiare e accogliente.'
  },
  {
    year: 'Oggi',
    title: 'Il Futuro nella Tradizione',
    description: 'Continuiamo a onorare le nostre radici guardando al futuro, con lo stesso amore per la cucina genuina che ci ha sempre contraddistinto.'
  }
]

const values = [
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Famiglia',
    description: 'Tre generazioni unite dalla stessa passione. Ogni ospite è accolto come parte della famiglia.'
  },
  {
    icon: '🌾',
    title: 'Territorio',
    description: 'Ingredienti locali e stagionali, fornitori di fiducia, sapori autentici dell\'Abruzzo.'
  },
  {
    icon: '📖',
    title: 'Tradizione',
    description: 'Ricette tramandate di generazione in generazione, preparate con la stessa cura di sempre.'
  },
  {
    icon: '❤️',
    title: 'Passione',
    description: 'In ogni piatto mettiamo il cuore. È il nostro modo di ringraziare chi ci sceglie ogni giorno.'
  }
]

export default function Storia() {
  return (
    <div className="storia-page">
      {/* Hero Section */}
      <section className="storia-hero">
        <div className="storia-hero__bg"></div>
        <div className="storia-hero__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">La Nostra Storia</span>
            <h1>Una Tradizione<br /><em>che dura da generazioni</em></h1>
            <p className="storia-hero__text">
              Dal 1961, oltre 60 anni di passione, famiglia e cucina autentica 
              nel cuore di Chieti
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="storia-intro section">
        <div className="container">
          <div className="storia-intro__grid">
            <motion.div 
              className="storia-intro__content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Come Tutto<br />è Iniziato</h2>
              <p>
                Era il 1961 quando, in Viale Principessa di Piemonte a Chieti, 
                apriva le porte una piccola trattoria familiare. Un locale modesto 
                ma con un grande sogno: far assaporare ai clienti i piatti della 
                tradizione abruzzese, quelli preparati con amore nelle cucine di casa.
              </p>
              <p>
                I fondatori, con la loro dedizione e le ricette tramandate dalle 
                nonne, hanno costruito non solo un ristorante, ma un luogo di 
                incontro per la comunità. Un posto dove ogni piatto racconta una 
                storia, ogni sapore evoca un ricordo.
              </p>
              <p>
                Oggi, dopo oltre sessant'anni e tre generazioni, quella piccola 
                trattoria è diventata un punto di riferimento per chi cerca 
                l'autenticità della cucina teatina, mantenendo intatta la filosofia 
                dei nostri fondatori: qualità, genuinità e calore umano.
              </p>
            </motion.div>
            
            <motion.div 
              className="storia-intro__visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="storia-intro__image">
                <div className="storia-intro__placeholder">
                  <span>dal</span>
                  <span className="year">1961</span>
                </div>
              </div>
              <div className="storia-intro__frame"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="storia-timeline section">
        <div className="storia-timeline__bg"></div>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Il Nostro Percorso</span>
            <h2 className="section-title">60+ Anni di Storia</h2>
          </motion.div>

          <div className="timeline">
            <div className="timeline__line"></div>
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={event.year}
                className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="timeline__content">
                  <span className="timeline__year">{event.year}</span>
                  <h3 className="timeline__title">{event.title}</h3>
                  <p className="timeline__desc">{event.description}</p>
                </div>
                <div className="timeline__dot"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="storia-values section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">I Nostri Valori</span>
            <h2 className="section-title">Cosa Ci Rende Unici</h2>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={value.title}
                className="value-card"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="value-card__icon">{value.icon}</span>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__desc">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="storia-quote section">
        <div className="storia-quote__bg"></div>
        <div className="container">
          <motion.blockquote 
            className="storia-quote__content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              "La cucina è un atto d'amore. Ogni piatto che esce dalla nostra 
              cucina porta con sé la storia della nostra famiglia, i sapori 
              della nostra terra e l'affetto per chi siede alle nostre tavole."
            </p>
            <footer>
              <cite>— La Famiglia Nino</cite>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Location Section */}
      <section className="storia-location section">
        <div className="container">
          <div className="storia-location__grid">
            <motion.div 
              className="storia-location__content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-subtitle">La Nostra Casa</span>
              <h2>Nel Cuore di<br />Chieti</h2>
              <p>
                Il nostro ristorante si trova in Viale Principessa di Piemonte, 
                a pochi passi dal Teatro Marrucino e dalla Chiesa SS. Trinità. 
                Una posizione privilegiata nel centro storico di Chieti, facilmente 
                raggiungibile e con parcheggio nelle vicinanze.
              </p>
              <ul className="storia-location__features">
                <li>
                  <span className="icon">📍</span>
                  <span>Centro storico di Chieti</span>
                </li>
                <li>
                  <span className="icon">🎭</span>
                  <span>A due passi dal Teatro Marrucino</span>
                </li>
                <li>
                  <span className="icon">🅿️</span>
                  <span>Parcheggio nelle vicinanze</span>
                </li>
                <li>
                  <span className="icon">🍽️</span>
                  <span>90 coperti in più sale</span>
                </li>
                <li>
                  <span className="icon">❄️</span>
                  <span>Ambiente climatizzato</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="storia-location__map"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="storia-location__map-placeholder">
                <div className="map-icon">📍</div>
                <p>Viale Principessa di Piemonte 7</p>
                <p>66100 Chieti (CH)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
