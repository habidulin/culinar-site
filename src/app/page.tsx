import Hero from '@/components/sections/Hero'
// import Benefits from '@/components/sections/Benefits'
// import ProductCategories from '@/components/sections/ProductCategories'
import ProductGallery from '@/components/sections/ProductGallery'
import HowItWorks from '@/components/sections/HowItWorks'
import About from '@/components/sections/About'
import Team from '@/components/sections/Team'
import Reviews from '@/components/sections/Reviews'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGallery />
      <HowItWorks />
      <About />
      <Team />
      <Reviews />
      <Contact />
    </>
  )
}