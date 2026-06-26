import { useContext, useMemo } from 'react'
import { PricingContext } from '../context/PricingContext'
import pricingMatrix from '../data/pricingMatrix'
import { applyAnnualDiscount } from '../utils/discount'
import { formatCurrency } from '../utils/formatCurrency'

export function usePricingCalculator(tierId) {
  const { currency, billingCycle } = useContext(PricingContext)

  return useMemo(() => {
    const tierData = pricingMatrix[tierId]
    if (!tierData) return { price: '—', suffix: '/mo' }

    const { monthlyBase } = tierData[currency] ?? tierData['USD']

    let amount, suffix
    if (billingCycle === 'annual') {
      amount = applyAnnualDiscount(monthlyBase)
      suffix = '/yr'
    } else {
      amount = monthlyBase
      suffix = '/mo'
    }

    return {
      price: formatCurrency(amount, currency),
      suffix,
      monthlyEquivalent:
        billingCycle === 'annual'
          ? formatCurrency(Math.round(amount / 12), currency) + '/mo'
          : null,
    }
  }, [tierId, currency, billingCycle])
}
