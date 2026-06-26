import { useContext } from 'react'
import { PricingContext } from '../../context/PricingContext'

export default function BillingToggle() {
  const { billingCycle, setBillingCycle } = useContext(PricingContext)
  const isAnnual = billingCycle === 'annual'

  return (
    <div className="flex items-center gap-3">
      <span className={`font-mono text-sm ${!isAnnual ? 'text-brand-mist' : 'text-brand-mist/40'}`}>Monthly</span>

      <button
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
        onClick={() => setBillingCycle(isAnnual ? 'monthly' : 'annual')}
        className="relative w-12 h-6 rounded-full border border-brand-deep/60 bg-brand-deep/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
        style={{ transition: `background-color var(--duration-micro) var(--ease-micro)` }}
      >
        <span
          className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-brand-gold"
          style={{
            transform: isAnnual ? 'translateX(24px)' : 'translateX(0)',
            transition: `transform var(--duration-micro) var(--ease-micro)`,
          }}
        />
      </button>

      <span className={`font-mono text-sm ${isAnnual ? 'text-brand-mist' : 'text-brand-mist/40'}`}>
        Annual
        <span className="ml-2 text-xs bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-full">20% off</span>
      </span>
    </div>
  )
}
