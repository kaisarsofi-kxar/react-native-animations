import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

type Feature = {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  route: Href;
};

const features: Feature[] = [
  {
    title: "Gallery",
    description: "Shared values, animated styles, with-entry transitions.",
    icon: "sparkles-outline",
    color: "#7c3aed",
    route: "/gallery",
  },
  {
    title: "Gestures",
    description: "Pan, fling, long-press with smooth feedback.",
    icon: "hand-left-outline",
    color: "#ea580c",
    route: "/",
  },
  {
    title: "Parallax",
    description: "Delightful scroll-based parallax effects.",
    icon: "image-outline",
    color: "#0ea5e9",
    route: "/",
  },
  {
    title: "Lists",
    description: "Animated lists and item interactions.",
    icon: "list-outline",
    color: "#16a34a",
    route: "/",
  },
  {
    title: "Transitions",
    description: "Layout transitions and crossfades.",
    icon: "swap-horizontal-outline",
    color: "#f59e0b",
    route: "/",
  },
  {
    title: "Micro-interactions",
    description: "Buttons, toggles, and subtle motion.",
    icon: "ellipse-outline",
    color: "#ef4444",
    route: "/",
  },
];

function FeatureCard({ item, index }: { item: Feature; index: number }) {
  return (
    <Animated.View
      entering={FadeInDown.delay(100 + index * 60).springify()}
      className="flex-1"
    >
      <Pressable
        onPress={() => router.push(item.route)}
        className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 active:opacity-80"
      >
        <View className="flex-row items-center gap-3">
          <View
            style={{ backgroundColor: `${item.color}22` }}
            className="h-10 w-10 items-center justify-center rounded-xl"
          >
            <Ionicons name={item.icon} size={22} color={item.color} />
          </View>
          <View className="flex-1">
            <Text className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
              {item.title}
            </Text>
            <Text
              numberOfLines={2}
              className="text-[13px] text-neutral-500 dark:text-neutral-400"
            >
              {item.description}
            </Text>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default function Index() {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className="flex-1 bg-neutral-50 dark:bg-black"
    >
      <ScrollView contentContainerClassName="pb-24">
        <Animated.View
          entering={FadeIn.duration(300)}
          className="px-5 pt-2 pb-6"
        >
          <Text className="text-3xl font-extrabold text-neutral-900 dark:text-neutral-100">
            Native Animations
          </Text>
          <Text className="mt-1 text-[15px] text-neutral-600 dark:text-neutral-400">
            Explore React Native components enhanced with Reanimated.
          </Text>

          <View className="mt-4 flex-row items-center gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2">
            <Ionicons name="search" size={18} color="#9ca3af" />
            <TextInput
              placeholder="Search components"
              placeholderTextColor="#9ca3af"
              className="flex-1 text-[15px] text-neutral-900 dark:text-neutral-100"
            />
          </View>
        </Animated.View>

        <View className="px-5">
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              Categories
            </Text>
            <Text className="text-[13px] text-blue-600 dark:text-blue-400">
              See all
            </Text>
          </View>

          <View className="flex-row flex-wrap gap-4">
            {features.map((f, i) => (
              <View key={f.title} style={{ width: "48%" }}>
                <FeatureCard item={f} index={i} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
