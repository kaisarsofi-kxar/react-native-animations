import { Drawer } from "expo-router/drawer";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useColorScheme } from "../../hooks/useColorScheme";

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity
            onPress={() => router.push("/notifications")}
            className="mr-3 "
          >
            <Ionicons name="notifications-outline" size={24} color="blue" />
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Screen name="(tabs)" options={{ title: "Home" }} />
      <Drawer.Screen
        name="gallery/index"
        options={{
          title: "Gallery",
          headerShown: true,
          headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        }}
      />
    </Drawer>
  );
}
