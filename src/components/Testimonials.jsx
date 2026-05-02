import { motion } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    quote: 'تعاملت مع فريق أقربلك للاستثمار في مشروع استثماري ضخم، وكانت التجربة استثنائية من حيث الاحترافية والشفافية. العائد فاق توقعاتي بفارق كبير.',
    name: 'أحمد محمد الرشيدي',
    title: 'رجل أعمال، دمياط الجديدة',
    initials: 'أر'
  },
  {
    quote: 'أفضل شركة تعاملت معها في مجال العقارات. من الاستشارة الأولى حتى استلام الوحدة، كل شيء كان منظماً ودقيقاً. أنصح الجميع بالتعامل معهم.',
    name: 'سارة عبد العزيز',
    title: 'مديرة استثمار، المنصورة',
    initials: 'سع'
  },
  {
    quote: 'استثمرت معهم في مشروعين متتاليين وحققت عوائد ممتازة في كلا المشروعين. الثقة والمصداقية هما أهم ما يميز هذا الفريق.',
    name: 'خالد إبراهيم الشمري',
    title: 'مستثمر عقاري، دمياط',
    initials: 'خش'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="testimonials__eyebrow">آراء عملائنا</span>
          <h2 className="section-title">ماذا يقول شركاؤنا</h2>
        </motion.div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <motion.div
              className="testimonials__card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="testimonials__quote-mark">"</div>
              <p className="testimonials__quote">{t.quote}</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar">{t.initials}</div>
                <div>
                  <p className="testimonials__name">{t.name}</p>
                  <p className="testimonials__title">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
