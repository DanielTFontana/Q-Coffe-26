import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Eye, EyeOff, Lock, Mail } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Link } from "expo-router";

type LoginPageProps = {
  onLogin: (email: string, password: string) => void;
  onNavigateToRegister: () => void;
  onBack?: () => void;
};

export default function LoginPage({
  onLogin,
  onNavigateToRegister,
  onBack,
}: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    onLogin(email, password);
  };

  return (
    <View className="bg-white shadow-2xl flex-1 overflow-hidden">
      <View className="px-8 py-10">
        <View className="items-center mb-8">
          <Text className="text-lg font-semibold text-neutral-900 mb-1">
            Bem-vindo de volta!
          </Text>
          <Text className="text-neutral-600 text-sm">
            Entre com suas credenciais para continuar
          </Text>
        </View>

        <View className="mb-5">
          <Text className="text-neutral-700 mb-2">Email</Text>
          <View className="flex-row items-center bg-neutral-50 border border-neutral-200 rounded-xl px-3">
            <Mail color="#999" size={20} />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Digite o seu email"
              keyboardType="email-address"
              autoCapitalize="none"
              className="flex-1 h-12 pl-2 text-neutral-800"
            />
          </View>
        </View>

        <View className="mb-5">
          <Text className="text-neutral-700 mb-2">Senha</Text>
          <View className="flex-row items-center bg-neutral-50 border border-neutral-200 rounded-xl px-3">
            <Lock color="#999" size={20} />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Digite a sua senha"
              secureTextEntry={!showPassword}
              className="flex-1 h-12 pl-2 text-neutral-800"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff color="#777" size={20} />
              ) : (
                <Eye color="#777" size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between items-center mb-6">
          <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            className="flex-row items-center gap-2"
          >
            <View
              className={`w-5 h-5 rounded-md border ${
                rememberMe
                  ? "bg-amber-700 border-amber-700"
                  : "border-neutral-400"
              }`}
            />
            <Text className="text-neutral-600">Lembrar-me</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="text-amber-700">Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <Link asChild href={"/dashboard"}>
          <TouchableOpacity className="bg-amber-600 py-4 rounded-xl shadow-lg mb-6 active:opacity-80">
            <Text className="text-center text-white font-semibold text-base">
              Entrar
            </Text>
          </TouchableOpacity>
        </Link>

        <View className="flex-row items-center justify-center mb-4">
          <View className="h-px flex-1 bg-neutral-200" />
          <Text className="px-2 text-neutral-500 text-sm">
            Não tem uma conta?
          </Text>
          <View className="h-px flex-1 bg-neutral-200" />
        </View>

        <Link asChild href="/register">
          <TouchableOpacity
            onPress={onNavigateToRegister}
            className="border-2 border-amber-600 py-4 rounded-xl"
          >
            <Text className="text-center text-amber-700 font-semibold text-base">
              Criar conta gratuita
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
