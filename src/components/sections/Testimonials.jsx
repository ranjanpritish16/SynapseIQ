import { useScrollReveal } from '../../hooks/useScrollReveal'
import Container from '../layout/Container'
import testimonials from '../../data/testimonials'

function TestimonialCard({ t }) {
  const ref = useScrollReveal(0.1)
  return (
    <article
      ref={ref}
      data-reveal
      className="bg-white border border-brand-sage rounded-2xl p-8 flex flex-col gap-6"
    >
      <blockquote className="font-sans text-brand-ink/80 leading-relaxed text-[15px]">
        "{t.quote}"
      </blockquote>
      <footer className="flex items-center gap-4 mt-auto">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm flex-shrink-0"
          style={{ background: `${t.accentColor}22`, color: t.accentColor }}
          aria-hidden="true"
        >
          {t.avatar}
        </div>
        <div>
          <p className="font-mono font-semibold text-sm text-brand-ink">{t.name}</p>
          <p className="font-sans text-xs text-brand-ink/50">{t.title}</p>
        </div>
      </footer>
    </article>
  )
}

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="py-20 md:py-28 bg-brand-mist">
      <Container>
        <div ref={ref} data-reveal className="text-center mb-14">
          <p className="section-eyebrow" style={{ color: 'var(--color-amber)' }}>What teams say</p>
          <h2 id="testimonials-heading" className="section-heading text-brand-ink mb-4">
            Trusted by builders who ship
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(t => <TestimonialCard key={t.id} t={t} />)}
        </div>
      </Container>
    </section>
  )
}
