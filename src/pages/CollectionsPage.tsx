import { CollectionImages } from "../components/CollectionImages";
import GradientTitle from "../components/ui/GradientTitle";
import { UNSPLASH_LICENSE } from "../constants";
import { useCollectionsQuery } from "../hooks/queries/useCollectionsQuery";

export const CollectionsPage = () => {
  const { data = [] } = useCollectionsQuery();

  return (
    <div className="flex flex-col items-center justify-center py-9 max-w-7xl mx-auto w-full">
      <GradientTitle>Collections</GradientTitle>
      <p className="max-w-[400px] text-center">
        Explore the world through collections of beautiful photos free to use
        under the{" "}
        <a
          target="_blank"
          href={UNSPLASH_LICENSE}
          className="font-medium underline"
        >
          Unsplash License.
        </a>
      </p>

      <div className="w-full px-[72px] h-full gap-8 mt-14 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {data?.map((collection) => (
          <div
            key={collection.id}
            className="h-[283px] gap-4 overflow-hidden"
          >
            <CollectionImages images={collection.images} />
            <div className="flex flex-col gap-1 mt-4">
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
