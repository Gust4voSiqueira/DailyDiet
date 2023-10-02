import { AppError } from '@utils/AppError'
import { mealGetAll } from './mealGetAll'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { FormMealData } from '@components/FormMeal'

export async function mealCreate(meal: FormMealData) {
  try {
    const storedMeals = await mealGetAll()

    const isExistsMealsInHour = storedMeals.some(
      (storedMeal) =>
        new Date(storedMeal.date).toLocaleDateString() === meal.date &&
        storedMeal.hour === meal.hour,
    )

    if (isExistsMealsInHour) {
      throw new AppError(
        'Já existe uma refeição cadastrada nesta data e horário.',
      )
    }

    validateDateAndHour(meal.date, meal.hour)

    const newMeal = {
      ...meal,
      id: meal.date.concat(meal.hour),
      date: convertDate(meal.date, meal.hour),
    }

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...storedMeals, newMeal]),
    )
  } catch (error) {
    throw error
  }
}

function convertDate(date: string, hourString: string) {
  const partsDate = date.split('/')
  const partsHour = hourString.split(':')

  const year = parseInt(partsDate[2], 10)
  const month = parseInt(partsDate[1], 10)
  const day = parseInt(partsDate[0], 10)

  const hour = parseInt(partsHour[0])
  const minutes = parseInt(partsHour[1])

  return new Date(Date.UTC(year, month - 1, day, hour, minutes))
}

function validateDateAndHour(dateString: string, hourString: string) {
  const partsDate = dateString.split('/')
  const partsHour = hourString.split(':')

  const year = parseInt(partsDate[2], 10)
  const month = parseInt(partsDate[1], 10)
  const day = parseInt(partsDate[0], 10)

  const hour = parseInt(partsHour[0])
  const minutes = parseInt(partsHour[1])

  const date = new Date(Date.UTC(year, month - 1, day, hour, minutes))

  const today = new Date()
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)

  firstDayOfMonth.setMonth(firstDayOfMonth.getMonth() + 1)

  firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 1)

  const lastDayOfMonth = firstDayOfMonth.getDate()

  if (month > 12 || day > lastDayOfMonth) {
    throw new AppError('Data inválida.')
  }

  if (minutes > 60 || hour > 23) {
    throw new AppError('Hora inválida.')
  }

  if (date > today) {
    throw new AppError('Voce não pode cadastrar uma refeição no futuro.')
  }
}
