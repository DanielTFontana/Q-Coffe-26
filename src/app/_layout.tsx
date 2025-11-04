import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../styles/global.css"
import { HomeHeader } from "../components/headers/HomeHeader";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{headerShown:false}}/>
    </SafeAreaProvider>
  );
}
