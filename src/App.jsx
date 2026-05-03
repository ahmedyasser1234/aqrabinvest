import './styles/global.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Communities from './components/Communities'
import Coastal from './components/Coastal'
import LandInvestment from './components/LandInvestment'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { SectionDivider } from './components/SectionDivider'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import News from './components/News'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        
        <SectionDivider type="white-to-dark" />
        <WhyUs />

        <SectionDivider type="dark-to-white" />
        <div id="apartments">
          <Communities />
        </div>
        
        <SectionDivider type="white-to-dark" />
        <Services />

        <div id="coastal">
          <Coastal />
        </div>

        <SectionDivider type="dark-to-white" />
        <Testimonials />

        <SectionDivider type="white-to-dark" />
        <div id="lands">
          <LandInvestment />
        </div>

        <SectionDivider type="dark-to-white" />
        <News />

        <SectionDivider type="white-to-dark" />
        <BookingCTA />

        <SectionDivider type="dark-to-white" />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <SectionDivider type="white-to-dark" />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
