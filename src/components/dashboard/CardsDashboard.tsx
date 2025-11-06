import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { LucideIcon, Plus } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";

type CardsDashboardProps = {
  evaluationType?: boolean;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  onPress?: () => void;
  link:string;
};

export function CardsDashboard({
  icon: Icon,
  title,
  subtitle,
  onPress,
  evaluationType,
  link,
}: CardsDashboardProps) {
  const IconComponent = Icon as LucideIcon;

 const borderColor = evaluationType ? "#fcd34d" : "#bbf7d0"; // amber-300 : green-200
  const iconBg = evaluationType
    ? "bg-orange-50"
    : "bg-green-50";
  const iconColor = evaluationType ? "#d86117" : "#15803d";

  return (
    <Link href={link} asChild>
    <Pressable
      onPress={onPress}
      className="w-full bg-white rounded-2xl p-5 mb-4 shadow-sm flex-row items-center border"
      style={{ borderColor }}
    >
      <View className={`${iconBg} p-3 rounded-xl`}>
        <IconComponent color={iconColor} size={24} />
      </View>

      <View className="ml-4">
        <Text className="text-neutral-800 font-sans-bold">{title}</Text>
        <Text className="text-neutral-500 text-sm font-sans-regular">{subtitle}</Text>
      </View>
    </Pressable>
    </Link>

  );
}
