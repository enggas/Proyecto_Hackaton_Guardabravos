import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
    </div>
  )
}
