import { useTheme } from "@hooks/use-theme";
import { Colors } from "@lib/theme";
import type { ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type ThemedSafeAreaProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export const ThemedSafeArea = ({
  children,
  style,
  ...props
}: ThemedSafeAreaProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors[theme].background,
        ...style,
      }}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};
