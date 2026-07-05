import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Business from './components/Business'
import Brands from './components/Brands'
import Projects from './components/Projects'
import Process from './components/Process'
import History from './components/History'
import Culture from './components/Culture'
import Recruit from './components/Recruit'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import MobileCta from './components/MobileCta'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Business />
        <Brands />
        <Projects />
        <Process />
        <History />
        <Culture />
        <Recruit />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
    </>
  )
}
