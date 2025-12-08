import { useTheme } from "@hooks/use-theme";
import { Colors } from "@lib/theme";
import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {};

export function ThemedText({ style, ...props }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        {
          color: Colors[theme].text,
          fontFamily: "WorkSans-Regular",
        },
        style,
      ]}
      {...props}
    />
  );
}
