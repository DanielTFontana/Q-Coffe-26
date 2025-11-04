import React from "react";
import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";

type CheckboxScoreProps = {
  label: string;
  checkboxes: boolean[];
  onChange: (checkboxes: boolean[]) => void;
  score: number;
};

export default function CheckboxScore({
  label,
  checkboxes,
  onChange,
  score,
}: CheckboxScoreProps) {
  const handleCheckboxChange = (index: number, newValue: boolean) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = newValue;
    onChange(newCheckboxes);
  };

  return (
    <View className="space-y-3">
      <Text className="text-neutral-700 text-base font-medium">{label}</Text>

      <View className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-sm text-neutral-600">
            Marque cada xícara (2 pontos cada)
          </Text>
          <Text className="bg-amber-700 text-white px-3 py-1 rounded-lg font-semibold">
            {score.toFixed(2)}
          </Text>
        </View>

        <View className="flex-row justify-center gap-4">
          {checkboxes.map((checked, index) => (
            <View key={index} className="flex-col items-center gap-2">
              <Checkbox
                value={checked}
                onValueChange={(value) => handleCheckboxChange(index, value)}
                color={checked ? "#92400E" : undefined} // amber-700 quando marcado
                style={{
                  width: 22,
                  height: 22,
                  borderColor: "#D1D5DB", // neutral-300
                  borderWidth: checked ? 0 : 2,
                  borderRadius: 6,
                }}
              />
              <Text className="text-xs text-neutral-500">
                Cup {index + 1}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
