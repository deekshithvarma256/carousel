import React from "react";
import Image from "next/image";

const ImageComponent = ({ item }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const imageLoader = ({ src, width, quality }) => {
    return `https://image.tmdb.org/t/p/w500${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  return (
    <Image
      loader={imageLoader}
      src={item.poster_path}
      alt={item.title}
      width={500}
      height={750}
      className={`w-full h-full object-contain ${isLoading ? 'bg-gray-200 rounded-md animate-pulse' : ''}`}
      onLoad={() => setIsLoading(false)}
    />
  );
};
export default React.memo(ImageComponent);
