import { useEffect, useState } from 'react'
import Container from '../layout/Container'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-brand-ink"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{
            background: 'radial-gradient(circle, #FFC801, transparent 70%)',
            top: '-10%', left: '40%',
            animation: 'orbDrift 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, #FF9932, transparent 70%)',
            bottom: '5%', right: '5%',
            animation: 'orbDrift 18s ease-in-out infinite reverse',
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(var(--color-mist) 1px, transparent 1px), linear-gradient(90deg, var(--color-mist) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-mist/5 border border-brand-mist/10 font-mono text-xs text-brand-mist/60 mb-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 150ms ease-out 0ms, transform 150ms ease-out 0ms',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" aria-hidden="true" />
            Now in public beta · 2,400+ teams onboarded
          </div>

          <h1
            id="hero-heading"
            className="section-heading text-5xl md:text-6xl lg:text-7xl text-brand-mist mb-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(14px)',
              transition: 'opacity 350ms ease-in-out 50ms, transform 350ms ease-in-out 50ms',
            }}
          >
            Automate intelligence.{' '}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #FFC801 0%, #FF9932 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ship faster.
            </span>
          </h1>

          <p
            className="font-sans text-lg md:text-xl text-brand-mist/60 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 150ms ease-out 150ms, transform 150ms ease-out 150ms',
            }}
          >
            SynapseIQ gives your team a unified workspace to build AI pipelines, search any corpus semantically, and ship real-time insights — without stitching together five separate tools.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'scale(1)' : 'scale(0.97)',
              transition: 'opacity 150ms ease-out 250ms, transform 150ms ease-out 250ms',
            }}
          >
            <a href="#pricing" className="btn-primary text-base px-8 py-4">
              Start free — no card required
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#features" className="btn-secondary text-base px-8 py-4">
              See how it works
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            {['SOC 2 Type II', '99.99% uptime', '14-day free trial', 'GDPR compliant'].map(badge => (
              <div key={badge} className="flex items-center gap-2 font-mono text-xs text-brand-mist/40">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7l3 3 5-5" stroke="#FFC801" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
