import { compareDates } from '@utils/compareDates'
import { IMealStorage, mealGetAll } from '../meal/mealGetAll'
import { StatisticsDTO } from './StatisticsDto'
import { getPercentage } from './getPercentage'

export async function getStatistics(): Promise<StatisticsDTO> {
  try {
    const percentage = await getPercentage()
    const mealsTotal = await mealGetAll()

    const mealsInDiet = mealsTotal.filter((meal) => meal.isDiet).length
    const mealsOffTheDiet = mealsTotal.filter((meal) => !meal.isDiet).length
    const longestSequence = onDivideArray(
      mealsTotal.sort((a, b) => compareDates(a, b)),
    )

    return {
      percentage,
      mealsTotal: mealsTotal.length,
      mealsInDiet,
      mealsOffTheDiet,
      longestSequence,
    }
  } catch (error) {
    throw error
  }
}

function onDivideArray(array: Array<IMealStorage>) {
  let currentCount = 0
  let biggestCount = 0

  for (let cont = 0; cont < array.length; cont++) {
    if (array[cont].isDiet) {
      currentCount++

      if (currentCount > biggestCount) {
        biggestCount = currentCount
      }
    } else {
      currentCount = 0
    }
  }

  return biggestCount
}
