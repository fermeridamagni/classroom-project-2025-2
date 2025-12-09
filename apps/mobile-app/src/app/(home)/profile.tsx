import { useSession } from "@hooks/use-session";
import { useTheme } from "@hooks/use-theme";
import type { Session } from "@lib/auth/context";
import { Colors } from "@lib/theme";
import { ThemedSafeArea } from "@ui/themed-safe-area";
import { ThemedText } from "@ui/themed-text";
import { Image } from "expo-image";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function Page() {
  const colorScheme = useTheme();
  const { session } = useSession();

  return (
    <ThemedSafeArea
      style={{
        paddingHorizontal: 20,
        justifyContent: "center",
        gap: 40,
      }}
    >
      <ThemedText
        style={{
          textAlign: "center",
          fontSize: 30,
        }}
      >
        Mi Credencial IPN
      </ThemedText>

      <View
        accessibilityLabel="Credential Card"
        style={{
          backgroundColor: Colors[colorScheme].background,
          borderRadius: 40,
          overflow: "hidden",
          width: "100%",
          height: 550,
          borderColor: Colors[colorScheme].border,
          borderWidth: 2,
        }}
      >
        <View
          accessibilityLabel="Headder Background"
          style={{
            backgroundColor: Colors[colorScheme].primary,
            width: "100%",
            height: "auto",
            alignItems: "center",
            paddingVertical: 20,
            position: "absolute",
            zIndex: 0,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            accessibilityLabel="IPN Logo"
            source={require("@assets/images/ipn-logo-white.png")}
            style={{
              width: 50,
              height: 80,
              left: 30,
            }}
            transition={1000}
          />

          <Image
            accessibilityLabel="CECyT 10 Logo"
            source={require("@assets/images/cecyt_10-logo.png")}
            style={{
              width: 80,
              height: 80,
              right: 20,
            }}
            transition={1000}
          />
        </View>

        <View
          accessibilityLabel="Card Content"
          style={{
            padding: 20,
            flex: 1,
            zIndex: 1,
            gap: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            accessibilityLabel="Profile Picture Container"
            style={{
              width: 170,
              height: 170,
              borderRadius: "100%",
              backgroundColor: Colors[colorScheme].background,
              borderColor: Colors[colorScheme].border,
              borderWidth: 2,
              alignSelf: "center",
              overflow: "hidden",
            }}
          >
            <Image
              accessibilityLabel="Profile Picture"
              source={{
                uri: `${process.env.EXPO_PUBLIC_API_URL}/assets/users/${session?.user.id}/profile-picture`,
              }}
              style={{
                width: "100%",
                height: "100%",
              }}
              transition={1000}
            />
          </View>

          <View style={{ gap: 10 }}>
            <ThemedText
              style={{
                textAlign: "center",
                fontSize: 22,
              }}
            >
              {session?.user.name}
            </ThemedText>

            <ThemedText
              style={{
                textAlign: "center",
                fontSize: 16,
              }}
            >
              {session?.user.username} • {session?.user.career.name}
            </ThemedText>

            <ThemedText
              style={{
                textAlign: "center",
                fontSize: 16,
              }}
            >
              {getRole(session?.user.role)} • {session?.user.school.name}
            </ThemedText>
          </View>

          <QRCode
            size={150}
            value={`${process.env.EXPO_PUBLIC_API_URL}/api/verify/${session?.token}`}
          />
        </View>
      </View>
    </ThemedSafeArea>
  );
}

function getRole(role?: Session["user"]["role"]) {
  switch (role) {
    case "student":
      return "Alumno";
    case "teacher":
      return "Profesor";
    case "admin":
      return "Administrador";
    default:
      return "Usuario";
  }
}
