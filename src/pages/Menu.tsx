import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './Menu.css'

type Category = 'antipasti' | 'primi' | 'secondi' | 'pizze' | 'dolci' | 'bevande'

interface MenuItem {
  name: string
  description: string
  price: string
  tags?: string[]
  signature?: boolean
}

interface MenuData {
  [key: string]: {
    title: string
    icon: string
    items: MenuItem[]
  }
}

const menuData: MenuData = {
  antipasti: {
    title: 'Antipasti',
    icon: '🥗',
    items: [
      {
        name: 'Affettati Misti Abruzzesi',
        description: 'Selezione di salumi tipici del territorio: ventricina, salsiccia secca, lonza e capocollo',
        price: '€12',
        tags: ['Tradizione']
      },
      {
        name: 'Bruschette della Casa',
        description: 'Tris di bruschette con pomodoro, nduja e crema di carciofi',
        price: '€8'
      },
      {
        name: 'Pallotte Cacio e Ova',
        description: 'Le classiche polpette della tradizione teatina con formaggio e uova',
        price: '€10',
        tags: ['Vegetariano']
      },
      {
        name: 'Antipasto dello Chef',
        description: 'Selezione giornaliera di antipasti caldi e freddi (min. 2 persone)',
        price: '€15 p.p.'
      }
    ]
  },
  primi: {
    title: 'Primi Piatti',
    icon: '🍝',
    items: [
      {
        name: 'Saccottini Pera e Gorgonzola',
        description: 'Il nostro piatto iconico: pasta fresca ripiena con pera Williams e gorgonzola DOP',
        price: '€14',
        signature: true,
        tags: ['Signature', 'Vegetariano']
      },
      {
        name: 'Pasta alla Chitarra',
        description: 'Con ragù abruzzese di carne mista, preparato secondo tradizione',
        price: '€12',
        tags: ['Tradizione']
      },
      {
        name: 'Anellini alla Pecorara',
        description: 'Ricetta tipica teatina con sugo di castrato e pecorino',
        price: '€13',
        tags: ['Tradizione']
      },
      {
        name: 'Spaghetti allo Scoglio',
        description: 'Con frutti di mare freschi del giorno',
        price: '€16',
        tags: ['Pesce']
      },
      {
        name: 'Risotto del Giorno',
        description: 'Chiedere al personale per la proposta del giorno',
        price: '€14'
      },
      {
        name: 'Gnocchi della Nonna',
        description: 'Gnocchi fatti in casa con pomodoro e basilico o ragù',
        price: '€11',
        tags: ['Fatto in Casa']
      }
    ]
  },
  secondi: {
    title: 'Secondi Piatti',
    icon: '🥩',
    items: [
      {
        name: 'Arrosticini Artigianali',
        description: 'Preparati a mano ogni giorno con carne di pecora selezionata (10 pz)',
        price: '€14',
        signature: true,
        tags: ['Signature', 'Grill']
      },
      {
        name: 'Agnello ai Ferri',
        description: 'Costolette di agnello alla brace con patate al forno',
        price: '€18',
        tags: ['Tradizione', 'Grill']
      },
      {
        name: 'Baccalà alla Chietina',
        description: 'Disponibile il martedì - ricetta tradizionale con peperoni e olive',
        price: '€16',
        tags: ['Speciale Martedì', 'Pesce']
      },
      {
        name: 'Grigliata Mista',
        description: 'Costata di manzo, salsiccia, arrosticini e pollo alla brace',
        price: '€22',
        tags: ['Grill']
      },
      {
        name: 'Pesce del Venerdì',
        description: 'Su ordinazione - pesce fresco dell\'Adriatico preparato a piacere',
        price: 'S.Q.',
        tags: ['Speciale Venerdì', 'Pesce']
      },
      {
        name: 'Tagliata di Manzo',
        description: 'Con rucola, grana e aceto balsamico',
        price: '€20',
        tags: ['Grill']
      }
    ]
  },
  pizze: {
    title: 'Pizzeria',
    icon: '🍕',
    items: [
      {
        name: 'Margherita',
        description: 'Pomodoro San Marzano, mozzarella fior di latte, basilico fresco',
        price: '€7',
        tags: ['Vegetariano']
      },
      {
        name: 'Diavola',
        description: 'Pomodoro, mozzarella, salame piccante calabrese',
        price: '€9'
      },
      {
        name: 'Abruzzese',
        description: 'Mozzarella, ventricina, cipolla rossa di Tropea',
        price: '€10',
        tags: ['Tradizione']
      },
      {
        name: 'Quattro Formaggi',
        description: 'Mozzarella, gorgonzola, fontina, parmigiano',
        price: '€10',
        tags: ['Vegetariano']
      },
      {
        name: 'Capricciosa',
        description: 'Pomodoro, mozzarella, prosciutto cotto, funghi, olive, carciofi',
        price: '€11'
      },
      {
        name: 'Pizza della Casa',
        description: 'Mozzarella, salsiccia, friarielli, provola affumicata',
        price: '€12',
        signature: true,
        tags: ['Signature']
      }
    ]
  },
  dolci: {
    title: 'Dolci',
    icon: '🍰',
    items: [
      {
        name: 'Torta Triplo Cioccolato',
        description: 'Il nostro dessert signature con tre strati di cioccolato fondente, latte e bianco',
        price: '€7',
        signature: true,
        tags: ['Signature']
      },
      {
        name: 'Tiramisù della Casa',
        description: 'Ricetta tradizionale con mascarpone fresco e caffè espresso',
        price: '€6'
      },
      {
        name: 'Panna Cotta',
        description: 'Con coulis di frutti di bosco o caramello salato',
        price: '€5'
      },
      {
        name: 'Sorbetto Limone',
        description: 'Sorbetto artigianale al limone di Sorrento',
        price: '€4',
        tags: ['Senza Lattosio']
      },
      {
        name: 'Dolci Abruzzesi Misti',
        description: 'Selezione di dolci tipici: bocconotti, sfogliatelle, cicerchiata',
        price: '€8',
        tags: ['Tradizione']
      }
    ]
  },
  bevande: {
    title: 'Bevande',
    icon: '🍷',
    items: [
      {
        name: 'Montepulciano d\'Abruzzo DOC',
        description: 'Vino rosso della casa - bottiglia o calice',
        price: '€15 / €4'
      },
      {
        name: 'Trebbiano d\'Abruzzo DOC',
        description: 'Vino bianco della casa - bottiglia o calice',
        price: '€14 / €4'
      },
      {
        name: 'Cerasuolo d\'Abruzzo',
        description: 'Rosato tipico abruzzese - bottiglia',
        price: '€16'
      },
      {
        name: 'Birre Artigianali',
        description: 'Selezione di birre locali - 33cl o 50cl',
        price: '€5 / €7'
      },
      {
        name: 'Acqua Minerale',
        description: 'Naturale o frizzante - 75cl',
        price: '€2.50'
      },
      {
        name: 'Caffè Espresso',
        description: 'Miscela arabica 100%',
        price: '€1.50'
      }
    ]
  }
}

