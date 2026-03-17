import { AuthContext } from "@/hooks/useAuthContext";
import type { AuthContextType } from "@/types/auth";
import type { User } from "@/types/user";
import { useState, useEffect, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DUMMY_USER = {
  email: "admin@email.test",
  password: "admin123",
} as User;

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser) as User);
    }

    setIsLoading(false);
  }, []);

  const login = (data: User): boolean => {
    if (
      data.email !== DUMMY_USER.email ||
      data.password !== DUMMY_USER.password
    ) {
      return false;
    }

    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const authContextValue: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
