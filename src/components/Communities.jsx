import { motion } from 'framer-motion'
import { SectionTitleTechnical, TechnicalAccents } from './TechnicalAccents'
import './Communities.css'

const communities = [
  {
    name: 'شقق رويال ريزيدنس',
    location: 'الحي المتميز، دمياط الجديدة',
    desc: 'شقق سكنية فاخرة بمساحات متنوعة تبدأ من 120م، تسليم فوري وتشطيب الترا سوبر لوكس.',
    img: '/project_1.png',
    link: '#apartments'
  },
  {
    name: 'فلل النخبة المستقلة',
    location: 'منطقة الشاليهات، دمياط الجديدة',
    desc: 'فلل مستقلة بتصاميم معمارية فريدة وخصوصية تامة مع حمام سباحة خاص وجاردن لكل فيلا.',
    img: '/project_2.png',
    link: '#villas'
  },
  {
    name: 'كمبوند سكني متكامل',
    location: 'الحي الرابع، دمياط الجديدة',
    desc: 'مجمع سكني يضم مزيجاً من الشقق والدوبلكس مع كافة المرافق والخدمات الترفيهية.',
    img: '/hero_bg.png',
    link: '#damietta'
  }
]

export default function Communities() {
  return (
    <section className="communities" id="communities">
      <TechnicalAccents />
      <div className="container">
        <SectionTitleTechnical 
          title="المجتمعات العمرانية المتكاملة" 
          subtitle="مشروعاتنا" 
        />
        <motion.p 
          className="section-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          نقدم فرصاً استثمارية استثنائية في مجتمعات عمرانية متكاملة الخدمات بمعايير عالمية.
        </motion.p>

        <div className="communities__grid">
          {communities.map((item, i) => (
            <motion.div 
              className="community-card" 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="community-card__img">
                <img src={item.img} alt={item.name} />
                <div className="community-card__overlay">
                  <a href={item.link} className="community-card__btn">اقرأ المزيد</a>
                </div>
              </div>
              <div className="community-card__info">
                <h3 className="community-card__name">{item.name}</h3>
                <p className="community-card__loc">📍 {item.location}</p>
                <p className="community-card__text">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
