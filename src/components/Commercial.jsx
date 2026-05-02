import { motion } from 'framer-motion'
import './Commercial.css'

const centers = [
  {
    name: 'مجمع واجهة المحلات',
    location: 'الرحاب، القاهرة',
    desc: 'أكبر مجمع تجاري مفتوح في المنطقة يضم أرقى العلامات التجارية العالمية في بيئة تسوق فريدة.',
    img: '/project_3.png'
  },
  {
    name: 'إيست هوب التجاري',
    location: 'المنطقة المركزية، دمياط الجديدة',
    desc: 'مركز إداري وطبي متكامل يقدم حلولاً ذكية للأعمال والرعاية الصحية في قلب مجتمعاتنا.',
    img: '/project_1.png'
  },
  {
    name: 'أول سيزونز بارك',
    location: 'شرق القاهرة',
    desc: 'وجهة تسوق عصرية توفر مجموعة متنوعة من المتاجر والمطاعم والخدمات الترفيهية طوال العام.',
    img: '/hero_bg.png'
  }
]

export default function Commercial() {
  return (
    <section className="commercial" id="commercial">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">القطاع التجاري</span>
          <h2 className="section-title">مراكز تسوق وأعمال عالمية</h2>
          <p className="section-desc">خلق وجهات تجارية وإدارية تمثل نقاط جذب حيوية للمجتمعات المحيطة.</p>
        </div>

        <div className="commercial__grid">
          {centers.map((center, i) => (
            <motion.div 
              className="center-card" 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="center-card__img">
                <img src={center.img} alt={center.name} />
              </div>
              <div className="center-card__content">
                <h3 className="center-card__title">{center.name}</h3>
                <p className="center-card__loc">📍 {center.location}</p>
                <p className="center-card__text">{center.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
