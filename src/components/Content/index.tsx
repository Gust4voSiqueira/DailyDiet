import { View } from 'react-native'
import { styles } from './styles'

interface IContent {
  children: React.ReactNode
}

export function Content({ children }: IContent) {
  return <View style={styles.container}>{children}</View>
}
