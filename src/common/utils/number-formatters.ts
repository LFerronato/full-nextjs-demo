export function formatterCurrency(num: number | string, digits?: number, options?: Intl.NumberFormatOptions) {
  num = Number(num)

  const fixedDigits = digits === undefined ? {} : {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    ...fixedDigits,
    ...options,
  })
  return formatter.format(num)
}

export function formatterDecimal(num: number | string, digits?: number, options?: Intl.NumberFormatOptions) {
  num = parseFloat(String(num))
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits ?? 4,
    ...options,
  })
  return formatter.format(num)
}

export function formatterPercent(num: number | string, digits?: number, options?: Intl.NumberFormatOptions) {
  num = Number(num)
  const fixedDigits = digits === undefined ? {} : {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 1,
    ...fixedDigits,
    ...options,
  })
  return formatter.format(num)
}
