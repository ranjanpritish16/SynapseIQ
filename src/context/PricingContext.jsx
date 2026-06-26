import { createContext, useState, useMemo } from 'react'

export const PricingContext = createContext(null)

export function PricingProvider({ children }) {
  const [currency, setCurrency]         = useState('INR')
  const [billingCycle, setBillingCycle] = useState('monthly')

  const value = useMemo(
    () => ({ currency, billingCycle, setCurrency, setBillingCycle }),
    [currency, billingCycle]
  )

  return (
    <PricingContext.Provider value={value}>
      {children}
    </PricingContext.Provider>
  )
}
