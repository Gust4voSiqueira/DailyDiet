import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { ArrowLeft } from 'phosphor-react-native'
import theme from '@theme/index'
import { useNavigation } from '@react-navigation/native'

interface IHeader {
  backgroundColor: string
  title: string
}

export function Header({ backgroundColor, title }: IHeader) {
  const navigation = useNavigation()

  function onBackHome() {
    navigation.goBack()
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Pressable onPress={onBackHome}>
        <ArrowLeft
          color={theme.COLORS.GRAY_200}
          style={styles.arrowIcon}
          size={30}
        />
      </Pressable>
      <Text style={styles.textTitle}>{title}</Text>
      <ArrowLeft style={{ opacity: 0 }} />
    </View>
  )
}
