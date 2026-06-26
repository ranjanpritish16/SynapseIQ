const LOCALE_MAP = {
  INR: 'en-IN',
  USD: 'en-US',
  EUR: 'de-DE',
}

export function formatCurrency(amount, currencyCode) {
  const locale = LOCALE_MAP[currencyCode] ?? 'en-US'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(amount)
}
