import { useAuth } from "@/hooks/useAuth";
import { Link, Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <header className="border-b border-b-gray-50">
        <div className="navbar bg-base-100 shadow-sm py-1.5 px-3 max-w-7xl mx-auto">
          <div className="flex-1">
            <div className="w-max">
              <Link
                to={"/"}
                className="text-base font-medium flex flex-col items-start justify-center"
              >
                <span className="block">Tech Test</span>
                <span className="block">Iotera Sinergi</span>
              </Link>
            </div>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 space-x-3">
              <li>
                <Link to={"/"}>Transaction</Link>
              </li>
              <li>
                <Link to={"/log-device"}>Log</Link>
              </li>

              <AuthButton />
            </ul>
          </div>
        </div>
      </header>
      <main className="">
        <div className="w-full max-w-7xl mx-auto py-2 px-5">
          <Outlet />
        </div>
      </main>
    </>
  );
}

function AuthButton() {
  const { isLoading, user, logout } = useAuth();

  return (
    <li>
      {!user ? (
        <Link to={"/login"} aria-disabled={isLoading}>
          Login
        </Link>
      ) : (
        <button className="btn btn-error" disabled={isLoading} onClick={logout}>
          Logout
        </button>
      )}
    </li>
  );
}
