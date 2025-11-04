import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Minus, Plus } from "lucide-react-native";

type DefectScoreProps = {
  taint: number;
  fault: number;
  onTaintChange: (value: number) => void;
  onFaultChange: (value: number) => void;
};

export default function DefectScore({
  taint,
  fault,
  onTaintChange,
  onFaultChange,
}: DefectScoreProps) {
  const totalDeduction = taint * 2 + fault * 4;

  const adjustValue = (
    current: number,
    delta: number,
    onChange: (value: number) => void
  ) => {
    const newValue = Math.max(0, current + delta);
    onChange(newValue);
  };

  return (
    <View style={{ gap: 12 }}>
      <Text style={{ fontWeight: "600", color: "#444" }}>Defects (subtract)</Text>

      <View
        style={{
          backgroundColor: "#fafafa",
          borderColor: "#ddd",
          borderWidth: 1,
          borderRadius: 12,
          padding: 16,
          gap: 16,
        }}
      >
        {/* Total Deduction */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#666", fontSize: 14 }}>Total Deduction</Text>
          <View
            style={{
              backgroundColor: "#dc2626",
              paddingHorizontal: 12,
              paddingVertical: 4,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>
              -{totalDeduction.toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Taint Section */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: "#555", fontWeight: "500" }}>Taint (×2)</Text>
            <Text style={{ fontSize: 12, color: "#888" }}>2 pontos cada</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <TouchableOpacity
              onPress={() => adjustValue(taint, -1, onTaintChange)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#ccc",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Minus size={18} color="#444" />
            </TouchableOpacity>

            <TextInput
              keyboardType="numeric"
              value={String(taint)}
              onChangeText={(text) =>
                onTaintChange(Math.max(0, parseInt(text) || 0))
              }
              style={{
                width: 50,
                height: 32,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 8,
                textAlign: "center",
                fontSize: 16,
                paddingVertical: 0,
              }}
            />

            <TouchableOpacity
              onPress={() => adjustValue(taint, 1, onTaintChange)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#ccc",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Plus size={18} color="#444" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Fault Section */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: "#555", fontWeight: "500" }}>Fault (×4)</Text>
            <Text style={{ fontSize: 12, color: "#888" }}>4 pontos cada</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <TouchableOpacity
              onPress={() => adjustValue(fault, -1, onFaultChange)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#ccc",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Minus size={18} color="#444" />
            </TouchableOpacity>

            <TextInput
              keyboardType="numeric"
              value={String(fault)}
              onChangeText={(text) =>
                onFaultChange(Math.max(0, parseInt(text) || 0))
              }
              style={{
                width: 50,
                height: 32,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 8,
                textAlign: "center",
                fontSize: 16,
                paddingVertical: 0,
              }}
            />

            <TouchableOpacity
              onPress={() => adjustValue(fault, 1, onFaultChange)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#ccc",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Plus size={18} color="#444" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
