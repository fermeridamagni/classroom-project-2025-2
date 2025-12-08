import { useTheme } from "@hooks/use-theme";
import {
  ActivityIndicator,
  TouchableOpacity,
  type TouchableOpacityProps,
  type ViewStyle,
} from "react-native";
import { Colors } from "@/lib/theme";

export interface ThemedButtonProps
  extends Omit<TouchableOpacityProps, "disabled"> {
  style?: ViewStyle;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const ThemedButton = ({
  children,
  className,
  isDisabled,
  isLoading,
  style,
  ...props
}: ThemedButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      disabled={isDisabled || isLoading}
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 16,
        borderWidth: 2,
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: Colors[theme].background,
        borderColor: Colors[theme].border,
        opacity: isDisabled || isLoading ? 0.5 : 1,
        ...style,
      }}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={Colors[theme].text} size={22} />
      ) : null}

      {children}
    </TouchableOpacity>
  );
};
