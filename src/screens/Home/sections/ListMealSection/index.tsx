import { FlatList, Pressable, Text, View } from 'react-native'
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

      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.cardItemContainer}
            onPress={() => handleDetailsMeal(item.id)}
          >
            <Text style={styles.hourMeal}>
              {convertDateToHour(new Date(item.date))}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.descriptionMeal}
            >
              {item.name}
            </Text>
            <View
              style={item.isDiet ? styles.isDietItem : styles.notIsDietItem}
            />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
        initialNumToRender={4}
        style={{ maxHeight: 230 }}
      />
    </View>
  )
}
