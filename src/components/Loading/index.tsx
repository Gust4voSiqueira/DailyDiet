import { ActivityIndicator, View } from 'react-native'
import { styles } from './styles'
import theme from '@theme/index'

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.COLORS.GRAY_100} />
    </View>
  )
}
