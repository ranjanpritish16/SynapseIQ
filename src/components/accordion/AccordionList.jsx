import { useContext } from 'react'
import { ActiveFeatureContext } from '../../context/ActiveFeatureContext'
import AccordionItem from '../ui/AccordionItem'

export default function AccordionList({ features }) {
  const { activeIndex, setActiveIndex } = useContext(ActiveFeatureContext)

  return (
    <div className="divide-y divide-brand-deep/40 rounded-2xl border border-brand-deep/40 overflow-hidden">
      {features.map((feature, index) => (
        <AccordionItem
          key={feature.id}
          title={feature.title}
          isOpen={index === activeIndex}
          onToggle={() => setActiveIndex(index === activeIndex ? null : index)}
        >
          <p className="mb-3">{feature.description}</p>
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-xl" style={{ color: feature.accent }}>{feature.stat}</span>
            <span className="text-xs text-brand-mist/40">{feature.statLabel}</span>
          </div>
        </AccordionItem>
      ))}
    </div>
  )
}
