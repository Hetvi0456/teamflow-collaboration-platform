import { ReactNode, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";

import { AuthContext } from "./AuthContext";
import { supabase } from "../lib/supabase";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({
  children,
}: Props) {
  const [session, setSession] =
    useState<Session | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session);
        setLoading(false);
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}