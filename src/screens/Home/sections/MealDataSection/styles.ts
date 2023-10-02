import theme from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 25,

    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: 25,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  positiveContainer: {
    backgroundColor: theme.COLORS.GREEN_LIGHT,
  },
  negativeContainer: {
    backgroundColor: theme.COLORS.RED_LIGHT,
  },
  title: {
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.XXL,
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontWeight: 'bold',
  },
  text: {
    fontSize: theme.FONT_SIZE.XSM,
    color: theme.COLORS.GRAY_200,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  arrowIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
})
