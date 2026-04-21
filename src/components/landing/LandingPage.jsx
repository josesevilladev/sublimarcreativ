import ArtisanSection from './ArtisanSection'
import FooterSection from './FooterSection'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import ProductsSection from './ProductsSection'
import ShowcaseSection from './ShowcaseSection'

function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ec] font-sans text-[#3d352f]">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ShowcaseSection />
      <ArtisanSection />
      <FooterSection />
    </main>
  )
}

export default LandingPage
