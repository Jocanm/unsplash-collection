import { useMemo } from "react";

interface skeletonProps {
  item?: number;
}
export const GridSkeleton = ({ item = 4 }: skeletonProps) => {
  const items = useMemo(
    () => Array.from({ length: item }, (_, i) => i + 1),
    [item]
  );
  return (
    <>
      {items.map((_, i) => (
        <div
          key={`skeleton-${i}`}
          className="mb-4 w-full h-[250px] bg-gray-200 rounded-lg animate-pulse"
        />
      ))}
    </>
  );
};
