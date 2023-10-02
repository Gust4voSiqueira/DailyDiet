import theme from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.RED_LIGHT,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_700,
    paddingHorizontal: 20,

    borderRadius: 20,
    top: 0,
    paddingTop: 30,
  },
  title: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.XLG,
    color: theme.COLORS.GRAY_100,
  },
  textDetails: {
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_200,
  },
  dateTitle: {
    marginTop: 10,
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.XSM,
    color: theme.COLORS.GRAY_100,
  },
  iconIsDietContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_600,
    paddingVertical: 10,
    borderRadius: 1000,
    maxWidth: 150,
    marginTop: 20,
  },
  iconIsDiet: {
    padding: 5,
    borderRadius: 50,
    marginRight: 5,
  },
  isDietText: {
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.XSM,
  },
  buttonsContainer: {
    marginTop: 'auto',
  },
  deleteMealButton: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_100,
    borderRadius: 6,

    paddingVertical: 15,
  },
  deleteMealText: {
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.XSM,
    fontFamily: theme.FONT_FAMILY.BOLD,
    marginLeft: 10,
  },
})
