import { Text, View } from 'react-native'
import { styles } from './styles'

interface ICardDataSection {
  quantitie: number
  text: string
}

export function CardDataSection({ quantitie, text }: ICardDataSection) {
  return (
    <View style={styles.container}>
      <Text style={styles.quantitieText}>{quantitie}</Text>
      <Text style={styles.descriptionText}>{text}</Text>
    </View>
  )
}
