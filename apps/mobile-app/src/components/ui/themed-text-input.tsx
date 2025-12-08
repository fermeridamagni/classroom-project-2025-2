import { useTheme } from "@hooks/use-theme";
import { Colors } from "@lib/theme";
import { ThemedText } from "@ui/themed-text";
import { TextInput, type TextInputProps, View } from "react-native";

export interface ThemedTextInputProps extends TextInputProps {
  label?: string;
  errorMessages?: string[];
}

export const ThemedTextInput = ({
  label,
  errorMessages,
  ...props
}: ThemedTextInputProps) => {
  const colorScheme = useTheme();

  return (
    <View style={{ width: "100%", position: "relative" }}>
      {Boolean(label) && (
        <View
          style={{
            position: "absolute",
            top: -10,
            left: 12,
            zIndex: 10,
            borderRadius: 16,
            paddingHorizontal: 12,
            paddingVertical: 4,
            backgroundColor: Colors[colorScheme].background,
          }}
        >
          <ThemedText>{label}</ThemedText>
        </View>
      )}

      <TextInput
        placeholderTextColor={Colors[colorScheme].muted}
        style={{
          width: "100%",
          borderRadius: 16,
          borderWidth: 2,
          paddingHorizontal: 16,
          paddingTop: label ? 20 : 12,
          paddingBottom: 12,
          color: Colors[colorScheme].text,
          borderColor: Colors[colorScheme].border,
          backgroundColor: Colors[colorScheme].background,
        }}
        {...props}
      />

      {errorMessages ? (
        <View style={{ marginTop: 4 }}>
          {errorMessages.map((message) => (
            <View key={`input-error-${message}`}>
              <ThemedText>* </ThemedText>
              <ThemedText
                style={{
                  textDecorationLine: "underline",
                  textDecorationStyle: "dotted",
                  textDecorationColor: Colors[colorScheme].muted,
                  outlineOffset: 4,
                  color: Colors[colorScheme].muted,
                }}
              >
                {message}
              </ThemedText>
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
};
