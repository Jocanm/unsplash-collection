import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { SearchPage } from "../pages/SearchPage";
import { CollectionsPage } from "../pages/CollectionsPage";
import { Navbar } from "../components/ui/Navbar";
import { ROUTES } from "./routes.enum";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path={ROUTES.search} element={<SearchPage />} />
        <Route path={ROUTES.collections} element={<CollectionsPage />} />
        <Route
          path={ROUTES.matchAll}
          element={<Navigate to={ROUTES.search} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
