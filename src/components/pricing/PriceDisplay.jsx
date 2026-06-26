import { useContext, useRef, useEffect } from 'react'
import { PricingContext } from '../../context/PricingContext'
import { usePricingCalculator } from '../../hooks/usePricingCalculator'

// PriceDisplay intentionally NOT memoized — it SHOULD re-render when context changes.
// It is the only component allowed to re-render on pricing context changes.
export default function PriceDisplay({ tierId }) {
  const { currency, billingCycle } = useContext(PricingContext)
  const { price, suffix, monthlyEquivalent } = usePricingCalculator(tierId)
  const spanRef = useRef(null)
  const isFirst = useRef(true)

  // Flash animation on value change (skip first render)
  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return }
    const el = spanRef.current
    if (!el) return
    el.style.animation = 'none'
    el.offsetHeight // force reflow
    el.style.animation = 'priceFlash var(--duration-micro) var(--ease-micro)'
  }, [currency, billingCycle])

  return (
    <div>
      <div className="flex items-end gap-1">
        <span
          ref={spanRef}
          className="font-mono font-bold text-4xl text-brand-mist"
          style={{ lineHeight: 1 }}
        >
          {price}
        </span>
        <span className="font-mono text-sm text-brand-mist/50 mb-1">{suffix}</span>
      </div>
      {monthlyEquivalent && (
        <p className="font-sans text-xs text-brand-gold mt-1">
          ≈ {monthlyEquivalent} · 20% off
        </p>
      )}
    </div>
  )
}
