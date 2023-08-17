import React from "react";
import Image from "next/image";

const ImageComponent = ({ item }) => {
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
      className="w-full h-full"
      width={0}
      layout="responsive"
      objectFit="contain"
      height={0}
    />
  );
};
export default React.memo(ImageComponent);
