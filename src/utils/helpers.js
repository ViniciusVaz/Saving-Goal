export const mapMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const currencyToFloat = val =>
	parseFloat(
		val
			.replace('R$ ', '')
			.replace('.', '')
			.replace(',', '.')
	)

export const getMoneyMask = (value = '', prefix = '', decimals = 2) => {
  if (value === '') return value
	if (typeof value === 'number') value = value.toFixed(decimals) + ''
	value = value.replace(/\D/g, '')
	let int = parseInt(value.replace(/\D/g, ''), 10)
	if (isNaN(int)) return ''

	if (value.length === 1 && !!decimals) {
		value = `0,${'0'.repeat(decimals - 1)}${value}`
	} else if (value.length >= decimals && !!decimals) {
		value = value.replace(new RegExp(`(\\d{${decimals}}$)`), ',$1')
	}

	if (!!decimals) {
		value = currencyToFloat(value)
	}

	value = Intl.NumberFormat('en-US', {
		minimumFractionDigits: decimals,
	}).format(value)

	return value.length === 0 ? '' : `${prefix}${value}`
}

export const getMonthDiffy = (d1, d2) => {
  let date1 = new Date(d1);
  let date2 = new Date(d2);

  let years =  date2.getFullYear() - date1.getFullYear();
  let months =(years * 12) + (date2.getMonth() - date1.getMonth()) ;

  return months;
}
