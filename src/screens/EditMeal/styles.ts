import theme from '@theme/index'
import { StyleSheet } from 'react-native'

const { COLORS } = theme

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_500,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: COLORS.GRAY_700,
    paddingHorizontal: 20,

    borderRadius: 20,
    paddingTop: 50,
    top: 0,
  },
})
