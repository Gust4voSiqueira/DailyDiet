import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'

interface IButton extends TouchableOpacityProps {
  onPressFunction: () => void
  icon?: React.ReactNode
  text: string
}

export function Button({ icon, text, onPressFunction }: IButton) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressFunction}>
      {icon}
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}
