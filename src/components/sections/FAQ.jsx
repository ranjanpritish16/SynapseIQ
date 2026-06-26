import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Container from '../layout/Container'
import AccordionItem from '../ui/AccordionItem'
import faqs from '../../data/faqs'

export default function FAQ() {
  const [openId, setOpenId] = useState(null)
  const ref = useScrollReveal()

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 md:py-28 bg-brand-ink">
      <Container>
        <div ref={ref} data-reveal className="text-center mb-14">
          <p className="section-eyebrow">FAQ</p>
          <h2 id="faq-heading" className="section-heading text-brand-mist mb-4">
            Questions we get a lot
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map(faq => (
            <AccordionItem
              key={faq.id}
              title={faq.question}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              headingLevel="h3"
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
      </Container>
    </section>
  )
}
