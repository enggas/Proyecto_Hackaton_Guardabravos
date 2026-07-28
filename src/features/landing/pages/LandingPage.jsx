import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { FeaturedProducts } from '../components/FeaturedProducts'
import { ProducerCta } from '../components/ProducerCta'
import { Footer } from '../components/Footer'
import { MobileTopBar } from '../components/mobile/MobileTopBar'
import { MobileHero } from '../components/mobile/MobileHero'
import { MobileFeaturedProducts } from '../components/mobile/MobileFeaturedProducts'
import { MobileHowItWorks } from '../components/mobile/MobileHowItWorks'

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
        <MobileFeaturedProducts />
        <MobileHowItWorks />
      </div>

      <ProducerCta />
      <Footer />
    </div>
  )
}
