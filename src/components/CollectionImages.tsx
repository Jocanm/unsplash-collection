export const CollectionImages = ({ images }: { images: string[] }) => {
  if (images.length >= 3) {
    return (
      <div className="grid grid-cols-2 grid-rows-2 h-[200px] w-full">
        <img
          src={images[0]}
          className="w-full h-full object-cover row-span-2"
        />
        <img src={images[1]} className="w-full h-full object-cover" />
        <img src={images[2]} className="w-full h-full object-cover" />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 grid-rows-1 h-[200px] w-full">
        {images.map((img, i) => (
          <img key={i} src={img} className="w-full h-full object-cover" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 grid-rows-1 h-[200px] w-full">
      <img src={images[0]} className="w-full h-full object-cover" />
    </div>
  );
};
