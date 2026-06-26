import { useScrollReveal } from '../../hooks/useScrollReveal'
import Container from '../layout/Container'

export default function CTASection() {
  const ref = useScrollReveal()

  return (
    <section aria-labelledby="cta-heading" className="py-20 md:py-28 bg-brand-deep/30">
      <Container>
        <div
          ref={ref}
          data-reveal
          className="relative text-center rounded-3xl border border-brand-gold/20 bg-brand-deep/40 p-12 md:p-20 overflow-hidden"
        >
          {/* Gold radial glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse at center top, rgba(255,200,1,0.08), transparent 60%)' }}
          />

          <p className="section-eyebrow relative z-10">Get started today</p>
          <h2 id="cta-heading" className="section-heading text-brand-mist mb-6 max-w-2xl mx-auto relative z-10">
            Your first AI pipeline in under an hour
          </h2>
          <p className="font-sans text-brand-mist/50 mb-10 max-w-lg mx-auto relative z-10">
            14-day free trial. No credit card required. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="#pricing" className="btn-primary text-base px-10 py-4">
              Start building free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="mailto:sales@synapseiq.ai" className="btn-secondary text-base px-10 py-4">Talk to sales</a>
          </div>
        </div>
      </Container>
    </section>
  )
}
