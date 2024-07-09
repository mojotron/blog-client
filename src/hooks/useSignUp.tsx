import { useCallback, useState } from "react";
import type { SignUpFormType } from "../types/formDataTypes";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = useCallback(async (data: SignUpFormType) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/v1/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      console.log(json);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { signUp, loading, error };
};
