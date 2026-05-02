import { motion } from 'framer-motion'
import { SectionTitleTechnical } from './TechnicalAccents'
import './Coastal.css'

const chalets = [
  {
    name: 'شاليه لوتس ريزورت',
    location: 'منطقة الشاليهات، دمياط الجديدة',
    desc: 'شاليهات صف أول على البحر بتصاميم عصرية ومساحات خضراء، استمتع بالباي وتملك وحدتك الآن في قلب دمياط الجديدة.',
    img: '/project_4.png'
  },
  {
    name: 'لاجون فيو دمياط الجديدة',
    location: 'ساحل دمياط الجديدة، المنطقة الغربية',
    desc: 'شاليهات بإطلالات مباشرة على البحر، استمتع بالهدوء والخصوصية في أرقى المناطق الساحلية بالمدينة.',
    img: '/project_3.png'
  },
  {
    name: 'شاليه مارينا بريز',
    location: 'المنطقة الساحلية، دمياط الجديدة',
    desc: 'شاليهات كاملة التشطيب والمرافق في أهدأ بقاع المدينة، مع إمكانية التقسيط لمدد طويلة.',
    img: '/project_1.png'
  }
]

export default function Coastal() {
  return (
    <section className="coastal" id="coastal">
      <div className="container">
        <SectionTitleTechnical 
          title="شاليهات ومنتجعات سياحية" 
          subtitle="القطاع الساحلي" 
        />
        <motion.p 
          className="section-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          امتلك شاليهك الخاص في أرقى الوجهات الساحلية بمصر، لقضاء أمتع العطلات.
        </motion.p>

        <div className="coastal__list">
          {chalets.map((chalet, i) => (
            <motion.div 
              className="chalet-card" 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="chalet-card__img">
                <img src={chalet.img} alt={chalet.name} />
              </div>
              <div className="chalet-card__content">
                <h3 className="chalet-card__title">{chalet.name}</h3>
                <p className="chalet-card__loc">📍 {chalet.location}</p>
                <p className="chalet-card__text">{chalet.desc}</p>
                <a href="#book" className="chalet-card__link">استكشف الشاليه ←</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
