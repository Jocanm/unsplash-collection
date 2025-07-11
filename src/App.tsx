import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Navbar } from "./components/ui/Navbar";
import { SearchPage } from "./pages/SearchPage";
import { CollectionsPage } from "./pages/CollectionsPage";

function App() {
    return (
        <div className="h-screen">
            <div className="flex flex-col h-full">
                <Navbar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<Navigate to="/search" />} />
                        <Route path="search" element={<SearchPage />} />
                        <Route
                            path="collections"
                            element={<CollectionsPage />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
