import { useCallback, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import { styles } from './styles'
import { HeaderSection } from './sections/HeaderSection'
import { CardDataSection } from './sections/CardDataSection'
import { MealsTheDietCard } from './sections/MealsTheDietCard'
import { Content, Loading } from '@components/index'
import { getStatistics, StatisticsDTO } from '@storage/index'

type RouteParams = {
  percentage: number
}

export function GeneralStatistics() {
  const [statistics, setStatistics] = useState<StatisticsDTO>()
  const routes = useRoute()

  async function onGetStatistics() {
    try {
      const response = await getStatistics()

      setStatistics(response)
    } catch (error) {
      Alert.alert('Busca', 'Falha ao buscar as estatísticas.')
    }
  }

  useFocusEffect(
    useCallback(() => {
      onGetStatistics()
    }, []),
  )

  const { percentage } = routes.params as RouteParams

  if (!statistics) return <Loading />

  return (
    <View style={styles.container}>
      <HeaderSection percentage={percentage} />

      <Content>
        <Text style={styles.generalStatisticsText}>Estatísticas gerais</Text>

        <CardDataSection
          quantitie={statistics.longestSequence}
          text="melhor sequência de pratos dentro da dieta"
        />
        <CardDataSection
          quantitie={statistics.mealsTotal}
          text="refeições registradas"
        />

        <View style={styles.mealsTheDietCardsContainer}>
          <MealsTheDietCard quantitie={statistics.mealsInDiet} isDiet />
          <MealsTheDietCard quantitie={statistics.mealsOffTheDiet} />
        </View>
      </Content>
    </View>
  )
}
