import { useSession } from "@hooks/use-session";
import { useValidatePassword, useValidateText } from "@magnidev/react-hooks";
import { ThemedButton } from "@ui/themed-button";
import { ThemedSafeArea } from "@ui/themed-safe-area";
import { ThemedText } from "@ui/themed-text";
import { ThemedTextInput } from "@ui/themed-text-input";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import z from "zod";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Page() {
  const { signIn, isLoading } = useSession();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateUsername = useValidateText(username, z.string().length(10));
  const validatePassword = useValidatePassword(password);

  const isValid =
    (validateUsername.isValid && validatePassword.isValid) || isLoading;

  return (
    <ThemedSafeArea
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View>
          <Image
            placeholder={{ blurhash }}
            source={require("@assets/images/ipn-logo.webp")}
            style={{ width: 200, height: 200, marginBottom: 20 }}
            transition={1000}
          />

          <ThemedText
            style={{
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Inicia Sesión
          </ThemedText>
        </View>

        <View style={{ width: 350, marginTop: 40, gap: 28 }}>
          <ThemedTextInput
            inputMode="numeric"
            label="Usuario"
            maxLength={10}
            numberOfLines={1}
            onChangeText={setUsername}
            placeholder={`${new Date().getFullYear()}000000`}
            value={username}
          />

          <ThemedTextInput
            label="Contraseña"
            numberOfLines={1}
            onChangeText={setPassword}
            placeholder={"********"}
            secureTextEntry
            value={password}
          />

          <ThemedButton
            isDisabled={!isValid}
            onPress={() => {
              signIn(username, password);
              router.replace("/(home)");
            }}
            style={{ marginTop: 10 }}
          >
            <ThemedText>Iniciar Sesión</ThemedText>
          </ThemedButton>
        </View>
      </KeyboardAvoidingView>
    </ThemedSafeArea>
  );
}
