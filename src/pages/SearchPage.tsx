import { Search } from "lucide-react";
import CustomInput from "../components/ui/CustomInput";
import { useSearchImages } from "../hooks/useSearchImages";
import type { apiResponse } from "../interfaces/api";

export const SearchPage = () => {
  const { textValue, setTextValue, handleSubmit, searchResult } =
    useSearchImages();

  return (
    <div className="flex flex-col items-center border h-full justify-center px-4">
      <form className="w-full sm:w-[528px]" onSubmit={handleSubmit}>
        <h1 className="text-4xl text-[#121826] font-bold mb-2 text-center">
          Search
        </h1>
        <p className="text-[#121826] mb-6 text-center">
          Search high-resolution images from Unsplash
        </p>
        <CustomInput
          type="text"
          icon={<Search />}
          value={textValue}
          placeholder="Enter your keywords..."
          onChange={(event) => setTextValue(event.target.value)}
        />
      </form>

      <div className="grid grid-cols-4 gap-4 ">
        {searchResult?.data?.map((image: apiResponse) => (
          <div key={image.id}>
            <img
              src={image.smallUrl}
              alt={image.altDescription}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
