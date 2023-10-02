import { useState } from 'react'
import { Alert, View } from 'react-native'
import { styles } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import theme from '@theme/index'
import {
  Content,
  Loading,
  Header,
  FormMeal,
  FormMealData,
} from '@components/index'
import { mealEdit, mealFindById } from '@storage/index'
import { convertDateToString } from '@utils/convertDate'

type IEditMealParams = {
  meal: string
}

export function EditMeal() {
  const [inputs, setInputs] = useState<FormMealData>()
  const navigation = useNavigation()
  const route = useRoute()

  const { meal } = route.params as IEditMealParams

  function onRedirectHome() {
    navigation.navigate('home')
  }

  async function getMeal() {
    try {
      const response = await mealFindById(meal)

      if (response) {
        setInputs({
          ...response,
          date: convertDateToString(response.date),
        })
      }
    } catch (error) {
      Alert.alert('Busca', 'Falha ao buscar refeição.', [
        {
          text: 'Ok',
          onPress: onRedirectHome,
        },
      ])
    }
  }

  async function handleEditMeal(newMeal: FormMealData) {
    try {
      if (inputs) {
        await mealEdit(newMeal, inputs.date.concat(inputs.hour))
      }

      onRedirectHome()
    } catch (error) {
      Alert.alert('Editar', 'Falha ao editar refeição.')
    }
  }

  useEffect(() => {
    getMeal()
  }, [])

  if (!inputs) return <Loading />

  return (
    <View style={styles.container}>
      <Header backgroundColor={theme.COLORS.GRAY_500} title="Editar refeição" />

      <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_500 }}>
        <Content>
          <FormMeal
            textButton="Salvar alterações"
            inputs={inputs}
            onSubmitFunction={handleEditMeal}
          />
        </Content>
      </View>
    </View>
  )
}
