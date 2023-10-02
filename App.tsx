/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import { Routes } from './src/routes'
import { Loading } from '@components/index'

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (
    <>
      {fontsLoaded ? <Routes /> : <Loading />}

      <StatusBar />
    </>
  )
}
