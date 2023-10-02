import { Text, View } from 'react-native'
import { styles } from './styles'

import Illustration from '../../../../../assets/IllustrationNotDiet.svg'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

export function NotTheDietSection() {
  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate('home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Que pena!</Text>
      <Text style={styles.description}>
        Você
        <Text style={{ fontWeight: 'bold' }}> saiu da dieta</Text> dessa vez,
        mas continue se esforçando e não desista!
      </Text>

      <Illustration style={styles.illustration} />

      <View style={styles.buttonContainer}>
        <Button
          text="Ir para página inicial"
          onPressFunction={handleNavigation}
        />
      </View>
    </View>
  )
}
