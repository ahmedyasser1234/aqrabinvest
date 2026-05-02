import { useState } from 'react'
import { Link } from 'react-scroll'
import './Footer.css'

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)

  const toggleModal = () => setShowPrivacy(!showPrivacy)

  return (
    <footer className="footer">
      <div className="container footer__inner">
        
        <div className="footer__col footer__col--brand">
          <div className="footer__logo">
            <img src="/logo.png" alt="Logo" className="footer__logo-img" style={{ height: '60px', width: 'auto' }} />
          </div>
          <p className="footer__about">
            مجموعة أقربلك للاستثمار هي شركة رائدة في قطاع الاستثمار العقاري في دمياط الجديدة، نسعى لتقديم أفضل الحلول السكنية والاستثمارية بمعايير عالمية تناسب تطلعات عملائنا.
          </p>
          <div className="footer__social">
            <a href="#fb" title="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#tw" title="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="#ig" title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#ln" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">روابط سريعة</h3>
          <ul className="footer__links">
            <li><Link to="home" smooth={true} offset={-120} duration={800}>الرئيسية</Link></li>
            <li><Link to="about" smooth={true} offset={-120} duration={800}>عن الشركة</Link></li>
            <li><Link to="communities" smooth={true} offset={-120} duration={800}>المجتمعات السكنية</Link></li>
            <li><Link to="coastal" smooth={true} offset={-120} duration={800}>شاليهات ساحلية</Link></li>
            <li><Link to="lands" smooth={true} offset={-120} duration={800}>أراضي استثمارية</Link></li>
            <li><Link to="services" smooth={true} offset={-120} duration={800}>خدماتنا</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">تواصل معنا</h3>
          <ul className="footer__contact">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>شارع المرور 52, دمياط, دمياط الجديدة, مصر</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span dir="ltr">01014700317</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>info@aqrablkmedia.com</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>ساعات العمل: 9 ص - 5 م</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; 2026 جميع الحقوق محفوظة لمجموعة أقربلك للاستثمار.</p>
          
          <div className="footer__developer">
            Developed by <a href="https://cobracompany.netlify.app/" target="_blank" rel="noopener noreferrer">COBRA</a>
          </div>

          <div className="footer__bottom-links">
            <button onClick={toggleModal} className="footer__modal-trigger">سياسة الخصوصية</button>
            <span>|</span>
            <button onClick={toggleModal} className="footer__modal-trigger">الشروط والأحكام</button>
          </div>
        </div>
      </div>

      {showPrivacy && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>&times;</button>
            <h2 className="modal-title">سياسة الخصوصية</h2>
            <div className="modal-body">
              <p>نحن في مجموعة أقربلك للاستثمار نلتزم بحماية خصوصية بياناتك. جميع المعلومات التي يتم جمعها من خلال الموقع تُستخدم فقط لتحسين تجربتك وتقديم خدمات أفضل.</p>
              <br />
              <p>تلتزم الشركة بعدم مشاركة أي بيانات شخصية مع أطراف ثالثة دون موافقة مسبقة، ونحرص على استخدام أحدث تقنيات التشفير لضمان أمن معلوماتك.</p>
              <br />
              <p>باستخدامك لموقعنا، فأنت توافق على سياسات التعامل مع البيانات المتبعة لدينا لضمان أفضل خدمة استثمارية عقارية في مصر.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
