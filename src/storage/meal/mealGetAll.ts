import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'

export interface IMealStorage {
  id: string
  hour: string
  name: string
  description: string
  isDiet: boolean
  date: Date
}

export async function mealGetAll(): Promise<IMealStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    return storage ? JSON.parse(storage) : []
  } catch (error) {
    throw error
  }
}
