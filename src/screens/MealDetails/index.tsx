import { useCallback, useState } from 'react'
import { Alert, Pressable, SafeAreaView, Text, View } from 'react-native'
import {
  useRoute,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { styles } from './styles'

import { Header, Button, Loading } from '@components/index'
import theme from '@theme/index'
import { mealFindById, mealRemoveById, IMealStorage } from '@storage/index'
import { convertDateToString } from '@utils/convertDate'

type MealParams = {
  idMeal: string
}

export function MealDetails() {
  const navigation = useNavigation()
  const [data, setData] = useState<IMealStorage>()

  const route = useRoute()

  const { idMeal } = route.params as MealParams

  async function getMealById() {
    try {
      const response = await mealFindById(idMeal)

      setData(response)
    } catch (error) {
      Alert.alert('Buscar', 'Não foi possível encontrar este ítem.', [
        {
          text: 'Ok',
          onPress: () => navigation.navigate('home'),
        },
      ])
    }
  }

  useFocusEffect(
    useCallback(() => {
      getMealById()
    }, []),
  )

  function handleEditMeal(idMeal: string) {
    navigation.navigate('edit', { meal: idMeal })
  }

  async function onRemoveMeal(idMeal: string) {
    try {
      await mealRemoveById(idMeal)

      navigation.navigate('home')
    } catch (error) {
      Alert.alert('Remover', 'Erro ao tentar remover esta refeição.')
    }
  }

  function handleRemoveMeal(idMeal: string) {
    Alert.alert('Remover', 'Deseja realmente excluir o registro da refeição?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Sim, excluir',
        style: 'destructive',
        onPress: () => onRemoveMeal(idMeal),
      },
    ])
  }

  if (!data) return <Loading />

  return (
    <View
      style={
        data.isDiet
          ? { flex: 1, backgroundColor: theme.COLORS.GREEN_LIGHT }
          : { flex: 1, backgroundColor: theme.COLORS.RED_LIGHT }
      }
    >
      <Header
        backgroundColor={
          data.isDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
        }
        title="Refeição"
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.textDetails}>{data.description}</Text>

        <Text style={styles.dateTitle}>Data e hora</Text>
        <Text style={styles.textDetails}>{`${convertDateToString(
          data.date,
        )} às ${data.hour}`}</Text>

        <View style={styles.iconIsDietContainer}>
          <View
            style={[
              styles.iconIsDiet,
              data.isDiet
                ? {
                    backgroundColor: theme.COLORS.GREEN_DARK,
                  }
                : {
                    backgroundColor: theme.COLORS.RED_DARK,
                  },
            ]}
          />
          <Text style={styles.isDietText}>
            {data.isDiet ? 'dentro da dieta' : 'fora da dieta'}
          </Text>
        </View>

        <SafeAreaView style={styles.buttonsContainer}>
          <Button
            icon={<PencilSimpleLine color={theme.COLORS.WHITE} />}
            text="Editar refeição"
            onPressFunction={() => handleEditMeal(data.id)}
          />
          <Pressable
            style={styles.deleteMealButton}
            onPress={() => handleRemoveMeal(data.id)}
          >
            <Trash />
            <Text style={styles.deleteMealText}>Excluir refeição</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </View>
  )
}
