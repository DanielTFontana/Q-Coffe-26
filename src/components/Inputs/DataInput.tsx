import { View, Text, TextInput, TextInputProps } from "react-native";
import { LucideIcon} from "lucide-react-native";

type DataInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  icon: LucideIcon;
} & TextInputProps;

export function DataInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  icon: Icon,
  ...rest
}: DataInputProps) {
  const IconComponent = Icon as LucideIcon; 

  return (
    <View >
      <Text className="text-neutral-700 mb-1 font-sans-regular">{label}</Text>
      <View className="flex-row items-center border border-neutral-200 bg-neutral-50 rounded-xl px-3">
        <IconComponent color="#a3a3a3" size={18} />
        <TextInput
          className="flex-1 h-12 pl-2 text-neutral-800"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          {...rest}
        />
      </View>
    </View>
  );
}