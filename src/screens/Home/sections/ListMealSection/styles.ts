import theme from '@theme/index'
import { StyleSheet } from 'react-native'

const { COLORS, FONT_FAMILY, FONT_SIZE } = theme

const HEIGHT_CARD_MEAL = 50
const LIMIT_MEAL_FOR_LIST = 4
const MARGIN_MEAL = 8

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,

    paddingHorizontal: 20,
  },
  scrollViewContainer: {
    maxHeight:
      HEIGHT_CARD_MEAL * LIMIT_MEAL_FOR_LIST +
      MARGIN_MEAL * LIMIT_MEAL_FOR_LIST,
  },
  dateText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.XSM,
    marginBottom: 10,
  },
  cardItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: COLORS.GRAY_500,

    paddingVertical: 14,
    paddingLeft: 12,
    paddingRight: 16,
    marginBottom: MARGIN_MEAL,
    height: HEIGHT_CARD_MEAL,

    borderRadius: 6,
  },
  hourMeal: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.SM,

    marginRight: 10,
  },
  descriptionMeal: {
    width: '80%',
    fontSize: FONT_SIZE.SM,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GRAY_200,
  },
  isDietItem: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: COLORS.GREEN_MID,
  },
  notIsDietItem: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: COLORS.RED_MID,
  },
})
