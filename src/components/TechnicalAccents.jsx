import { motion } from 'framer-motion'

export const TechnicalAccents = () => {
  return (
    <div className="technical-accents" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
      {/* Corner Plus Signs */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'var(--primary)', opacity: 0.4, fontSize: '12px', fontFamily: 'monospace' }}>+</div>
      <div style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--primary)', opacity: 0.4, fontSize: '12px', fontFamily: 'monospace' }}>+</div>
      <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'var(--primary)', opacity: 0.4, fontSize: '12px', fontFamily: 'monospace' }}>+</div>
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', color: 'var(--primary)', opacity: 0.4, fontSize: '12px', fontFamily: 'monospace' }}>+</div>

    </div>
  )
}

export const SectionTitleTechnical = ({ title, subtitle }) => {
  return (
    <div className="section-header">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">{subtitle}</span>
        <h2 className="section-title">{title}</h2>
        <div style={{ width: '60px', height: '2px', background: 'var(--primary)', marginBottom: '20px' }}></div>
      </motion.div>
    </div>
  )
}
