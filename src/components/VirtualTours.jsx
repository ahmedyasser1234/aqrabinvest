import { motion } from 'framer-motion'
import './VirtualTours.css'

const tours = [
  { name: 'جولة في مدينتي', img: '/project_1.png', link: '#' },
  { name: 'جولة في سيليا', img: '/project_2.png', link: '#' },
  { name: 'جولة في الرحاب', img: '/project_3.png', link: '#' },
  { name: 'جولة في الربوة', img: '/project_4.png', link: '#' }
]

export default function VirtualTours() {
  return (
    <section className="virtual-tours" id="virtual-tours">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">جولات افتراضية</span>
          <h2 className="section-title">استكشف مدننا بتقنية 360 درجة</h2>
          <p className="section-desc">عش تجربة واقعية داخل مشروعاتنا من أي مكان وفي أي وقت.</p>
        </div>

        <div className="tours__grid">
          {tours.map((tour, i) => (
            <motion.a 
              href={tour.link} 
              className="tour-card" 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="tour-card__img">
                <img src={tour.img} alt={tour.name} />
                <div className="tour-card__overlay">
                  <span className="tour-card__icon">🔄 360°</span>
                </div>
              </div>
              <h3 className="tour-card__name">{tour.name}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
