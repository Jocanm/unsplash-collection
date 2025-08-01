interface CollectionCardProps {
  name: string;
  images: string[];
}

export const CollectionCard = ({ images, name }: CollectionCardProps) => {
  const totalImages = images.length;

  return (
    <div className="flex flex-col bg-white rounded-sm overflow-hidden shadow-sm">
      <div className="w-full h-[200px]">
        {totalImages === 1 && (
          <img src={images[0]} className="w-full h-full object-cover" />
        )}

        {totalImages === 2 && (
          <div className="flex w-full h-full">
            <img src={images[0]} className="w-1/2 h-full object-cover" />
            <img src={images[1]} className="w-1/2 h-full object-cover" />
          </div>
        )}

        {totalImages >= 3 && (
          <div className="flex w-full h-full">
            <img src={images[0]} className="w-2/3 h-full object-cover" />

            <div className="flex flex-col w-1/3">
              {images.slice(1, 4).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="w-full h-1/3 object-cover"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-400">
          {totalImages} {totalImages === 1 ? "photo" : "photos"}
        </p>
      </div>
    </div>
  );
};
