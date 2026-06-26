import { memo } from 'react'
import { CogIcon, ChartPieIcon, LinkSolidIcon } from '../ui/icons'

const ICONS = {
  cpu: <CogIcon className="w-[22px] h-[22px]" />,
  chart: <ChartPieIcon className="w-[22px] h-[22px]" />,
  search: (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
    </svg>
  ),
  lock: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="5" y="10" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10V7a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="14.5" r="1" fill="currentColor" />
    </svg>
  ),
  link: <LinkSolidIcon className="w-[22px] h-[22px]" />,
}

const BentoCard = memo(function BentoCard({ feature, isActive, onActivate, className = '' }) {
  return (
    <article
      className={`relative flex flex-col justify-between p-6 rounded-2xl border cursor-pointer overflow-hidden ${className} ${isActive
        ? 'border-brand-gold/70 bg-brand-deep/70'
        : 'border-brand-deep/50 bg-brand-deep/30 hover:border-brand-deep'
        }`}
      style={{
        transition: `border-color var(--duration-micro) var(--ease-micro), background-color var(--duration-micro) var(--ease-micro), box-shadow var(--duration-micro) var(--ease-micro)`,
        boxShadow: isActive ? '0 0 0 1px rgba(255,200,1,0.2), 0 8px 32px rgba(255,200,1,0.08)' : 'none',
      }}
      onMouseEnter={onActivate}
      onClick={onActivate}
      aria-pressed={isActive}
    >
      {/* Accent glow when active */}
      {isActive && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ background: `radial-gradient(ellipse at top left, ${feature.accent}12, transparent 60%)` }}
          aria-hidden="true"
        />
      )}

      <div>
        <div
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
          style={{
            background: isActive ? `${feature.accent}22` : 'rgba(255,255,255,0.04)',
            color: isActive ? feature.accent : 'var(--color-mist)',
            transition: `background var(--duration-micro) var(--ease-micro), color var(--duration-micro) var(--ease-micro)`,
          }}
        >
          {ICONS[feature.icon]}
        </div>
        <h3 className="font-mono font-semibold text-brand-mist mb-2">{feature.title}</h3>
        <p
          className="font-sans text-sm leading-relaxed"
          style={{
            color: isActive ? 'rgba(241,246,244,0.75)' : 'rgba(241,246,244,0.45)',
            transition: `color var(--duration-micro) var(--ease-micro)`,
          }}
        >
          {feature.description}
        </p>
      </div>

      {/* Stat badge */}
      <div className="mt-6">
        <span
          className="font-mono font-bold text-2xl"
          style={{ color: isActive ? feature.accent : 'rgba(241,246,244,0.3)', transition: `color var(--duration-micro) var(--ease-micro)` }}
        >
          {feature.stat}
        </span>
        <span className="font-sans text-xs text-brand-mist/30 ml-2">{feature.statLabel}</span>
      </div>
    </article>
  )
})

export default BentoCard
