import GradientTitle from "../components/ui/GradientTitle";
import { UNSPLASH_LICENSE } from "../constants";
import { useCollectionsQuery } from "../hooks/queries/useCollectionsQuery";

export const CollectionsPage = () => {
  const { data } = useCollectionsQuery();

  return (
    <div className="flex flex-col items-center justify-center pt-9 gap-4 h-full">
      <GradientTitle>Collections</GradientTitle>
      <p className="max-w-[400px] text-center">
        Explore the world through collections of beautiful photos free to use
        under the{" "}
        <a
          className="font-medium underline"
          href={UNSPLASH_LICENSE}
          target="_blank"
        >
          Unsplash License.
        </a>
      </p>

      <div className=" w-full px-[72px] grid grid-cols-3 h-full">
        {data?.map((collection) => (
          <div
            key={collection.id}
            className="w-[357px] h-[283px] gap-4  overflow-hidden border border-red-700 "
          >
            <div className=" grid grid-cols-2 grid-rows-2">
              {collection.images?.map((image) => (
                <img src={image} className="w-full h-full object-cover" />
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium">{collection.name}</span>
              <span className="font-normal text-[#ABA8A8]">
                {collection.images.length}{" "}
                {collection.images.length === 1 ? "photo" : "photos"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
