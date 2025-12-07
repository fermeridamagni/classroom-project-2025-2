import { useColorScheme } from "react-native";

export const useTheme = (): "light" | "dark" => {
  const colorScheme = useColorScheme();

  if (!colorScheme || colorScheme === "unspecified") {
    return "light";
  }

  return colorScheme;
};
