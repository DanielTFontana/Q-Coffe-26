import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import { Plus } from "lucide-react-native";
import { TestedCoffeesList } from "../../../components/profile/evaluator/TestedCoffeesList";
import { SafeAreaView } from "react-native-safe-area-context";
import SubCard from "../../../components/profile/SubCard";

const testCoffees = [
  {
    id: "1",
    name: "Café do Cerrado",
    date: "10/10/2025",
    score: 8.7,
    producer: "Daniel Fazendo 897u",
  },
  {
    id: "2",
    name: "Café da Mantiqueira",
    productionDate: "28/09/2025",
  },
];



export default function ProducerProfile() {
  return (
    <View className="flex-1 bg-white">
      <View className="w-full h-40 bg-neutral-200 overflow-hidden">
        <ImageBackground
          source={require("../../../../assets/coffee_producer.png")}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      <View className="-mt-10 px-6 flex-row items-baseline">
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/34.jpg" }}
          className="w-20 h-20 rounded-full border-4 border-white"
        />
        <View>
          <Text className="text-lg font-sans-bold text-neutral-800">
            João Pedro
          </Text>
          <Text className="text-neutral-500 font-sans-ligth">
            Ibitirama - ES
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between px-6 mt-6">
        <SubCard value={"10"} subtitle={"Maior Pontuação"} />
        <SubCard value={"20"} subtitle={"Cafés Avaliados"} />
        <SubCard value={"25"} subtitle={"Cafés Produzidos"} />

      </View>

      <View className="mt-8 px-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-base font-sans-bold text-amber-900">
            Cafés testados
          </Text>
          <Pressable
            onPress={() => console.log("Adicionar café")}
            className="bg-amber-100 p-2 rounded-full"
          >
            <Plus size={18} color="#92400E" />
          </Pressable>
        </View>

        <TestedCoffeesList data={testCoffees} onSelect={() => {}} />
      </View>

      <View className="mb-10" />
    </View>
  );
}
