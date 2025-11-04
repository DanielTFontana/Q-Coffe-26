import { LinearGradient } from "expo-linear-gradient";
import { LogOut } from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeHeader() {
    return(
        <LinearGradient colors={["#92400e", "#78350f", "#451a03"]}>
            <SafeAreaView className="h-[130px] px-4 flex-row items-center justify-between">

            <View >
                <Text className="text-white">Olá</Text>
                <Text className="text-white text-sm text-b">Daniel</Text>
            </View>

            <TouchableOpacity className="size-12 items-center justify-center">
                <LogOut color={"white"}/>
            </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    )
}