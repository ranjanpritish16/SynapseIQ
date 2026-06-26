import { memo } from 'react'
import { tierMeta } from '../../data/tierMeta'
import PriceDisplay from './PriceDisplay'

const PricingCard = memo(function PricingCard({ tierId }) {
  const tier = tierMeta[tierId]
  const isPopular = tierId === 'pro'

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 ${isPopular
        ? 'border-brand-gold bg-brand-deep/60'
        : 'border-brand-deep/60 bg-brand-deep/30'
        }`}
    >
      {tier.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-ink font-mono text-xs font-bold px-4 py-1 rounded-full">
          {tier.badge}
        </span>
      )}

      <div className="mb-6">
        <h3 className="font-mono font-bold text-xl text-brand-mist mb-1">{tier.name}</h3>
        <p className="font-sans text-sm text-brand-mist/50">{tier.tagline}</p>
      </div>

      {/* PriceDisplay is the ONLY thing that re-renders when currency/billing changes */}
      <PriceDisplay tierId={tierId} />

      <a
        href={tierId === 'enterprise' ? 'mailto:sales@synapseiq.ai' : undefined}
        onClick={
          tierId !== 'enterprise'
            ? (e) => {
              e.preventDefault()
              alert(`${tier.name} plan selected — signup flow coming soon!`)
            }
            : undefined
        }
        className={`mt-6 w-full text-center py-3 rounded-full font-mono font-semibold text-sm transition-all ${isPopular
            ? 'bg-brand-gold text-brand-ink hover:bg-brand-amber'
            : 'border border-brand-gold/40 text-brand-mist hover:border-brand-gold hover:text-brand-gold'
          }`}
        style={{ transitionDuration: 'var(--duration-micro)' }}
      >
        {tier.cta}
      </a>

      <ul className="mt-8 space-y-3 flex-1 list-none p-0 m-0">
        {tier.features.map(f => (
          <li key={f} className="flex items-start gap-3 text-sm font-sans text-brand-mist/70">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
              <circle cx="8" cy="8" r="7" stroke="#FFC801" strokeWidth="1.2" />
              <path d="M5 8l2.5 2.5L11 5" stroke="#FFC801" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
})

export default PricingCard
