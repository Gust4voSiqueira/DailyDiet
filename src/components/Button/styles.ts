import theme from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.COLORS.GRAY_200,
    borderRadius: 6,

    paddingVertical: 15,
  },
  textButton: {
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.XSM,
    fontFamily: theme.FONT_FAMILY.BOLD,
    marginLeft: 10,
  },
})
