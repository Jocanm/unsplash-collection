import "./App.css";
import CustomInput from "./components/ui/CustomInput";
import { Search } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 scroll-auto">
      <h1 className="text-4xl text-[#121826] font-bold mb-2">Search</h1>
      <p className="text-[#121826] mb-6">
        Search high-resolution images from Unsplash
      </p>

      <div className="w-full max-w-md">
        <CustomInput
          icon={<Search />}
          type="text"
          placeholder="Enter your keywords..."
        />
      </div>
    </div>
  );
}

export default App;
