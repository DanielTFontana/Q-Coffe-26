import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ArrowLeft, Save, Coffee } from "lucide-react-native";
import CheckboxScore from "../../../components/evaluation/CheckBoxScore";
import ScoreSlider from "../../../components/evaluation/ScoreSlider"; 
import DefectScore from "../../../components/evaluation/DefactScore";

type User = {
  id: string;
  name: string;
  email: string;
  type: "evaluator" | "producer";
};

type EvaluationPageProps = {
  user: User;
  onBack: () => void;
};

export default function EvaluationPage({ user, onBack }: EvaluationPageProps) {
  const [sampleNumber, setSampleNumber] = useState("");
  const [roastLevel, setRoastLevel] = useState("");
  const [fragrance, setFragrance] = useState(6);
  const [flavor, setFlavor] = useState(6);
  const [aftertaste, setAftertaste] = useState(6);
  const [acidity, setAcidity] = useState(6);
  const [acidityIntensity, setAcidityIntensity] = useState<
    "low" | "medium" | "high"
  >("medium");
  const [body, setBody] = useState(6);
  const [bodyLevel, setBodyLevel] = useState<"light" | "medium" | "heavy">(
    "medium"
  );
  const [balance, setBalance] = useState(6);
  const [overall, setOverall] = useState(6);
  const [uniformity, setUniformity] = useState([false, false, false, false, false]);
  const [cleanCup, setCleanCup] = useState([false, false, false, false, false]);
  const [sweetness, setSweetness] = useState([false, false, false, false, false]);
  const [taintDefects, setTaintDefects] = useState(0);
  const [faultDefects, setFaultDefects] = useState(0);
  const [notes, setNotes] = useState("");

  const calculateCheckboxScore = (checkboxes: boolean[]) =>
    checkboxes.filter(Boolean).length * 2;

  const calculateTotal = () => {
    const uniformityScore = calculateCheckboxScore(uniformity);
    const cleanCupScore = calculateCheckboxScore(cleanCup);
    const sweetnessScore = calculateCheckboxScore(sweetness);
    const defectsDeduction = taintDefects * 2 + faultDefects * 4;

    return (
      fragrance +
      flavor +
      aftertaste +
      acidity +
      body +
      balance +
      uniformityScore +
      cleanCupScore +
      sweetnessScore +
      overall -
      defectsDeduction
    );
  };

  const handleSave = () => {
    const evaluation = {
      sampleNumber,
      roastLevel,
      scores: {
        fragrance,
        flavor,
        aftertaste,
        acidity,
        acidityIntensity,
        body,
        bodyLevel,
        balance,
        uniformity: calculateCheckboxScore(uniformity),
        cleanCup: calculateCheckboxScore(cleanCup),
        sweetness: calculateCheckboxScore(sweetness),
        overall,
        defects: {
          taint: taintDefects,
          fault: faultDefects,
        },
      },
      total: calculateTotal(),
      notes,
      evaluator: user.name,
      date: new Date().toISOString(),
    };

    console.log("Evaluation saved:", evaluation);
    Alert.alert(
      "Avaliação salva!",
      `Pontuação final: ${calculateTotal().toFixed(2)}`
    );
  };

  return (
    <View className="flex-1 bg-amber-50">
      {/* Header */}
      <View className="bg-white border-b border-neutral-200 shadow-sm px-4 py-4 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={onBack}
          className="flex-row items-center gap-2"
        >
          <ArrowLeft color="#78350F" size={20} />
          <Text className="text-amber-900 font-medium">Voltar</Text>
        </TouchableOpacity>

        <View className="flex-row items-center gap-4">
          <View className="items-end">
            <Text className="text-sm text-neutral-600">Pontuação Final</Text>
            <Text className="text-lg font-semibold text-amber-900">
              {calculateTotal().toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={handleSave}
            className="flex-row items-center bg-amber-700 px-4 py-2 rounded-lg"
          >
            <Save color="white" size={18} />
            <Text className="ml-2 text-white font-medium">Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main */}
      <ScrollView className="flex-1 px-4 py-6">
        <View className="bg-white rounded-3xl shadow p-6 mb-8">
          {/* Amostra e Torra */}
          <View className="flex-row gap-4 mb-6">
            <View className="flex-1">
              <Text className="text-neutral-700 mb-2">Número da Amostra</Text>
              <TextInput
                placeholder="Ex: #001"
                value={sampleNumber}
                onChangeText={setSampleNumber}
                className="bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3"
              />
            </View>

            <View className="flex-1">
              <Text className="text-neutral-700 mb-2">Nível de Torra</Text>
              <TextInput
                placeholder="Ex: Médio"
                value={roastLevel}
                onChangeText={setRoastLevel}
                className="bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3"
              />
            </View>
          </View>

          {/* Coluna Esquerda */}
          <View className="gap-6">
            <ScoreSlider
              label="Fragrance / Aroma"
              value={fragrance}
              onChange={setFragrance}
              qualities={["Dry", "Break", "Complexity"]}
            />

            <ScoreSlider
              label="Flavor"
              value={flavor}
              onChange={setFlavor}
              qualities={["Intensity", "Quality"]}
            />

            <ScoreSlider
              label="Aftertaste"
              value={aftertaste}
              onChange={setAftertaste}
              qualities={["Length", "Quality"]}
            />

            {/* Acidity */}
            <Text className="text-neutral-700 font-medium mt-2 mb-2">
              Acidity
            </Text>
            <View className="flex-row gap-2 mb-3">
              {(["low", "medium", "high"] as const).map((level) => (
                <TouchableOpacity
                  key={level}
                  onPress={() => setAcidityIntensity(level)}
                  className={`flex-1 px-3 py-2 rounded-lg border ${
                    acidityIntensity === level
                      ? "bg-amber-700 border-amber-700"
                      : "bg-white border-neutral-300"
                  }`}
                >
                  <Text
                    className={`text-center ${
                      acidityIntensity === level ? "text-white" : "text-neutral-700"
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <ScoreSlider label="" value={acidity} onChange={setAcidity} />

            {/* Body */}
            <Text className="text-neutral-700 font-medium mt-2 mb-2">Body</Text>
            <View className="flex-row gap-2 mb-3">
              {(["light", "medium", "heavy"] as const).map((level) => (
                <TouchableOpacity
                  key={level}
                  onPress={() => setBodyLevel(level)}
                  className={`flex-1 px-3 py-2 rounded-lg border ${
                    bodyLevel === level
                      ? "bg-amber-700 border-amber-700"
                      : "bg-white border-neutral-300"
                  }`}
                >
                  <Text
                    className={`text-center ${
                      bodyLevel === level ? "text-white" : "text-neutral-700"
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <ScoreSlider label="" value={body} onChange={setBody} />

            <CheckboxScore
              label="Uniformity"
              checkboxes={uniformity}
              onChange={setUniformity}
              score={calculateCheckboxScore(uniformity)}
            />

            <ScoreSlider
              label="Balance"
              value={balance}
              onChange={setBalance}
              qualities={["Harmony", "Complexity"]}
            />

            <CheckboxScore
              label="Clean Cup"
              checkboxes={cleanCup}
              onChange={setCleanCup}
              score={calculateCheckboxScore(cleanCup)}
            />

            <CheckboxScore
              label="Sweetness"
              checkboxes={sweetness}
              onChange={setSweetness}
              score={calculateCheckboxScore(sweetness)}
            />

            <ScoreSlider
              label="Overall"
              value={overall}
              onChange={setOverall}
              qualities={["Personal", "Preference"]}
            />

            <DefectScore
              taint={taintDefects}
              fault={faultDefects}
              onTaintChange={setTaintDefects}
              onFaultChange={setFaultDefects}
            />

            {/* Notes */}
            <Text className="text-neutral-700 font-medium mt-4 mb-2">
              Notas e Observações
            </Text>
            <TextInput
              placeholder="Adicione suas observações..."
              value={notes}
              onChangeText={setNotes}
              multiline
              className="bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 min-h-[100px] text-neutral-700"
            />

            {/* Pontuação Final */}
            <View className="bg-amber-50 border border-amber-200 rounded-xl py-5 mt-6 items-center">
              <Text className="text-neutral-600 mb-2">Pontuação Final</Text>
              <Text className="text-amber-900 font-semibold text-xl">
                {calculateTotal().toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
