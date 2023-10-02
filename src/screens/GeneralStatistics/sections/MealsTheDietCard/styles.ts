import theme from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  inDietContainer: {
    backgroundColor: theme.COLORS.GREEN_LIGHT,
  },
  noDietContainer: {
    backgroundColor: theme.COLORS.RED_LIGHT,
  },
  quantitieText: {
    textAlign: 'center',
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.XL,
    color: theme.COLORS.GRAY_100,
  },
  descriptionText: {
    textAlign: 'center',
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.GRAY_200,
  },
})
