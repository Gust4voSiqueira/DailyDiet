import theme from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_700,
    paddingHorizontal: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.RED_DARK,
    fontSize: theme.FONT_SIZE.XL,
  },
  description: {
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.MD,
    marginTop: 5,
    textAlign: 'center',
  },
  illustration: {
    marginTop: 30,
  },
  buttonContainer: {
    marginTop: 25,
    width: '55%',
  },
})
