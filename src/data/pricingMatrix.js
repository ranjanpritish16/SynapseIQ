/**
 * Multi-dimensional pricing matrix.
 * Each currency has its own independently set base rate (tariff-style),
 * NOT a conversion of a single USD price.
 * Only monthlyBase is stored — annual pricing is always derived.
 */
const pricingMatrix = {
  starter: {
    INR: { monthlyBase: 999 },
    USD: { monthlyBase: 19 },
    EUR: { monthlyBase: 17 },
  },
  pro: {
    INR: { monthlyBase: 2999 },
    USD: { monthlyBase: 49 },
    EUR: { monthlyBase: 44 },
  },
  enterprise: {
    INR: { monthlyBase: 7999 },
    USD: { monthlyBase: 129 },
    EUR: { monthlyBase: 119 },
  },
}

export default pricingMatrix