const categories: { id: Category; label: string }[] = [
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'primi', label: 'Primi' },
  { id: 'secondi', label: 'Secondi' },
  { id: 'pizze', label: 'Pizze' },
  { id: 'dolci', label: 'Dolci' },
  { id: 'bevande', label: 'Bevande' }
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('antipasti')

  return (
    <div className="menu-page">
      {/* Hero */}
      <section className="menu-hero">
        <div className="menu-hero__bg"></div>
        <div className="menu-hero__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Il Nostro Menù</span>
            <h1>Sapori d'Abruzzo</h1>
            <p className="menu-hero__text">
              Piatti della tradizione preparati con ingredienti freschi e di qualità
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Notices */}
      <section className="menu-notices">
        <div className="container">
          <div className="notices-grid">
            <div className="notice notice--special">
              <span className="notice__icon">🌾</span>
              <div>
                <strong>Menù Celiaci</strong>
                <p>Chiedi al personale per le opzioni senza glutine</p>
              </div>
            </div>
            <div className="notice">
              <span className="notice__icon">🐟</span>
              <div>
                <strong>Pesce del Venerdì</strong>
                <p>Specialità di pesce fresco su ordinazione</p>
              </div>
            </div>
            <div className="notice">
              <span className="notice__icon">🥡</span>
              <div>
                <strong>Anche da Asporto</strong>
                <p>Tutti i piatti disponibili per il take-away</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="menu-content section">
        <div className="container">
          {/* Category Navigation */}
          <div className="menu-nav">
            <div className="menu-nav__wrapper">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`menu-nav__btn ${activeCategory === cat.id ? 'menu-nav__btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="menu-nav__icon">{menuData[cat.id].icon}</span>
                  <span className="menu-nav__label">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="menu-items"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="menu-items__header">
                <span className="menu-items__icon">{menuData[activeCategory].icon}</span>
                <h2>{menuData[activeCategory].title}</h2>
              </div>

              <div className="menu-items__grid">
                {menuData[activeCategory].items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className={`menu-item ${item.signature ? 'menu-item--signature' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="menu-item__content">
                      <div className="menu-item__header">
                        <h3 className="menu-item__name">
                          {item.signature && <span className="signature-star">★</span>}
                          {item.name}
                        </h3>
                        <span className="menu-item__price">{item.price}</span>
                      </div>
                      <p className="menu-item__desc">{item.description}</p>
                      {item.tags && (
                        <div className="menu-item__tags">
                          {item.tags.map((tag) => (
                            <span key={tag} className="menu-item__tag">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Menu Footer */}
      <section className="menu-footer">
        <div className="container">
          <div className="menu-footer__content">
            <p>
              <strong>Allergeni:</strong> Si prega di informare il personale di eventuali allergie o intolleranze alimentari.
            </p>
            <p>
              <strong>Coperto:</strong> €2,00 a persona • <strong>Servizio:</strong> Non incluso
            </p>
            <p className="menu-footer__note">
              I prezzi sono indicativi e possono variare in base alla stagionalità degli ingredienti.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
