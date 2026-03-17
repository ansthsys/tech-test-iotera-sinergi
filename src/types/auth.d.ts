import type { User } from "./user";

export type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (data: User) => boolean;
  logout: () => void;
};
