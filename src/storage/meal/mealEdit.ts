import { FormMealData } from '@components/FormMeal'
import { mealFindById } from './mealFindById'
import { mealGetAll } from './mealGetAll'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { AppError } from '@utils/AppError'

export async function mealEdit(newMeal: FormMealData, idMeal: string) {
  try {
    const meal = await mealFindById(idMeal)

    if (!meal) {
      throw new AppError('Falha ao editar refeição.')
    }

    const storedMeals = await mealGetAll()

    const actuallyStored = storedMeals.map((mealStored) => {
      if (mealStored.id === meal.id) {
        return {
          ...newMeal,
          id: newMeal.date.concat(newMeal.hour),
          date: convertDate(newMeal.date),
        }
      }

      return mealStored
    })

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...actuallyStored]),
    )
  } catch (error) {
    throw error
  }
}

function convertDate(date: string) {
  const partes = date.split('/')

  const ano = parseInt(partes[2], 10)
  const mes = parseInt(partes[1], 10) - 1
  const dia = parseInt(partes[0], 10)

  return new Date(ano, mes, dia)
}
