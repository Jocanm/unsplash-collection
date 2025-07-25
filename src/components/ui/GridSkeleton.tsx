export const GridSkeleton = () => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`skeleton-${i}`}
          className="mb-4 w-full h-[250px] bg-gray-200 rounded-lg animate-pulse"
        />
      ))}
    </>
  );
};
