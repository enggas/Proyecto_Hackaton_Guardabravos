import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { FeaturedProducts } from '../components/FeaturedProducts'
import { ProducerCta } from '../components/ProducerCta'
import { Footer } from '../components/Footer'
import { MobileTopBar } from '../components/mobile/MobileTopBar'
import { MobileHero } from '../components/mobile/MobileHero'

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="hidden md:block">
        <Navbar />
        <Hero />
        <HowItWorks />
        <FeaturedProducts />
      </div>

      <div className="md:hidden">
        <MobileTopBar />
        <MobileHero />
      </div>

      <ProducerCta />
      <Footer />
    </div>
  )
}
