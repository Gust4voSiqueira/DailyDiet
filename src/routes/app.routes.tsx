import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  GeneralStatistics,
  Home,
  NewMeal,
  MealDetails,
  EditMeal,
  CreatedMeal,
} from '@screens/index'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="general" component={GeneralStatistics} />
      <Screen name="new" component={NewMeal} />
      <Screen name="meal" component={MealDetails} />
      <Screen name="edit" component={EditMeal} />
      <Screen name="created" component={CreatedMeal} />
    </Navigator>
  )
}
