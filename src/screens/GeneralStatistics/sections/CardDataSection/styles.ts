import theme from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_600,
    width: '100%',
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  quantitieText: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.XL,
    color: theme.COLORS.GRAY_100,
  },
  descriptionText: {
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.GRAY_200,
  },
})
