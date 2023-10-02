import theme from '@theme/index'
import { StyleSheet } from 'react-native'

const { COLORS, FONT_FAMILY, FONT_SIZE } = theme

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.XSM,
    color: COLORS.GRAY_200,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_500,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.XSM,
    color: COLORS.GRAY_100,
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 3,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: COLORS.RED_DARK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.XSM,
    color: COLORS.GRAY_100,
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 3,
  },
  textArea: {
    height: 100,
  },
  inputDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginBottom: 20,
  },
  dateContainer: {
    flex: 1,
  },
  buttonsIsDietContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  isDietInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 3,
    flexDirection: 'row',
  },
  isDietInputDefault: {
    borderColor: COLORS.GRAY_600,
    backgroundColor: COLORS.GRAY_600,
  },
  withinTheDietButton: {
    borderColor: COLORS.GREEN_DARK,
    backgroundColor: COLORS.GREEN_LIGHT,
  },
  offTheDietButton: {
    borderColor: COLORS.RED_DARK,
    backgroundColor: COLORS.RED_LIGHT,
  },
  isDietText: {
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.GRAY_100,
  },
  iconIsDiet: {
    padding: 4,
    marginRight: 7,
    borderRadius: 50,
  },
  iconWithinTheDiet: {
    backgroundColor: COLORS.GREEN_DARK,
  },
  offTheDiet: {
    backgroundColor: COLORS.RED_DARK,
  },
  buttonFormMealContainer: {
    marginTop: 'auto',
  },
})
