import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeHeader } from "../../components/headers/HomeHeader";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <HomeHeader />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
