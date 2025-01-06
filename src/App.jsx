import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import ProcessFlow from './components/ProcessFlow'
import Price from './components/Price'
import Footer from './components/Footer'
 

function App() {
  

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <ProcessFlow />
      <Price />
      <Footer />
      </div>
      
      
    </>
  )
}

export default App
