import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import IndexPage from "./pages/IndexPage";
import AppLayout from "./components/AppLayout";
import PrivateWrapper from "./components/PrivateWrapper";
import LoginPage from "./pages/LoginPage";
import LogPage from "./pages/LogPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<PrivateWrapper />}>
            <Route index element={<IndexPage />} />
            <Route path="log-device" element={<LogPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
