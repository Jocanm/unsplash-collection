import { Outlet } from "react-router";
import { Navbar } from "./components/ui/Navbar";

function App() {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
