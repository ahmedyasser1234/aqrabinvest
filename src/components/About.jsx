import { motion } from 'framer-motion'
import { SectionTitleTechnical, TechnicalAccents } from './TechnicalAccents'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <TechnicalAccents />
      <div className="container about__inner">
        
        <div className="about__corporate">
          <SectionTitleTechnical 
            title="نحن مجموعة رائدة متخصصة في الاستثمار العقاري" 
            subtitle="نبذة عن الشركة" 
          />
          
          <motion.p 
            className="about__para"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            مجموعة أقربلك للاستثمار هي كيان رائد يمتلك خبرة واسعة في توفير أفضل الحلول العقارية في مدينة دمياط الجديدة. نحن متخصصون في بيع الشقق السكنية الفاخرة، الفلل المستقلة، والشاليهات الساحلية، بالإضافة إلى توفير فرص استثمارية فريدة في أراضٍ متميزة ستكون نواة لمشاريع عمرانية كبرى في المستقبل.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="about__stats"
          >
            <div className="stat-item">
              <span className="stat-num">15+</span>
              <span className="stat-label">سنة خبرة</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-label">وحدة مباعة</span>
            </div>
          </motion.div>

          <motion.a 
            href="#full-about" 
            className="about__readmore"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            استكشف رؤيتنا
          </motion.a>
        </div>

        <div className="about__ceo">
          <motion.div 
            className="about__ceo-box glass"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="about__ceo-title">كلمة الإدارة العليا</h3>
            <p className="about__ceo-text">
              "على مدار سنوات من العمل الدؤوب، أصبحت مجموعتنا مساهماً وطنياً فاعلاً يقود الاستثمار العقاري، ويشارك في إرساء معايير غير مسبوقة في هذا المجال لتقديم نموذج يحتذى به للرقي وجودة الحياة."
            </p>
            <span className="about__ceo-name">الرئيس التنفيذي والعضو المنتدب</span>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
