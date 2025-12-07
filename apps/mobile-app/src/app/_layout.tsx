import { useColorScheme } from "@hooks/use-color-scheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Slot } from "expo-router";
// biome-ignore lint/performance/noNamespaceImport: This is required for the SplashScreen API
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "@assets/styles/globals.css";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { useEffect } from "react";

export const unstable_settings = {
  anchor: "(tabs)",
};

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme() ?? "light";

  const [fontsLoaded, fontsError] = useFonts({
    "WorkSans-Regular": WorkSans_400Regular,
  });

  useEffect(() => {
    const hideSplash = () => {
      if (fontsLoaded || fontsError) {
        try {
          SplashScreen.hide();
        } catch (error) {
          // Splash screen is already hidden or error occurred
          console.warn("Error hiding splash screen:", error);
        }
      }
    };

    hideSplash();
  }, [fontsLoaded, fontsError]);

  if (!(fontsLoaded || fontsError)) {
    return null;
  }

  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider value={theme}>
      <Slot />

      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}
