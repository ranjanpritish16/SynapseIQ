import { useState, useContext, useEffect, useRef } from 'react'
import { PricingContext } from '../../context/PricingContext'
import { ChevronDownIcon } from '../ui/icons'

const CURRENCIES = [
  { code: 'INR', label: '₹ INR' },
  { code: 'USD', label: '$ USD' },
  { code: 'EUR', label: '€ EUR' },
]

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useContext(PricingContext)
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const current = CURRENCIES.find(c => c.code === currency) ?? CURRENCIES[0]

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex items-center gap-2 font-mono text-sm text-brand-mist border border-brand-deep/60 rounded-full px-4 py-2 hover:border-brand-gold/60 transition-colors"
        style={{ transitionDuration: 'var(--duration-micro)' }}
      >
        {current.label}
        <ChevronDownIcon
          className="w-3.5 h-3.5"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: `transform var(--duration-micro) var(--ease-micro)`,
          }}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Select currency"
          className="absolute right-0 top-full mt-2 w-36 bg-brand-deep border border-brand-deep/60 rounded-xl overflow-hidden z-20 list-none p-1 m-0"
          style={{ animation: `fadeIn var(--duration-micro) var(--ease-micro)` }}
        >
          {CURRENCIES.map(c => (
            <li key={c.code} role="option" aria-selected={c.code === currency}>
              <button
                onClick={() => { setCurrency(c.code); setIsOpen(false) }}
                className={`w-full text-left px-4 py-2 font-mono text-sm rounded-lg transition-colors ${c.code === currency
                  ? 'text-brand-gold bg-brand-gold/10'
                  : 'text-brand-mist/70 hover:text-brand-mist hover:bg-brand-mist/5'
                  }`}
                style={{ transitionDuration: 'var(--duration-micro)' }}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
