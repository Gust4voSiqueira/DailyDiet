import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { mealGetAll } from './mealGetAll'

export async function mealRemoveById(idMeal: string) {
  try {
    const storage = await mealGetAll()

    const storageFiltered = Object.values(storage).filter(
      (item) => item.id !== idMeal,
    )

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storageFiltered))
  } catch (error) {
    throw error
  }
}
