import { motion } from 'framer-motion'
import { TechnicalAccents } from './TechnicalAccents'
import './BookingCTA.css'

export default function BookingCTA() {
  return (
    <section className="booking-cta">
      <TechnicalAccents />
      <div className="container booking-cta__inner">
        <motion.div 
          className="booking-cta__content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="technical-tag">BOOKING_PORTAL_V2</div>
          <h2 className="booking-cta__title">احجز وحدتك أو أرضك أونلاين الآن!</h2>
          <p className="booking-cta__text">
            سواء كنت تبحث عن شقة سكنية، فيلا، شاليه ساحلي، أو أرض استثمارية، يمكنك الآن حجز اختيارك المفضل عبر منصتنا الإلكترونية بخطوات بسيطة وآمنة.
          </p>
          <a href="https://wa.me/201014700317" className="booking-cta__btn">
            <span>بدء عملية الحجز</span>
            <span className="btn-mark">→</span>
          </a>
        </motion.div>
        
        <motion.div 
          className="booking-cta__image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="image-technical-border"></div>
          <img src="/project_2.png" alt="احجز أونلاين" />
        </motion.div>
      </div>
    </section>
  )
}
