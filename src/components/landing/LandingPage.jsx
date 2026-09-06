import useScrollReveal from '../../hooks/useScrollReveal'
import ArtisanSection from './ArtisanSection'
import FooterSection from './FooterSection'
import HeroSection from './HeroSection'
import MarqueeBand from './MarqueeBand'
import Navbar from './Navbar'
import ProductsSection from './ProductsSection'
import ShowcaseSection from './ShowcaseSection'

function LandingPage() {
  useScrollReveal()

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-parchment font-sans text-ink">
      <Navbar />
      <HeroSection />
      <MarqueeBand />
      <ProductsSection />
      <ShowcaseSection />
      <ArtisanSection />
      <FooterSection />
    </main>
  )
}

export default LandingPage
