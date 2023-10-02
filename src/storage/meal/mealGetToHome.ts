import { compareDates } from '@utils/compareDates'
import { mealGetAll } from './mealGetAll'
import { IMeal } from '@screens/Home/sections/ListMealSection'
import { convertDateToString } from '@utils/convertDate'

export async function mealGetToHome() {
  try {
    const response = await mealGetAll()

    const groupedArray: Record<string, IMeal[]> = {}

    response
      .sort((a, b) => compareDates(a, b))
      .forEach((item: any) => {
        const dateConverted = convertDateToString(item.date)
        if (!groupedArray[dateConverted]) {
          groupedArray[dateConverted] = []
        }
        groupedArray[dateConverted].push(item)
      })

    const outputArray: IMeal[][] = Object.values(groupedArray).map(
      (group) => group,
    )

    return outputArray
  } catch (error) {
    throw error
  }
}
