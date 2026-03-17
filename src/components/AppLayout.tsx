import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <header>
        <h1>header</h1>
      </header>
      <main>
        main
        <Outlet />
      </main>
    </>
  );
}
