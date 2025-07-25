const items = Array.from({ length: 20 });

export const GridSkeleton = () => {
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
