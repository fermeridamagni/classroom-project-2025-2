import { useSession } from "@hooks/use-session";
import { useTheme } from "@hooks/use-theme";
import { Colors } from "@lib/theme";
import { ThemedSafeArea } from "@ui/themed-safe-area";
import { Redirect } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { ActivityIndicator } from "react-native";

export default function TabLayout() {
  const colorScheme = useTheme();
  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <ThemedSafeArea
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator color={Colors[colorScheme].text} size="large" />
      </ThemedSafeArea>
    );
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <NativeTabs iconColor={Colors[colorScheme].text}>
      <NativeTabs.Trigger name="index">
        <Icon drawable="custom_android_drawable" sf="house.fill" />

        <Label>Inicio</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Icon
          drawable="custom_settings_drawable"
          sf="person.text.rectangle.fill"
        />

        <Label>Credencial</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <Icon drawable="custom_settings_drawable" sf="gear" />

        <Label>Configuración</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
