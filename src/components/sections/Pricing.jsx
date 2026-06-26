import { useScrollReveal } from '../../hooks/useScrollReveal'
import { PricingProvider } from '../../context/PricingContext'
import BillingToggle from '../pricing/BillingToggle'
import CurrencySwitcher from '../pricing/CurrencySwitcher'
import PricingCard from '../pricing/PricingCard'
import Container from '../layout/Container'

// PricingProvider scoped to just this section — currency/billing state
// never reaches Hero, Navbar, or any other section component
export default function Pricing() {
  const ref = useScrollReveal()

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-20 md:py-28 bg-brand-deep/20">
      <Container>
        <div ref={ref} data-reveal className="text-center mb-12">
          <p className="section-eyebrow">Pricing</p>
          <h2 id="pricing-heading" className="section-heading text-brand-mist mb-4">
            Simple, honest pricing
          </h2>
          <p className="font-sans text-brand-mist/50 max-w-lg mx-auto">
            Start free. Upgrade when you need to. No hidden fees, no per-seat surprises.
          </p>
        </div>

        <PricingProvider>
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <BillingToggle />
            <CurrencySwitcher />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {['starter', 'pro', 'enterprise'].map(tierId => (
              <PricingCard key={tierId} tierId={tierId} />
            ))}
          </div>

          <p className="text-center font-sans text-xs text-brand-mist/30 mt-8">
            All plans include a 14-day free trial. No credit card required for Starter and Pro.
          </p>
        </PricingProvider>
      </Container>
    </section>
  )
}
