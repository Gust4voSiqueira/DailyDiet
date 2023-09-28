import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { View } from 'react-native'

export function Routes() {
  return (
    <View>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
