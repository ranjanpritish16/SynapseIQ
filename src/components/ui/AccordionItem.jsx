import { memo } from 'react'
import { ChevronDownIcon } from '../ui/icons'

const AccordionItem = memo(function AccordionItem({ title, children, isOpen, onToggle, headingLevel = 'h3' }) {
  const Heading = headingLevel

  return (
    <div className="border-b border-brand-deep/60">
      <Heading>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        >
          <span className="font-mono font-semibold text-brand-mist group-hover:text-brand-gold transition-colors" style={{ transitionDuration: 'var(--duration-micro)' }}>
            {title}
          </span>
          <ChevronDownIcon
            className="w-[18px] h-[18px]"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: `transform var(--duration-micro) var(--ease-micro)`,
              flexShrink: 0,
              color: 'var(--color-gold)',
            }}
          />
        </button>
      </Heading>

      <div className={`accordion-panel ${isOpen ? 'open' : ''}`}>
        <div className="pb-5 text-sm text-brand-mist/70 font-sans leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
})

export default AccordionItem
