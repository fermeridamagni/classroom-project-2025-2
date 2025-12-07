import { useTheme } from "@hooks/use-theme";
import { cn } from "@magnidev/tailwindcss-utils";
import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      className={cn({
        "text-white": theme === "dark",
        "text-black": theme === "light",
        "font-sans text-base": type === "default",
        "font-bold font-sans text-2xl": type === "title",
        "font-sans text-gray-500 text-lg": type === "subtitle",
        "font-sans text-base text-blue-600 underline": type === "link",
      })}
      {...rest}
    />
  );
}
