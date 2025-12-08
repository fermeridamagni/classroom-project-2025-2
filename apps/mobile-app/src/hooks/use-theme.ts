import { useColorScheme } from "react-native";

export const useTheme = (): "light" | "dark" => {
  const colorScheme = useColorScheme();

  if (!colorScheme) {
    return "light";
  }

  return colorScheme;
};
