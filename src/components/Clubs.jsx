import { motion } from 'framer-motion'
import './Clubs.css'

const clubs = [
  {
    name: 'نادي مدينتي الرياضي',
    desc: 'مساحة 200 فدان توفر أحدث المرافق الرياضية والاجتماعية المتكاملة لجميع أفراد الأسرة.',
    icon: '⚽'
  },
  {
    name: 'نادي الرحاب الاجتماعي',
    desc: 'موقع مركزي يقدم خدمات ترفيهية واجتماعية تعزز روح المجتمع داخل مدننا.',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    name: 'نادي الغولف العالمي',
    desc: 'ملعب غولف 18 حفرة صممه أشهر المصممين العالميين يقدم تجربة رياضية استثنائية.',
    icon: '⛳'
  }
]

export default function Clubs() {
  return (
    <section className="clubs" id="clubs">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">الأندية والمرافق</span>
          <h2 className="section-title">رفع مستوى جودة الحياة</h2>
          <p className="section-desc">تخصيص مساحات شاسعة للأندية الرياضية والاجتماعية كجزء حيوي من مجتمعاتنا.</p>
        </div>

        <div className="clubs__grid">
          {clubs.map((club, i) => (
            <motion.div 
              className="club-card" 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="club-card__icon">{club.icon}</div>
              <h3 className="club-card__title">{club.name}</h3>
              <p className="club-card__text">{club.desc}</p>
              <a href="#join" className="club-card__btn">انضم إلينا</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
