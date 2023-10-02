import { Pressable, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { convertDateToHour, convertDateToString } from '@utils/convertDate'

export interface IMeal {
  id: string
  hour: string
  name: string
  description: string
  isDiet: boolean
  date: string
}

interface IListMealSection {
  meals: IMeal[]
}

export function ListMealSection({ meals }: IListMealSection) {
  const navigation = useNavigation()

  const { date } = meals[0]

  function handleDetailsMeal(idMeal: string) {
    navigation.navigate('meal', { idMeal })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{convertDateToString(new Date(date))}</Text>
      <ScrollView style={styles.scrollViewContainer}>
        {meals.map((meal) => (
          <Pressable
            key={meal.id}
            style={styles.cardItemContainer}
            onPress={() => handleDetailsMeal(meal.id)}
          >
            <Text style={styles.hourMeal}>
              {convertDateToHour(new Date(meal.date))}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.descriptionMeal}
            >
              {meal.name}
            </Text>
            <View
              style={meal.isDiet ? styles.isDietItem : styles.notIsDietItem}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}
