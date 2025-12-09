import { useStorageState } from "@hooks/use-storage-state";
import {
  createContext,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";

export type Session = {
  token: string;
  user: {
    id: string;
    username: string;
    name: string;
    imageUrl?: string;
    school: {
      id: string;
      name: string;
    };
    career: {
      id: string;
      name: string;
    };
    role: "student" | "teacher" | "admin";
  };
};

export const AuthContext = createContext<{
  signIn: (username: string, password: string) => Promise<void> | void;
  signOut: () => void;
  session: Session | null;
  isLoading: boolean;
}>({
  signIn: () => {
    return;
  },
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoadingSavedSession, savedSessionToken], setSessionToken] =
    useStorageState("session_token");

  useEffect(() => {
    if (savedSessionToken) {
      // TODO: Validate token and fetch user data
      // For now, we will just simulate a valid session
      setSession({
        token: savedSessionToken,
        user: {
          id: "1",
          username: "2025102001",
          name: "Juan Pérez Pérez",
          school: {
            id: "school-1",
            name: "CECyT No. 10",
          },
          career: {
            id: "career-1",
            name: "Técnico en Mecatrónica",
          },
          role: "student",
        },
      });
    }

    return () => {
      setIsLoading(false);
    };
  }, [savedSessionToken]);

  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(isLoadingSavedSession);

  return (
    <AuthContext.Provider
      value={{
        signIn: async () => {
          try {
            setIsLoading(true);

            // TODO: Implement real sign in logic

            // simulate network request
            await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds

            // For now, we will just simulate a valid session
            setSessionToken("dummy-session-token");
            setSession({
              token: "dummy-session-token",
              user: {
                id: "1",
                username: "2025102001",
                name: "Juan Pérez Pérez",
                school: {
                  id: "school-1",
                  name: "CECyT No. 10",
                },
                career: {
                  id: "career-1",
                  name: "Técnico en Mecatrónica",
                },
                role: "student",
              },
            });
          } catch {
            Alert.alert("Sign In Failed", "Invalid username or password.");
          } finally {
            setIsLoading(false);
          }
        },
        signOut: () => {
          setSession(null);
          setSessionToken(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
