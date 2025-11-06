import { FlatList, Text, View } from "react-native";
import { CoffeeCard } from "../CoffeeCard";

type Coffee = {
  id: string;
  name: string;
  dateTest?: string;
  score?: number;
  producer?: string;
  productionDate?: string;
};

type TestedCoffeesListProps = {
  data: Coffee[];
  onSelect: (id: string) => void;
};

export function TestedCoffeesList({ data, onSelect }: TestedCoffeesListProps) {
  return (
    <View className="mt-4">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CoffeeCard
            productionDate={item.productionDate}
            producer={item.producer}
            name={item.name}
            dateTest={item.dateTest}
            score={item.score}
            onPress={() => onSelect(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
