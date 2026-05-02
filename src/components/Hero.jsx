import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { TechnicalAccents } from './TechnicalAccents';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './Hero.css';

const slides = [
  {
    id: 1,
    image: '/damietta1.png',
    title: 'شقق سكنية فاخرة',
    subtitle: 'استمتع بحياة الرفاهية في أرقى الوحدات السكنية المصممة بعناية لتناسب عائلتك.',
    btnText: 'استكشف الوحدات'
  },
  {
    id: 2,
    image: '/damietta2.png',
    title: 'شاليهات على البحر',
    subtitle: 'شاليهك الخاص في أرقى القرى السياحية، هدوء وجمال الطبيعة بين يديك.',
    btnText: 'شاهد الشاليهات'
  },
  {
    id: 3,
    image: '/damietta3.png',
    title: 'أراضٍ ومشاريع مستقبلية',
    subtitle: 'استثمر في المستقبل بامتلاك أرضك الخاصة في مناطق واعدة قبل بدء البناء.',
    btnText: 'اكتشف الفرص'
  }
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <TechnicalAccents />
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1500}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="hero__swiper"
        dir="rtl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero__slide">
              <div 
                className="hero__slide-bg" 
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="hero__slide-overlay"></div>
              </div>
              
              <div className="hero__content container">
                <motion.div
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1 }}
                >
                  <h1 className="hero__title">{slide.title}</h1>
                  <p className="hero__subtitle">{slide.subtitle}</p>
                  <a href="#communities" className="hero__btn">{slide.btnText}</a>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Quick Search Overlay (Technical Look) */}
      <div className="hero__finder">
        <div className="container">
          <motion.div 
            className="finder__box glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="finder__field">
              <span className="finder__label">الموقع الجغرافي</span>
              <select className="finder__select">
                <option>دمياط الجديدة</option>
                <option>العاصمة الإدارية</option>
                <option>الساحل الشمالي</option>
                <option>العين السخنة</option>
              </select>
            </div>
            <div className="finder__field">
              <span className="finder__label">فئة العقار</span>
              <select className="finder__select">
                <option>شقة سكنية</option>
                <option>فيلا مستقلة</option>
                <option>شاليه ساحلي</option>
                <option>أرض استثمارية</option>
              </select>
            </div>
            <div className="finder__field">
              <span className="finder__label">التنفيذ المعماري</span>
              <select className="finder__select">
                <option>جاهز للاستلام</option>
                <option>قيد الإنشاء</option>
                <option>مشاريع مستقبلية</option>
              </select>
            </div>
            <button className="finder__btn">
              <span>عرض الوحدات</span>
              <div className="btn-technical-mark">+</div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
