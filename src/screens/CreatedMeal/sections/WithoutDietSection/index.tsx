import { Text, View } from 'react-native'
import { styles } from './styles'

import Illustration from '../../../../../assets/IllustrationWithoutDiet.svg'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

export function WithoutDietSection() {
  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate('home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Continue assim!</Text>
      <Text style={styles.description}>
        Você continua{' '}
        <Text style={{ fontWeight: 'bold' }}>dentro da dieta.</Text> Muito bem!
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
