import theme from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 40,
  },
  imageProfile: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.COLORS.GRAY_200,
  },
})
