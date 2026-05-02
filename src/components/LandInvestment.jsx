import { motion } from 'framer-motion'
import { SectionTitleTechnical, TechnicalAccents } from './TechnicalAccents'
import './LandInvestment.css'

const lands = [
  {
    name: 'أراضي الحي المتميز - دمياط الجديدة',
    desc: 'قطع أراضي استثمارية في أرقى أحياء مدينة دمياط الجديدة، جاهزة للبناء بتراخيص كاملة ومواقع متميزة.',
    size: 'مساحات تبدأ من 450م',
    img: '/hero_bg.png'
  },
  {
    name: 'أراضي بيت الوطن - دمياط الجديدة',
    desc: 'فرصة استثمارية ذهبية في امتداد مدينة دمياط الجديدة، أراضٍ مخصصة للفيلات والعمائر السكنية بمواقع استراتيجية.',
    size: 'مساحات متنوعة',
    img: '/project_2.png'
  },
  {
    name: 'أراضي استثمارية - المنطقة الساحلية',
    desc: 'مواقع متميزة جداً للاستثمار السياحي في قلب دمياط الجديدة، جاهزة للتخصيص الفوري بمساحات كبيرة.',
    size: 'مساحات تبدأ من 1000م',
    img: '/project_4.png'
  }
]

export default function LandInvestment() {
  return (
    <section className="lands" id="lands">
      <TechnicalAccents />
      <div className="container">
        <SectionTitleTechnical 
          title="أراضٍ وفرص استثمارية كبرى" 
          subtitle="الاستثمار العقاري" 
        />
        <motion.p 
          className="section-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          امتلك أرضك الخاصة الآن قبل بدء العمران، لضمان أعلى عائد استثماري في المستقبل.
        </motion.p>

        <div className="lands__grid">
          {lands.map((land, i) => (
            <motion.div 
              className="land-card" 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="land-card__img">
                <img src={land.img} alt={land.name} />
                <div className="land-card__badge">فرصة استثمارية</div>
              </div>
              <div className="land-card__content">
                <h3 className="land-card__title">{land.name}</h3>
                <p className="land-card__size">📏 {land.size}</p>
                <p className="land-card__text">{land.desc}</p>
                <button className="land-card__btn">طلب التفاصيل</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
