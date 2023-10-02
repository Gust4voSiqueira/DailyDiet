import { mealGetAll } from '../meal/mealGetAll'

export async function getPercentage(): Promise<number> {
  try {
    const mealsStored = await mealGetAll()

    if (mealsStored.length === 0) {
      return 0
    }

    const mealsInDiet = Object.values(mealsStored).filter(
      (meal) => meal.isDiet,
    ).length

    return (mealsInDiet * 100) / mealsStored.length
  } catch (error) {
    throw error
  }
}
