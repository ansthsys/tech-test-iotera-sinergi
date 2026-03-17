import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

export default function PrivateWrapper() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to={"/login"} />;
}
