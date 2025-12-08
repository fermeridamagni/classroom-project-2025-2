import { useTheme } from "@hooks/use-theme";
import { Colors } from "@lib/theme";
import { View, type ViewProps } from "react-native";

export interface ThemedDividerProps extends ViewProps {}

export const ThemedDivider = ({
  className,
  style,
  ...props
}: ThemedDividerProps) => {
  const colorScheme = useTheme();

  return (
    <View
      accessibilityLabel="separator"
      style={[
        {
          width: "100%",
          height: 2,
          backgroundColor: Colors[colorScheme].border,
        },
        style,
      ]}
      {...props}
    />
  );
};
