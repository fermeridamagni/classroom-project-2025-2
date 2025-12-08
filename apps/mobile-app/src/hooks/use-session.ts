import { AuthContext } from "@lib/auth/context";
import { useContext } from "react";

export function useSession() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }

  return value;
}
