import CustomInput from "./components/ui/CustomInput";
import { Search } from "lucide-react";

function App() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center h-full px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-[#121826] font-bold mb-2">Search</h1>
          <p className="text-[#121826] mb-6 text-center">
            Search high-resolution images from Unsplash
          </p>

          <div className="w-full sm:w-[528px]">
            <CustomInput
              icon={<Search />}
              type="text"
              placeholder="Enter your keywords..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
