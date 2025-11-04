import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Coffee, BarChart, Settings, User } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-amber-50">
      <LinearGradient
        colors={["#92400E", "#78350F", "#451A03"]}
        className="px-6 py-10 rounded-b-3xl shadow-lg"
      >
        <View className="flex-row items-center justify-center space-x-3">
          <View className="bg-white/20 p-3 rounded-2xl">
            <Coffee color="white" size={36} strokeWidth={2.5} />
          </View>
          <Text className="text-white text-2xl font-semibold tracking-wider">
            Q - COFFEE
          </Text>
        </View>
        <Text className="text-amber-100 text-center mt-2 text-base">
          Quality Evaluation System
        </Text>
      </LinearGradient>

      <ScrollView
        className="flex-1 px-6 py-6"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Text className="text-lg font-semibold text-neutral-800 mb-4">
          Bem-vindo de volta, avaliador!
        </Text>

        <View className="flex-row flex-wrap justify-between">
          <Pressable className="w-[48%] bg-white rounded-2xl p-5 mb-4 shadow-sm border border-amber-100">
            <BarChart color="#92400E" size={32} />
            <Text className="text-neutral-800 font-semibold mt-3">
              Minhas Avaliações
            </Text>
            <Text className="text-neutral-500 text-sm">
              Veja e gerencie avaliações recentes
            </Text>
          </Pressable>

          <Pressable className="w-[48%] bg-white rounded-2xl p-5 mb-4 shadow-sm border border-amber-100">
            <User color="#92400E" size={32} />
            <Text className="text-neutral-800 font-semibold mt-3">Perfil</Text>
            <Text className="text-neutral-500 text-sm">
              Atualize suas informações
            </Text>
          </Pressable>

          <Pressable className="w-[48%] bg-white rounded-2xl p-5 mb-4 shadow-sm border border-amber-100">
            <Settings color="#92400E" size={32} />
            <Text className="text-neutral-800 font-semibold mt-3">
              Configurações
            </Text>
            <Text className="text-neutral-500 text-sm">
              Ajuste preferências do app
            </Text>
          </Pressable>

          <Pressable className="w-[48%] bg-white rounded-2xl p-5 mb-4 shadow-sm border border-amber-100">
            <Coffee color="#92400E" size={32} />
            <Text className="text-neutral-800 font-semibold mt-3">
              Nova Avaliação
            </Text>
            <Text className="text-neutral-500 text-sm">
              Inicie uma nova sessão de cupping
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
