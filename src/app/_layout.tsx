import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../styles/global.css";
import {
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
  });

  useEffect(() => {
    if(loaded || error){
      SplashScreen.hideAsync();
    }
  },[loaded, error])

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
