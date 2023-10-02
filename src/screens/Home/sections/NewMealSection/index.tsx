import { Text, View } from 'react-native'
import { styles } from './styles'
import { Button } from '@components/Button'

import { Plus } from 'phosphor-react-native'
import theme from '@theme/index'
import { useNavigation } from '@react-navigation/native'

export function NewMealSection() {
  const navigation = useNavigation()

  function handleRedirectNewMeal() {
    navigation.navigate('new')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleSection}>Refeições</Text>

      <Button
        icon={<Plus color={theme.COLORS.WHITE} weight="bold" size={18} />}
        text="Nova refeição"
        onPressFunction={handleRedirectNewMeal}
      />
    </View>
  )
}
