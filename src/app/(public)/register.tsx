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
  Tractor,
  MapPinned,
  ShieldCheck,
} from "lucide-react-native";
import { Link } from "expo-router";
import { DataInput } from "../../components/Inputs/DataInput";

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
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState<
    "evaluator" | "producer" | undefined
  >(undefined);

  const handleNext = () => {
    if (step === 1 && userType) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }
    onRegister(name, email, password, userType);
  };

  const handleFinish = () => {
    console.log("Finalizando cadastro:", { email, userType });
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-white px-6 py-10"
    >
      {/* ====================== STEP 1 ====================== */}
      {step === 1 && (
        <View className="gap-4">
          <Text className="text-2xl font-sans-bold text-neutral-800 ">
            Crie sua conta
          </Text>

          <DataInput
            label="Nome"
            placeholder="Digite seu nome"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
            icon={User}
          />

          <DataInput
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
            value={lastName}
            onChangeText={setLastName}
            icon={User}
          />

          <DataInput
            label="Email"
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            icon={Mail}
          />

          <DataInput
            label="Senha"
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            icon={Lock}
          />

          <DataInput
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            icon={Lock}
          />

          <Text className="text-neutral-700 mb-2 font-sans-regular">
            Tipo de Usuário
          </Text>

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
              <Text className="text-xs text-neutral-600">
                Q-Grader / Cupper
              </Text>
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
            onPress={handleNext}
            disabled={!userType}
            className={`py-4 rounded-xl shadow-lg mb-6 ${
              userType ? "bg-amber-600 active:opacity-80" : "bg-neutral-300"
            }`}
          >
            <Text className="text-center text-white font-semibold text-base">
              Próximo
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
      )}

      {/* ====================== STEP 2 ====================== */}
      {step === 2 && (
        <View>
          <Text className="text-2xl font-semibold text-neutral-800 mb-6">
            {userType === "producer"
              ? "Informações do Produtor"
              : "Informações do Avaliador"}
          </Text>

          {userType === "producer" ? (
            <>
              <DataInput
                label="Nome da Fazenda"
                placeholder="Ex: Fazenda Santa Clara"
                value={""}
                onChangeText={() => {}}
                icon={Tractor}
              />
              <DataInput
                label="Localização"
                placeholder="Ex: Sul de Minas, MG"
                value={""}
                onChangeText={() => {}}
                icon={MapPinned}
              />
            </>
          ) : (
            <>
              <DataInput
                label="Certificação"
                placeholder="Ex: Q-Grader nível 1"
                value={""}
                onChangeText={() => {}}
                icon={ShieldCheck}
              />
            </>
          )}

          <View className="flex-row justify-between mt-6">
            <TouchableOpacity
              onPress={handlePrevious}
              className="bg-neutral-200 py-4 px-8 rounded-xl"
            >
              <Text className="text-neutral-700 font-medium">Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNext}
              className="bg-amber-600 py-4 px-8 rounded-xl active:opacity-80"
            >
              <Text className="text-white font-medium">Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* ====================== STEP 3 ====================== */}
      {step === 3 && (
        <View>
          <Text className="text-2xl font-semibold text-neutral-800 mb-6">
            Revise suas informações
          </Text>

          <View className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 mb-6">
            <Text className="text-neutral-700 mb-2">
              <Text className="font-semibold">Nome:</Text> {name} {lastName}
            </Text>
            <Text className="text-neutral-700 mb-2">
              <Text className="font-semibold">Email:</Text> {email}
            </Text>
            <Text className="text-neutral-700 mb-2">
              <Text className="font-semibold">Tipo:</Text>{" "}
              {userType === "producer" ? "Produtor" : "Avaliador"}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={handlePrevious}
              className="bg-neutral-200 py-4 px-8 rounded-xl"
            >
              <Text className="text-neutral-700 font-medium">Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleFinish}
              className="bg-green-600 py-4 px-8 rounded-xl active:opacity-80"
            >
              <Text className="text-white font-medium">Concluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
