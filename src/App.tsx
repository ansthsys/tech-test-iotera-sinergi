import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import IndexPage from "./pages/IndexPage";
import AppLayout from "./components/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" index element={<IndexPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
