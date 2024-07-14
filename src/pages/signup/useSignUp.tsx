import { useCallback, useState } from "react";
import type { SignUpFormType } from "../../types/formDataTypes";
import type { FormInputErrorType } from "../../types/errorTypes";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FormInputErrorType | null>(null);
  const navigate = useNavigate();

  const signUp = useCallback(
    async (data: SignUpFormType) => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/v1/users/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        });

        const json = await response.json();

        if (json.status === "error") {
          setError({
            inputFieldError: json.inputFieldError || {},
            message: json.msg,
          });
        }

        if (response.ok) {
          navigate("/");
        }
      } catch (error) {
        if (error instanceof Error) {
          setError({ message: error.message, inputFieldError: {} });
        }
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  return { signUp, loading, error };
};
