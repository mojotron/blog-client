import { useCallback, useState } from "react";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async () => {}, []);

  return { login, isLoading, error };
};
