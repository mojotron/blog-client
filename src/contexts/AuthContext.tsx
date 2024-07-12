import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";

type UserType = {
  _id: string;
  username: string;
};

type AuthStateType = {
  user: null | UserType;
};

type AuthActionsType = { type: "auth/login"; payload: UserType };

const authReducer = (state: AuthStateType, action: AuthActionsType) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

const useAuthSource = (): { user: null | UserType } => {
  const [{ user }, dispatch] = useReducer(authReducer, { user: null });

  // check if user is already in local storage, for page reload
  useEffect(() => {
    const userData = localStorage.getItem("blog-api-user");
    if (userData === null) return;
    dispatch({ type: "auth/login", payload: JSON.parse(userData) });
  }, []);

  const authLogin = useCallback((userData: UserType) => {
    dispatch({ type: "auth/login", payload: userData });
  }, []);

  return { user };
};

export const AuthContext = createContext<ReturnType<typeof useAuthSource>>(
  {} as unknown as ReturnType<typeof useAuthSource>
);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContext.Provider value={useAuthSource()}>
      {children}
    </AuthContext.Provider>
  );
};
