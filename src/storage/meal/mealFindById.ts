import { mealGetAll } from './mealGetAll'

export async function mealFindById(idMeal: string) {
  try {
    const storage = await mealGetAll()

    return Object.values(storage).find((item) => item.id === idMeal)
  } catch (error) {
    throw error
  }
}
