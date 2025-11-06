import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Coffee, BarChart, Settings, User, Tractor } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardsDashboard } from "../../../components/dashboard/CardsDashboard";

export default function DashboardScreen() {
  return (
    <ScrollView
      className="flex-1 px-6 mt-8"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text className="text-lg text-neutral-800 mb-4 font-sans-bold">
        Bem-vindo de volta, produtor!
      </Text>

      <View className="flex-row flex-wrap justify-between">
        <CardsDashboard
          icon={Coffee}
          title={"Solicitar Nova Avaliação"}
          subtitle={"Solicite uma nova sessão de cupping"}
          evaluationType
          link={""}
        />

        <CardsDashboard
          icon={BarChart}
          title={"Meus cafés avaliados"}
          subtitle={"Veja como foram avaliados os cafés"}
          link={""}
        />

        <CardsDashboard
          icon={User}
          title={"Perfil"}
          subtitle={"Veja suas informações"}
          link={"/producer/producerProfile"}
        />

         <CardsDashboard
          icon={Tractor}
          title={"Propriedades"}
          subtitle={"Veja ou adicione propriedades"}
          link={"/producer/producerProfile"}
        />

        <CardsDashboard
          icon={Settings}
          title={"Configurações"}
          subtitle={"Ajuste as preferências do app"}
          link={""}
        />
      </View>
    </ScrollView>
  );
}
