export const ANNUAL_DISCOUNT_RATE = 0.2

/**
 * Given a monthly base price, returns the annual total with discount applied.
 * Annual price = monthlyBase × 12 × (1 - ANNUAL_DISCOUNT_RATE)
 */
export function applyAnnualDiscount(monthlyBase) {
  return monthlyBase * 12 * (1 - ANNUAL_DISCOUNT_RATE)
}
