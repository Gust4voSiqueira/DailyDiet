import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'

import { ArrowLeft } from 'phosphor-react-native'
import theme from '@theme/index'
import { useNavigation } from '@react-navigation/native'
import { limitPositive } from '@utils/limitPositive'

interface IHeaderSection {
  percentage: number
}

export function HeaderSection({ percentage }: IHeaderSection) {
  const navigation = useNavigation()
  const percentageConverted = percentage.toFixed(2)
  const colorIcon =
    percentage >= limitPositive
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK

  function goBack() {
    navigation.navigate('home')
  }

  return (
    <View
      style={[
        styles.container,
        percentage >= limitPositive
          ? styles.positiveContainer
          : styles.negativeContainer,
      ]}
    >
      <Pressable onPress={goBack} style={styles.arrowIcon}>
        <ArrowLeft size={30} color={colorIcon} />
      </Pressable>
      <Text style={styles.title}>{percentageConverted}%</Text>
      <Text style={styles.text}>das refeições dentro da dieta</Text>
    </View>
  )
}
