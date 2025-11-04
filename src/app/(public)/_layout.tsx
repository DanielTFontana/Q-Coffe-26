import { Stack } from "expo-router";
import { PublicHeader } from "../../components/headers/PublicHeader";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <PublicHeader />
        <View className="flex-1">
          <Stack screenOptions={{ headerShown: false }} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}