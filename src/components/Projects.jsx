import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    name: 'برج النيل الفضي',
    location: 'القاهرة، مصر الجديدة',
    type: 'سكني فاخر',
    status: 'منجز',
    statusClass: 'done',
    units: '120 وحدة',
    year: '2023',
    img: '/project_1.png'
  },
  {
    name: 'مجمع الأندلس',
    location: 'الإسكندرية، العجمي',
    type: 'مجمع سكني',
    status: 'قيد التنفيذ',
    statusClass: 'active',
    units: '85 وحدة',
    year: '2025',
    img: '/project_2.png'
  },
  {
    name: 'مركز القمة التجاري',
    location: 'الرياض، حي العليا',
    type: 'تجاري',
    status: 'منجز',
    statusClass: 'done',
    units: '40 مكتب',
    year: '2022',
    img: '/project_3.png'
  },
  {
    name: 'فيلات الغروب',
    location: 'الساحل الشمالي',
    type: 'فلل فاخرة',
    status: 'قريباً',
    statusClass: 'soon',
    units: '24 فيلا',
    year: '2026',
    img: '/project_4.png'
  }
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="projects__eyebrow">أعمالنا</span>
          <h2 className="section-title">مشاريعنا المميزة</h2>
        </motion.div>

        <div className="projects__grid">
          {projects.map((proj, i) => (
            <motion.div
              className="projects__card"
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover="hover"
            >
              {/* Image with overlay */}
              <div className="projects__card-img">
                <img src={proj.img} alt={proj.name} className="projects__card-img-src" />
                <div className="projects__card-num">0{i + 1}</div>
              </div>

              {/* Hover overlay */}
              <motion.div
                className="projects__overlay"
                variants={{
                  hover: { y: 0, opacity: 1 }
                }}
                initial={{ y: '100%', opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <p className="projects__overlay-type">{proj.type}</p>
                <h3 className="projects__overlay-name">{proj.name}</h3>
                <p className="projects__overlay-location">📍 {proj.location}</p>
                <p className="projects__overlay-units">{proj.units}</p>
                <a
                  href="https://wa.me/201014700317"
                  target="_blank"
                  rel="noreferrer"
                  className="projects__overlay-cta"
                >
                  اعرف أكثر
                </a>
              </motion.div>

              {/* Card footer */}
              <div className="projects__card-footer">
                <div>
                  <h3 className="projects__card-name">{proj.name}</h3>
                  <p className="projects__card-location">{proj.location}</p>
                </div>
                <span className={`projects__badge projects__badge--${proj.statusClass}`}>
                  {proj.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
