import { ThemedSafeArea } from "@ui/themed-safearea";
import { Text } from "react-native";

export default function Page() {
  return (
    <ThemedSafeArea>
      <Text style={{ color: "#fff", fontSize: 18 }}>
        Hello, welcome to the mobile app!
      </Text>
    </ThemedSafeArea>
  );
}
