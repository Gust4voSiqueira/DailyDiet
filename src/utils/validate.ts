export function formatDate(newValue: string) {
  const date = newValue.replace(/\//g, '')

  if (date.length <= 8) {
    return date.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
  }

  return newValue
}

export function formatHour(newValue: string) {
  const hour = newValue.replace(/\D/g, '')

  if (hour.length > 2) {
    return hour.substring(0, 2) + ':' + hour.substring(2)
  }

  return newValue
}
