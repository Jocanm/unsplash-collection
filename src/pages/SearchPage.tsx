import { useSearchImages } from "../hooks/useSearchImages";
import { Search } from "lucide-react";
import CustomInput from "../components/ui/CustomInput";
import { useState } from "react";
import { GridSkeleton } from "../components/ui/GridSkeleton";

export const SearchPage = () => {
  const {
    textValue,
    setTextValue,
    handleSubmit,
    searchResult,
  } = useSearchImages();
  const [isLoading] = useState(false);
  const isResultsReady = searchResult?.data && !isLoading;

  return (
    <>
      {isResultsReady && (
        <div className="absolute flex top-[65px] z-0 h-20 w-full bg-gradient-to-r from-orange-300 to-purple-600 opacity-100 translate-y-4 animate-fade-up" />
      )}

      <div
        className={`flex flex-col pt-[90px] items-center justify-center px-6 overflow-y-visible flex-auto z-1 
        transition-all duration-500 ease-in-out
        ${isResultsReady ? "translate-y-[-40px] opacity-100" : "translate-y-0 opacity-100"}`}
      >
        <form
          className="w-full sm:w-[528px] bg-white rounded-[8px]"
          onSubmit={handleSubmit}
        >
          {!isResultsReady && (
            <>
              <h1 className="text-4xl text-[#121826] font-bold mb-2 text-center">
                Search
              </h1>
              <p className="text-[#121826] mb-6 text-center">
                Search high-resolution images from Unsplash
              </p>
            </>
          )}

          <CustomInput
            type="text"
            icon={<Search />}
            value={textValue}
            placeholder="Enter your keywords..."
            onChange={(event) => setTextValue(event.target.value)}
          />
        </form>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-7 px-[42px] py-12 w-full">
          {isLoading || !searchResult?.data ? (
            <GridSkeleton />
          ) : (
            searchResult.data.map((image) => (
              <div
                key={image.id}
                className="mb-4 transition transform duration-300 ease-in hover:-translate-y-1 hover:scale-110"
              >
                <img
                  src={image.regularUrl}
                  alt={image.altDescription}
                  width={image.width}
                  height={image.height}
                  className="rounded-md"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
