import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { FeaturedProducts } from '../components/FeaturedProducts'
import { ProducerCta } from '../components/ProducerCta'
import { Footer } from '../components/Footer'

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedProducts />
      <ProducerCta />
      <Footer />
    </div>
  )
}
