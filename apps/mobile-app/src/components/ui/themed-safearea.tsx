import { useTheme } from "@hooks/use-theme";
import { cn } from "@magnidev/tailwindcss-utils";
import type { ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type ThemedSafeAreaProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export const ThemedSafeArea = ({ children, ...props }: ThemedSafeAreaProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      className={cn("relative flex-1", {
        "bg-white": theme === "light",
        "bg-black": theme === "dark",
      })}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};
