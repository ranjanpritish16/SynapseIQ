const faqs = [
  {
    id: 'faq-1',
    question: 'Does SynapseIQ train models on my data?',
    answer:
      'No. Your data is yours. We never use customer data to train or fine-tune any model. All processing happens in isolated compute environments, and data is encrypted at rest and in transit.',
  },
  {
    id: 'faq-2',
    question: 'Can I self-host SynapseIQ?',
    answer:
      'Enterprise customers can opt into a dedicated infrastructure deployment in their own cloud account (AWS, GCP, or Azure). Contact our sales team to discuss your requirements.',
  },
  {
    id: 'faq-3',
    question: 'What counts as a "semantic search query"?',
    answer:
      'A single call to our /search endpoint with any query string counts as one query. Bulk indexing operations do not count toward your query quota.',
  },
  {
    id: 'faq-4',
    question: 'How does annual billing work?',
    answer:
      'Annual plans are billed as a single upfront payment at a 20% discount off the monthly rate. You can switch between monthly and annual at any renewal date.',
  },
  {
    id: 'faq-5',
    question: 'Is there a free trial?',
    answer:
      'Yes — Starter and Pro plans include a 14-day free trial with no credit card required. Enterprise trials are available on request.',
  },
]

export default faqs
