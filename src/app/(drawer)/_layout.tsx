import { Drawer } from "expo-router/drawer";
import React from "react";

import { useColorScheme } from "../../hooks/useColorScheme";

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer>
      <Drawer.Screen name="(tabs)" options={{ title: "Home" }} />
      <Drawer.Screen
        name="gallery/index"
        options={{ title: "Gallery", headerShown: false }}
      />
    </Drawer>
  );
}
