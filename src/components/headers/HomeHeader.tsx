import { LinearGradient } from "expo-linear-gradient";
import { LogOut } from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeHeader() {
    return(
        <LinearGradient colors={["#d86117", "#702f0a"]}>
            <SafeAreaView className="h-[110px] px-4 flex-row items-center justify-between mt-2">

            <View >
                <Text className="text-white font-sans-regular">Olá, 👋</Text>
                <Text className="text-white text-lg font-sans-regular">Daniel</Text>
            </View>

            <TouchableOpacity className="size-12 items-center justify-center">
                <LogOut color={"white"}/>
            </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    )
}