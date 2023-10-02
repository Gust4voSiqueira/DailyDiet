import { SafeAreaView } from 'react-native'
import { styles } from './styles'
import { useRoute } from '@react-navigation/native'
import { WithoutDietSection } from './sections/WithoutDietSection'
import { NotTheDietSection } from './sections/NotTheDietSection'

interface ICreatedMeal {
  isDiet: boolean
}

export function CreatedMeal() {
  const route = useRoute()

  const { isDiet } = route.params as ICreatedMeal

  return (
    <SafeAreaView style={styles.container}>
      {isDiet ? <WithoutDietSection /> : <NotTheDietSection />}
    </SafeAreaView>
  )
}
