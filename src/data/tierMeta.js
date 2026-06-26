export const tierMeta = {
  starter: {
    name: 'Starter',
    tagline: 'For individuals and small teams exploring AI automation.',
    badge: null,
    cta: 'Start free trial',
    features: [
      '3 neural pipelines',
      '100K semantic search queries / mo',
      '5 GB vector storage',
      'REST API access',
      'Community support',
    ],
  },
  pro: {
    name: 'Pro',
    tagline: 'For growing teams shipping AI features to production.',
    badge: 'Most popular',
    cta: 'Start free trial',
    features: [
      'Unlimited pipelines',
      '2M semantic search queries / mo',
      '50 GB vector storage',
      'Real-time insights dashboard',
      'GraphQL + webhooks',
      'Priority support (24 h SLA)',
    ],
  },
  enterprise: {
    name: 'Enterprise',
    tagline: 'For organizations with security, scale, and compliance needs.',
    badge: null,
    cta: 'Talk to sales',
    features: [
      'Everything in Pro',
      'Unlimited queries & storage',
      'SOC 2 Type II + HIPAA',
      'Custom RBAC & SSO',
      'Dedicated infra option',
      'SLA-backed uptime',
      'Dedicated success engineer',
    ],
  },
}
