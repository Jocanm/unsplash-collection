import { CollectionCard } from "../components/ui/CollectionCard";
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

      <div className="w-full max-w-[1200px] px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.map((collection) => (
          <CollectionCard
            key={collection.id}
            name={collection.name}
            images={collection.images}
          />
        ))}
      </div>
    </div>
  );
};
