import { Search } from "lucide-react";
import CustomInput from "../components/ui/CustomInput";
import { useSearchImages } from "../hooks/useSearchImages";

export const SearchPage = () => {
  const { textValue, setTextValue, handleSubmit } = useSearchImages();

  return (
    <div className="flex flex-col items-center h-full justify-center px-4">
      <h1 className="text-4xl text-[#121826] font-bold mb-2">Search</h1>
      <p className="text-[#121826] mb-6 text-center">
        Search high-resolution images from Unsplash
      </p>

      <form className="w-full sm:w-[528px]" onSubmit={handleSubmit}>
        <CustomInput
          type="text"
          icon={<Search />}
          value={textValue}
          placeholder="Enter your keywords..."
          onChange={(event) => setTextValue(event.target.value)}
        />
      </form>
    </div>
  );
};
