import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

export function PublicHeader() {
  return (
      <LinearGradient colors={["#d86117", "#8d3705", "#4c1c02"]}>
        <View className="p-8 items-center justify-center">
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../../assets/logo_coffe_white.png")}
          />
          <Text className="text-white text-xl tracking-wider font-semibold">
            Q - COFFEE
          </Text>
          <Text className="text-amber-100 mt-2 text-sm tracking-wide">
            Quality Evaluation System
          </Text>
        </View>
      </LinearGradient>
  );
}
