/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { Routes } from './src/routes'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import { Loading } from './src/components'

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (
    <>
      {fontsLoaded ? <Routes /> : <Loading />}

      <StatusBar />
    </>
  )
}
