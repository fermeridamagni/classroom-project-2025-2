import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { SessionProvider } from "@lib/auth/context";
import { Stack } from "expo-router";
// biome-ignore lint/performance/noNamespaceImport: This is required for the SplashScreen API
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

/*
 * TODO: This is currently not working because Nativewind V5 is in PreRelease,
 * V5 DOCS: https://www.nativewind.dev/v5/getting-started/installation
 * Once Nativewind V5 is stable, the styles should be changed to TalwindCSS and this import should be uncommented.
 */
// import "@assets/styles/globals.css";

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

  return (
    <SessionProvider>
      <Stack
        initialRouteName="(home)"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(home)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="sign-in/index"
          options={{
            title: "Sign In",
          }}
        />
      </Stack>
    </SessionProvider>
  );
}
