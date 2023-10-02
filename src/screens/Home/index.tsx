import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Alert, SafeAreaView, ScrollView } from 'react-native'
import { styles } from './styles'
import { mealGetToHome, getPercentage } from '@storage/index'
import {
  HeaderSection,
  MealDataSection,
  NewMealSection,
  IMeal,
  ListMealSection,
} from './sections'

export function Home() {
  const [data, setData] = useState<IMeal[][]>([])
  const [percentage, setPercentage] = useState<number>(0)

  async function getMeals() {
    try {
      const response = await mealGetToHome()
      const percentage = await getPercentage()

      setPercentage(percentage)
      setData(response)
    } catch (error) {
      Alert.alert('Buscar', 'Não foi possível buscar as refeições.')
    }
  }

  useFocusEffect(
    useCallback(() => {
      getMeals()
    }, []),
  )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderSection imageUrl="https://avatars.githubusercontent.com/u/79036409?v=4" />
        <MealDataSection percentage={percentage} />
        <NewMealSection />
        {Object.values(data).map((meal, index) => (
          <ListMealSection key={index} meals={meal} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
