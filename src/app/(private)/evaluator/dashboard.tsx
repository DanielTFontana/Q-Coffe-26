import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Coffee, BarChart, Settings, User } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardsDashboard } from "../../../components/dashboard/CardsDashboard";

export default function DashboardScreen() {
  return (
    <ScrollView
      className="flex-1 px-6 mt-8"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text className="text-lg text-neutral-800 mb-4 font-sans-bold">
        Bem-vindo de volta, avaliador!
      </Text>

      <View className="flex-row flex-wrap justify-between">
        <CardsDashboard
          icon={Coffee}
          title={"Iniciar Nova Avaliação"}
          subtitle={"Inicie uma nova sessão de cupping"}
          evaluationType
          link={""}
        />

        <CardsDashboard
          icon={BarChart}
          title={"Minhas Avaliações"}
          subtitle={"Veja e gerencie avaliações"}
          link={""}
        />

        <CardsDashboard
          icon={User}
          title={"Perfil"}
          subtitle={"Atualize suas informações"}
          link={"/evaluator/evaluatorProfile"}
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
