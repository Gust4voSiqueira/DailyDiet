import { Text, View } from 'react-native'
import { styles } from './styles'

interface IMealsTheDietCard {
  quantitie: number
  isDiet?: boolean
}

export function MealsTheDietCard({
  quantitie,
  isDiet = false,
}: IMealsTheDietCard) {
  return (
    <View
      style={[
        styles.container,
        isDiet ? styles.inDietContainer : styles.noDietContainer,
      ]}
    >
      <Text style={styles.quantitieText}>{quantitie}</Text>
      <Text style={styles.descriptionText}>{`refeições ${
        isDiet ? 'dentro' : 'fora'
      } da dieta`}</Text>
    </View>
  )
}
