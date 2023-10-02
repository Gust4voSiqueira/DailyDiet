import theme from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.RED_LIGHT,
  },
  generalStatisticsText: {
    fontSize: theme.FONT_SIZE.XSM,
    fontFamily: theme.FONT_FAMILY.BOLD,
    marginVertical: 20,
  },
  mealsTheDietCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
})
