import "@assets/styles/globals.css";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Slot } from "expo-router";
// biome-ignore lint/performance/noNamespaceImport: This is required for the SplashScreen API
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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

  return <Slot />;
}
