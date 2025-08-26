import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import "react-native-reanimated";
import "../../global.css";

import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useColorScheme } from "../hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar />
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />

          <Stack.Screen
            name="gallery-modal/index"
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="notifications/index"
            options={{ headerShown: false }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
