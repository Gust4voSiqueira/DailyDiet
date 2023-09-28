import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
    </Navigator>
  )
}
