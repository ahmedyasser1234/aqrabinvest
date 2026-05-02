import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'
import './WhyUs.css'

const items = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 10v10l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'خبرة عريقة',
    desc: 'أكثر من 10 سنوات في السوق العقاري المصري والخليجي',
    num: 10,
    suffix: '+'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5L24.5 15.5H36L26.5 22L30 33L20 26.5L10 33L13.5 22L4 15.5H15.5L20 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'موثوقية تامة',
    desc: 'سجل نظيف من الالتزام بالمواعيد والمعايير المتفق عليها',
    num: 100,
    suffix: '%'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 20h12M14 14h12M14 26h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'شفافية كاملة',
    desc: 'تقارير دورية ووضوح تام في كل تعاملاتنا المالية والقانونية',
    num: 500,
    suffix: '+'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 28L16 20L22 26L32 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 14h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'عائد مضمون',
    desc: 'نضمن عوائد تنافسية بفضل خبرتنا في اختيار الفرص الاستثمارية',
    num: 50,
    suffix: '+'
  }
]

function Counter({ target, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const springVal = useSpring(motionVal, { duration: 1500 })

  useEffect(() => {
    if (isInView) {
      animate(motionVal, target, { duration: 1.5 })
    }
  }, [isInView, target, motionVal])

  useEffect(() => {
    return springVal.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix
      }
    })
  }, [springVal, suffix])

  return <span ref={ref} className="whyus__counter">0{suffix}</span>
}

export default function WhyUs() {
  return (
    <section className="whyus" id="whyus">
      <div className="whyus__bg-lines" />
      <div className="container">
        <motion.div
          className="whyus__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="whyus__eyebrow">ميزتنا التنافسية</span>
          <h2 className="section-title whyus__title">لماذا تختارنا؟</h2>
        </motion.div>

        <div className="whyus__grid">
          {items.map((item, i) => (
            <motion.div
              className="whyus__item"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="whyus__icon">{item.icon}</div>
              <Counter target={item.num} suffix={item.suffix} />
              <h3 className="whyus__item-title">{item.title}</h3>
              <p className="whyus__item-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
