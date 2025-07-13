import { createBrowserRouter, redirect } from "react-router";
import App from "../App";
import { SearchPage } from "../pages/SearchPage";
import { CollectionsPage } from "../pages/CollectionsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, loader: () => redirect("/search") },
      { path: "search", element: <SearchPage /> },
      { path: "collections", element: <CollectionsPage /> },
      { path: "/*", loader: () => redirect("/search") },
    ],
  },
]);
