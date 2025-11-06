import { Pressable, Text, View } from "react-native";
import { CalendarArrowUp, CalendarCheck, Sprout, Tractor } from "lucide-react-native";

type CoffeeCardProps = {
  name: string;
  dateTest?: string;
  score?: number;
  producer?: string;
  onPress?: () => void;
  productionDate?: string;
};

export function CoffeeCard({
  name,
  dateTest,
  score,
  onPress,
  producer,
  productionDate,
}: CoffeeCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="w-full bg-white rounded-2xl p-4 mb-3 shadow-sm border border-neutral-200"
    >
      <View className="flex-row justify-between items-center mb-2">
        <Sprout size={14} color="#737373" />
        <Text className="text-neutral-800 font-semibold text-base flex-1 ml-1">
          {name}
        </Text>

        <View className="ml-3 bg-amber-100 px-3 py-1 rounded-lg">
          <Text className="text-amber-700 font-bold text-sm">
            {score ? score.toFixed(2) : "Não testado"}
          </Text>
        </View>
      </View>

      {producer && (
        <View className="flex-row items-center mb-2">
          <Tractor size={14} color="#737373" />
          <Text className="text-neutral-600 text-sm ml-1">
            <Text className="font-semibold text-neutral-700">Produtor: </Text>
            {producer}
          </Text>
        </View>
      )}

      {dateTest && (
        <View className="flex-row items-center mb-2">
          <CalendarArrowUp size={14} color="#737373" />
          <Text className="text-neutral-400 text-xs ml-1">
            Data do teste: {dateTest}
          </Text>
        </View>
      )}

      {productionDate && (
        <View className="flex-row items-center mb-2">
          <CalendarCheck size={14} color="#737373" />
          <Text className="text-neutral-400 text-xs ml-1">
            Data da produção: {productionDate}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
