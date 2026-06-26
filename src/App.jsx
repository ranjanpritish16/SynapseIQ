import Meta from './seo/Meta'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import FeatureShowcase from './components/sections/FeatureShowcase'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import CTASection from './components/sections/CTASection'
import FAQ from './components/sections/FAQ'

export default function App() {
  return (
    <>
      <Meta />
      <Navbar />
      <main>
        <Hero />
        <FeatureShowcase />
        <Pricing />
        <Testimonials />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
