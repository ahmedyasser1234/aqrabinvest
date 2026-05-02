import { motion } from 'framer-motion'
import './News.css'

const news = [
  {
    title: 'مجموعة أقربلك للاستثمار تطلق حزمة جديدة من الفرص الاستثمارية العقارية في دمياط الجديدة.',
    date: '30 مارس 2026',
    category: 'أخبار الشركة',
    img: '/hero_bg.png'
  },
  {
    title: 'إطلاق المرحلة الثانية من مشروع سيليا العاصمة الإدارية بمزايا استثمارية حصرية.',
    date: '15 مارس 2026',
    category: 'مشروعات',
    img: '/project_2.png'
  },
  {
    title: 'افتتاح مجمع إيست هوب التجاري في دمياط الجديدة لتقديم أرقى الخدمات الإدارية والطبية.',
    date: '05 مارس 2026',
    category: 'القطاع التجاري',
    img: '/project_3.png'
  }
]

export default function News() {
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">المركز الإعلامي</span>
          <h2 className="section-title">آخر الأخبار والأحداث</h2>
          <p className="section-desc">ابقَ على اطلاع بأحدث التطورات والإنجازات في مجموعتنا.</p>
        </div>

        <div className="news__grid">
          {news.map((item, i) => (
            <motion.div 
              className="news-card" 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="news-card__img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="news-card__content">
                <div className="news-card__meta">
                  <span className="news-card__cat">{item.category}</span>
                  <span className="news-card__date">{item.date}</span>
                </div>
                <h3 className="news-card__title">{item.title}</h3>
                <a href="#news-link" className="news-card__link">اقرأ المزيد ←</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
