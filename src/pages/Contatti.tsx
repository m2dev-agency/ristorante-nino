import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import './Contatti.css'

interface FormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  message: string
  type: 'prenotazione' | 'informazioni' | 'evento'
}

export default function Contatti() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
    type: 'prenotazione'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="contatti-page">
      {/* Hero */}
      <section className="contatti-hero">
        <div className="contatti-hero__bg"></div>
        <div className="contatti-hero__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Contatti</span>
            <h1>Prenota il Tuo Tavolo</h1>
            <p className="contatti-hero__text">
              Vieni a trovarci nel cuore di Chieti o contattaci per qualsiasi informazione
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contatti-main section">
        <div className="container">
          <div className="contatti-grid">
            {/* Contact Info */}
            <motion.div 
              className="contatti-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Dove Siamo</h2>
              
              <div className="info-card">
                <div className="info-card__icon">📍</div>
                <div className="info-card__content">
                  <h4>Indirizzo</h4>
                  <p>Viale Principessa di Piemonte 7</p>
                  <p>66100 Chieti (CH)</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card__icon">📞</div>
                <div className="info-card__content">
                  <h4>Telefono</h4>
                  <p><a href="tel:+390871063781">+39 0871 63781</a></p>
                  <p className="info-card__note">Chiamaci per prenotare</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card__icon">🕐</div>
                <div className="info-card__content">
                  <h4>Orari di Apertura</h4>
                  <ul className="hours-list">
                    <li><span>Lunedì</span><span className="closed">Chiuso</span></li>
                    <li><span>Martedì - Sabato</span><span>9:00-15:00 / 19:30-22:00</span></li>
                    <li><span>Domenica</span><span>9:00-16:00</span></li>
                  </ul>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card__icon">🚗</div>
                <div className="info-card__content">
                  <h4>Come Raggiungerci</h4>
                  <p>Centro storico di Chieti, a pochi passi dal Teatro Marrucino. Parcheggio disponibile nelle vicinanze.</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <a 
                  href="tel:+390871063781" 
                  className="quick-action quick-action--primary"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Chiama Ora
                </a>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Viale+Principessa+di+Piemonte+7+Chieti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-action"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                  Indicazioni
                </a>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div 
              className="contatti-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="contatti-form-card">
                <h2>Prenota Online</h2>
                <p className="contatti-form-intro">
                  Compila il form per richiedere una prenotazione. 
                  Ti contatteremo per confermare.
                </p>

                {submitted ? (
                  <motion.div 
                    className="form-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="form-success__icon">✓</div>
                    <h3>Richiesta Inviata!</h3>
                    <p>
                      Grazie per la tua richiesta. Ti contatteremo al più presto 
                      per confermare la prenotazione.
                    </p>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setSubmitted(false)}
                    >
                      Nuova Richiesta
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="booking-form">
                    {/* Request Type */}
                    <div className="form-group">
                      <label className="form-label">Tipo di Richiesta</label>
                      <div className="form-radio-group">
                        {[
                          { value: 'prenotazione', label: 'Prenotazione Tavolo' },
                          { value: 'informazioni', label: 'Informazioni' },
                          { value: 'evento', label: 'Evento/Cerimonia' }
                        ].map((option) => (
                          <label 
                            key={option.value} 
                            className={`form-radio ${formData.type === option.value ? 'form-radio--active' : ''}`}
                          >
                            <input
                              type="radio"
                              name="type"
                              value={option.value}
                              checked={formData.type === option.value}
                              onChange={(e) => handleChange('type', e.target.value as FormData['type'])}
                            />
                            {option.label}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Name & Phone */}
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Nome e Cognome *</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Mario Rossi"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Telefono *</label>
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="+39 333 1234567"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="mario.rossi@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    </div>

                    {formData.type === 'prenotazione' && (
                      <>
                        {/* Date & Time */}
                        <div className="form-row">
                          <div className="form-group">
                            <label className="form-label">Data *</label>
                            <input
                              type="date"
                              className="form-input"
                              value={formData.date}
                              onChange={(e) => handleChange('date', e.target.value)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Orario Preferito *</label>
                            <select
                              className="form-select"
                              value={formData.time}
                              onChange={(e) => handleChange('time', e.target.value)}
                              required
                            >
                              <option value="">Seleziona...</option>
                              <option value="12:00">12:00</option>
                              <option value="12:30">12:30</option>
                              <option value="13:00">13:00</option>
                              <option value="13:30">13:30</option>
                              <option value="14:00">14:00</option>
                              <option value="19:30">19:30</option>
                              <option value="20:00">20:00</option>
                              <option value="20:30">20:30</option>
                              <option value="21:00">21:00</option>
                              <option value="21:30">21:30</option>
                            </select>
                          </div>
                        </div>

                        {/* Guests */}
                        <div className="form-group">
                          <label className="form-label">Numero di Persone *</label>
                          <select
                            className="form-select"
                            value={formData.guests}
                            onChange={(e) => handleChange('guests', e.target.value)}
                            required
                          >
                            <option value="">Seleziona...</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                              <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'persone'}</option>
                            ))}
                            <option value="9+">9+ persone (gruppo)</option>
                          </select>
                        </div>
                      </>
                    )}

                    {/* Message */}
                    <div className="form-group">
                      <label className="form-label">
                        {formData.type === 'evento' ? 'Descrivi il tuo evento *' : 'Note o richieste particolari'}
                      </label>
                      <textarea
                        className="form-textarea"
                        placeholder={
                          formData.type === 'evento' 
                            ? 'Tipo di evento, numero di partecipanti, data indicativa...'
                            : 'Esigenze particolari, allergie, seggiolini...'
                        }
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required={formData.type === 'evento'}
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-lg booking-form__submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Invio in corso...
                        </>
                      ) : (
                        <>
                          Invia Richiesta
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="form-note">
                      * Campi obbligatori. Ti contatteremo telefonicamente per confermare la prenotazione.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contatti-map">
        <div className="contatti-map__placeholder">
          <div className="map-content">
            <div className="map-icon">📍</div>
            <h3>Ristorante Nino</h3>
            <p>Viale Principessa di Piemonte 7, 66100 Chieti</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Ristorante+Nino+Chieti"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Apri in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="contatti-delivery section">
        <div className="container">
          <div className="delivery-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-subtitle">Anche a Casa Tua</span>
              <h2>Ordina su Deliveroo</h2>
              <p>
                Non puoi venire a trovarci? I nostri piatti sono disponibili anche 
                per il delivery tramite Deliveroo. Consegna in circa 32 minuti.
              </p>
              <a 
                href="https://deliveroo.it/it/menu/chieti/chieti-centro/ristorante-nino"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ordina su Deliveroo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
