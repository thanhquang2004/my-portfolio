import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}

export default App
