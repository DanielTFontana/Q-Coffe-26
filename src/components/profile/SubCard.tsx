import { View, Text } from "react-native";

interface subCardInterface {
  value: string | number;
  subtitle: string;
}

export default function SubCard({ value, subtitle }: subCardInterface) {
  return (
    <View className="flex-1 bg-white rounded-2xl p-3 mr-2 shadow-sm border border-neutral-100 items-center">
      <Text className="text-2xl font-sans-bold text-neutral-800">{value}</Text>
      <Text className="text-neutral-500 text-sm">{subtitle}</Text>
    </View>
  );
}