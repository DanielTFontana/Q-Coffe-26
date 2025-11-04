import React from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

type ScoreSliderProps = {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  qualities?: string[];
};

export default function ScoreSlider({
  label,
  value,
  onChange,
  qualities,
}: ScoreSliderProps) {
  return (
    <View className="space-y-3">
      {/* Label */}
      {label ? (
        <Text className="text-neutral-700 text-base font-medium">{label}</Text>
      ) : null}

      {/* Qualidades */}
      {qualities && qualities.length > 0 && (
        <View className="flex-row flex-wrap gap-2">
          {qualities.map((quality, idx) => (
            <Text
              key={idx}
              className="bg-neutral-100 text-neutral-500 text-xs px-2 py-1 rounded"
            >
              {quality}
            </Text>
          ))}
        </View>
      )}

      {/* Container principal */}
      <View className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-sm text-neutral-600">Pontuação</Text>
          <Text className="bg-amber-700 text-white px-3 py-1 rounded-lg text-sm font-medium">
            {value.toFixed(2)}
          </Text>
        </View>

        {/* Slider */}
        <View className="space-y-2">
          <Slider
            value={value}
            onValueChange={onChange}
            minimumValue={6}
            maximumValue={10}
            step={0.25}
            minimumTrackTintColor="#92400E"
            maximumTrackTintColor="#E5E5E5"
            thumbTintColor="#92400E"
          />

          <View className="flex-row justify-between">
            {[6, 7, 8, 9, 10].map((mark) => (
              <Text key={mark} className="text-xs text-neutral-500">
                {mark.toFixed(2)}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
