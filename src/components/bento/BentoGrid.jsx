import { useContext, useCallback, memo } from 'react'
import { ActiveFeatureContext } from '../../context/ActiveFeatureContext'
import BentoCard from './BentoCard'

const GRID_CLASSES = [
  'col-span-2 row-span-2',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
]

// Stable wrapper so BentoCard's onActivate prop never changes identity
const BentoCardWrapper = memo(function BentoCardWrapper({ feature, index, isActive, setActiveIndex, className }) {
  const onActivate = useCallback(() => setActiveIndex(index), [setActiveIndex, index])
  return (
    <BentoCard
      feature={feature}
      isActive={isActive}
      onActivate={onActivate}
      className={className}
    />
  )
})

export default function BentoGrid({ features }) {
  const { activeIndex, setActiveIndex } = useContext(ActiveFeatureContext)

  return (
    <div
      className="grid grid-cols-4 gap-4"
      style={{ gridAutoRows: '180px' }}
    >
      {features.map((feature, index) => (
        <BentoCardWrapper
          key={feature.id}
          feature={feature}
          index={index}
          isActive={index === activeIndex}
          setActiveIndex={setActiveIndex}
          className={GRID_CLASSES[index] ?? ''}
        />
      ))}
    </div>
  )
}
