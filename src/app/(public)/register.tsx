import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Coffee,
  ArrowLeft,
  User,
  Mail,
  Lock,
  UserCheck,
  Users,
} from "lucide-react-native";
import { Link } from "expo-router";

type RegisterPageProps = {
  onRegister: (
    name: string,
    email: string,
    password: string,
    type: "evaluator" | "producer" | undefined
  ) => void;
  onNavigateToLogin: () => void;
  onBack?: () => void;
};

export default function RegisterPage({
  onRegister,
  onNavigateToLogin,
  onBack,
}: RegisterPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState<"evaluator" | "producer" | undefined>(
    undefined
  );

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }
    onRegister(name, email, password, userType);
  };

  return (
    <ScrollView className="bg-white ">
      <View className="px-8 py-8">
        <Text className="text-center text-neutral-600 mb-6">
          Crie sua conta para começar
        </Text>

        <View className="mb-4">
          <Text className="text-neutral-700 mb-1">Nome Completo</Text>
          <View className="flex-row items-center border border-neutral-200 bg-neutral-50 rounded-xl px-3">
            <User color="#a3a3a3" size={18} />
            <TextInput
              placeholder="Digite seu nome completo"
              value={name}
              onChangeText={setName}
              className="flex-1 h-12 pl-2 text-neutral-800"
            />
          </View>
        </View>

        <View className="mb-4">
          <Text className="text-neutral-700 mb-1">Email</Text>
          <View className="flex-row items-center border border-neutral-200 bg-neutral-50 rounded-xl px-3">
            <Mail color="#a3a3a3" size={18} />
            <TextInput
              placeholder="Digite seu email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              className="flex-1 h-12 pl-2 text-neutral-800"
            />
          </View>
        </View>

        <View className="mb-4">
          <Text className="text-neutral-700 mb-1">Senha</Text>
          <View className="flex-row items-center border border-neutral-200 bg-neutral-50 rounded-xl px-3">
            <Lock color="#a3a3a3" size={18} />
            <TextInput
              placeholder="Digite sua senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              className="flex-1 h-12 pl-2 text-neutral-800"
            />
          </View>
        </View>

        <View className="mb-4">
          <Text className="text-neutral-700 mb-1">Confirmar Senha</Text>
          <View className="flex-row items-center border border-neutral-200 bg-neutral-50 rounded-xl px-3">
            <Lock color="#a3a3a3" size={18} />
            <TextInput
              placeholder="Confirme sua senha"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              className="flex-1 h-12 pl-2 text-neutral-800"
            />
          </View>
        </View>

        <Text className="text-neutral-700 mb-2">Tipo de Usuário</Text>

        <Pressable
          onPress={() => setUserType("evaluator")}
          className={`flex-row items-center p-4 rounded-xl border-2 mb-3 ${
            userType === "evaluator"
              ? "bg-amber-50 border-amber-600"
              : "bg-neutral-50 border-neutral-200"
          }`}
        >
          <View className="bg-amber-100 p-2 rounded-lg mr-3">
            <UserCheck color="#92400E" size={20} />
          </View>
          <View>
            <Text className="text-neutral-900">Avaliador</Text>
            <Text className="text-xs text-neutral-600">Q-Grader / Cupper</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => setUserType("producer")}
          className={`flex-row items-center p-4 rounded-xl border-2 mb-6 ${
            userType === "producer"
              ? "bg-amber-50 border-amber-600"
              : "bg-neutral-50 border-neutral-200"
          }`}
        >
          <View className="bg-green-100 p-2 rounded-lg mr-3">
            <Users color="#166534" size={20} />
          </View>
          <View>
            <Text className="text-neutral-900">Produtor</Text>
            <Text className="text-xs text-neutral-600">Produtor de café</Text>
          </View>
        </Pressable>

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-amber-600 py-4 rounded-xl shadow-lg mb-6 active:opacity-80"
        >
          <Text className="text-center text-white font-semibold text-base">
            Criar Conta
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center mb-4">
          <View className="flex-1 border-t border-neutral-200" />
          <Text className="px-2 text-neutral-500 text-sm">
            Já tem uma conta?
          </Text>
          <View className="flex-1 border-t border-neutral-200" />
        </View>

        <Link asChild href={"/login"}>
          <TouchableOpacity className="border-2 border-amber-600 rounded-xl py-3 items-center">
            <Text className="text-amber-700 font-medium text-base">
              Fazer login
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
