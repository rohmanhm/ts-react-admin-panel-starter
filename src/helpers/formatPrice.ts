import * as FormatCurrency from 'format-currency'

/**
 * Format price to IDR Format
 * e.g. from 10000 to 10.000
 *
 * @param value number
 */
export function formatPrice (
  value: number,
  options?: { prefix?: string; noPrefix?: boolean }
) {
  const defaultOptions = {
    prefix: 'Rp '
  }
  const finalOptions = {
    ...defaultOptions,
    ...options
  }
  const currencyOptions = {
    format: '%v',
    locale: 'id-ID'
  }

  if (options && options.noPrefix) {
    finalOptions.prefix = ''
  }

  const currency = FormatCurrency(value, currencyOptions).split(',')

  return `${finalOptions.prefix}${currency[0]}`
}
