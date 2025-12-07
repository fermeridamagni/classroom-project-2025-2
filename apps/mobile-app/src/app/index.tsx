import { ThemedText } from "@ui/themed-text";
import { ThemedView } from "@ui/themed-view";

export default function HomeScreen() {
  return (
    <ThemedView>
      <ThemedText className="text-red-400" type="title">
        Welcome!
      </ThemedText>
    </ThemedView>
  );
}
