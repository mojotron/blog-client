import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginFormType } from "../../types/formDataTypes";
import type { FormInputErrorType } from "../../types/errorTypes";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | FormInputErrorType>(null);
  const navigate = useNavigate();

  const login = useCallback(
    async (data: LoginFormType) => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/v1/users/login", {
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
          navigate("/dashboard");
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

  return { login, loading, error };
};
