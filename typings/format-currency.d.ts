declare module 'format-currency' {
  interface Options {
    format?: string // %s => symbol, %v => value, %c => code
    code?: string
    symbol?: string
    locale?: string
    minimumFractionDigits?: number
    maximumFractionDigits?: number
    nanZero?: boolean
  }

  type FormatCurrencyFn = (value: any, options?: Options) => string

  type FormatCurrencyExport = FormatCurrencyFn

  const FormatCurrency: FormatCurrencyExport

  export = FormatCurrency
}
