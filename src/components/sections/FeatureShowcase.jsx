import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useBreakpoint } from '../../hooks/useBreakpoint'
import { ActiveFeatureProvider } from '../../context/ActiveFeatureContext'
import BentoGrid from '../bento/BentoGrid'
import AccordionList from '../accordion/AccordionList'
import Container from '../layout/Container'
import features from '../../data/features'

// ActiveFeatureProvider wraps ABOVE the Bento/Accordion conditional
// so that state survives the component swap on resize
export default function FeatureShowcase() {
  const ref = useScrollReveal()
  const breakpoint = useBreakpoint()
  const isDesktop = breakpoint === 'desktop'

  return (
    <section id="features" aria-labelledby="features-heading" className="py-20 md:py-28 bg-brand-ink">
      <Container>
        <div ref={ref} data-reveal className="text-center mb-14">
          <p className="section-eyebrow">What's inside</p>
          <h2 id="features-heading" className="section-heading text-brand-mist mb-4">
            Every tool your AI team needs
          </h2>
          <p className="font-sans text-brand-mist/50 max-w-xl mx-auto">
            Build, deploy, and monitor AI workflows from one workspace. No integrations tax, no vendor lock-in.
          </p>
        </div>

        {/* Context declared above the conditional — state persists across resize */}
        <ActiveFeatureProvider>
          {isDesktop ? (
            <BentoGrid features={features} />
          ) : (
            <AccordionList features={features} />
          )}
        </ActiveFeatureProvider>
      </Container>
    </section>
  )
}
