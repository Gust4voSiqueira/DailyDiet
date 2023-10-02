export function convertDateToString(date: Date) {
  const day = new Date(date).getDate()
  const month = new Date(date).getMonth() + 1
  const year = new Date(date).getFullYear()

  const diaFormatado = day < 10 ? '0' + day : day.toString()
  const mesFormatado = month < 10 ? '0' + month : month.toString()

  return diaFormatado + '/' + mesFormatado + '/' + year
}

export function convertDateToHour(date: Date) {
  const hour = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')

  return `${hour}:${minutes}`
}
