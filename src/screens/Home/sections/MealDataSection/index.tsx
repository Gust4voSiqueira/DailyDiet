import { Pressable, Text } from 'react-native'
import { styles } from './styles'

import { ArrowUpRight } from 'phosphor-react-native'
import theme from '@theme/index'
import { useNavigation } from '@react-navigation/native'
import { limitPositive } from '@utils/limitPositive'

interface IMealData {
  percentage: number
}

export function MealDataSection({ percentage }: IMealData) {
  const navigation = useNavigation()
  const percentageFormatted = percentage.toFixed(2).replace('.', ',')
  const colorIcon =
    percentage >= limitPositive
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK

  function handleRedirect() {
    navigation.navigate('general', { percentage })
  }

  return (
    <Pressable
      style={[
        styles.container,
        percentage >= limitPositive
          ? styles.positiveContainer
          : styles.negativeContainer,
      ]}
      onPress={handleRedirect}
    >
      <ArrowUpRight size={30} color={colorIcon} style={styles.arrowIcon} />
      <Text style={styles.title}>{percentageFormatted}%</Text>
      <Text style={styles.text}>das refeições dentro da dieta</Text>
    </Pressable>
  )
}
