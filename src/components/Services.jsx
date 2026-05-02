import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M9 21V9l3-3 3 3v12M9 12h.01M15 12h.01M9 16h.01M15 16h.01"/>
      </svg>
    ),
    title: 'استثمار عقاري',
    desc: 'نقدم حلولاً استثمارية متميزة في مشاريع سكنية وتجارية متكاملة تحقق أعلى العوائد لعملائنا.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"/>
      </svg>
    ),
    title: 'إدارة الاستثمار',
    desc: 'ندير محافظ استثمارية عقارية متنوعة لتحقيق أفضل العوائد مع إدارة المخاطر باحترافية.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 7V3h-4M3 17v4h4M21 3L11 13M3 21l10-10"/>
      </svg>
    ),
    title: 'البيع والتأجير',
    desc: 'نقدم خدمات شاملة لبيع وتأجير العقارات السكنية والتجارية بإجراءات سريعة وآمنة.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'الاستشارات العقارية',
    desc: 'فريق من الخبراء المتخصصين يقدم استشارات مخصصة لمساعدتك في اتخاذ أفضل القرارات الاستثمارية.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l9 4.91V17L12 22l-9-4.91V6.91L12 2zM12 22V12M12 12l9-4.91M12 12L3 7.09"/>
      </svg>
    ),
    title: 'إدارة المشاريع',
    desc: 'نشرف على تنفيذ المشاريع من الفكرة إلى التسليم بدقة متناهية ووفق الجداول الزمنية المحددة.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'الاستثمار الدولي',
    desc: 'نفتح أمامك أبواب الاستثمار في الأسواق العقارية الدولية الواعدة بخبرة محلية وعالمية.'
  }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="services__eyebrow">ما نقدمه</span>
          <h2 className="section-title">خدماتنا الاستثمارية</h2>
          <p className="services__subtitle">
            حلول استثمارية متكاملة مصممة لتلبية احتياجاتك وتحقيق أهدافك المالية
          </p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, i) => (
            <motion.div className="services__card" key={i} variants={cardVariants}>
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.desc}</p>
              <div className="services__card-arrow">←</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
