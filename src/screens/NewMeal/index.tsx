import { Alert, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import theme from '@theme/index'
import { Header, Content, FormMeal, FormMealData } from '@components/index'
import { AppError } from '@utils/AppError'
import { mealCreate } from '@storage/index'

export function NewMeal() {
  const navigation = useNavigation()

  async function handleNewMeal(meal: FormMealData) {
    try {
      await mealCreate(meal)

      navigation.navigate('created', { isDiet: meal.isDiet })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova refeição', error.message)
      } else {
        Alert.alert('Nova refeição', 'Não foi possível adicionar a refeição.')
      }
    }
  }

  return (
    <View style={styles.container}>
      <Header backgroundColor={theme.COLORS.GRAY_500} title="Nova refeição" />

      <Content>
        <FormMeal
          textButton="Cadastrar refeição"
          onSubmitFunction={handleNewMeal}
        />
      </Content>
    </View>
  )
}
