import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert('شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.')
        form.reset()
      })
      .catch((error) => alert('عذراً، حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.'))
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__wrapper glass">
          <div className="contact__info">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow">تواصل معنا</span>
              <h2 className="section-title">هل أنت مستعد لبدء استثمارك؟</h2>
              <p className="contact__desc">
                فريقنا من الخبراء العقاريين جاهز لمساعدتك في كل خطوة. اترك لنا رسالة وسنقوم بالتواصل معك في أسرع وقت.
              </p>

              <div className="contact__details">
                <div className="contact__detail-item">
                  <span className="contact__detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <div>
                    <h4>الموقع</h4>
                    <p>دمياط الجديدة، المنطقة المركزية</p>
                  </div>
                </div>
                <div className="contact__detail-item">
                  <span className="contact__detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </span>
                  <div>
                    <h4>اتصل بنا</h4>
                    <p dir="ltr">+20 101 470 0317</p>
                  </div>
                </div>
                <div className="contact__detail-item">
                  <span className="contact__detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <div>
                    <h4>البريد الإلكتروني</h4>
                    <p>info@aqrablk-invest.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="contact__form-container">
            <motion.form 
              className="contact__form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label>الاسم الكامل</label>
                <input type="text" name="name" placeholder="أدخل اسمك هنا" required />
              </div>
              <div className="form-group">
                <label>رقم الهاتف</label>
                <input type="tel" name="phone" placeholder="01xxxxxxxxx" required />
              </div>
              <div className="form-group">
                <label>نوع الاستثمار المهتم به</label>
                <select name="type">
                  <option>شقة سكنية</option>
                  <option>فيلا فاخرة</option>
                  <option>شاليه ساحلي</option>
                  <option>أرض استثمارية</option>
                </select>
              </div>
              <div className="form-group">
                <label>رسالتك</label>
                <textarea name="message" rows="4" placeholder="كيف يمكننا مساعدتك؟"></textarea>
              </div>
              <button type="submit" className="contact__submit">
                إرسال الرسالة
                <span className="btn-technical-mark">+</span>
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
