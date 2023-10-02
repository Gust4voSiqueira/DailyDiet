import { IMealStorage } from '../storage/meal/mealGetAll'

export function compareDates(a: IMealStorage, b: IMealStorage): number {
  const dataA = new Date(a.date)
  const dataB = new Date(b.date)

  if (dataA > dataB) {
    return -1
  } else if (dataA < dataB) {
    return 1
  } else {
    return 0
  }
}
