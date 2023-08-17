import React from "react";
import ImageComponent from "./ImageComponent";

const CardContent = ({ item }) => {
  return (
    <div className="m-4 relative">
      <ImageComponent item={item}/>
      <div
        className={`absolute bottom-0 left-0 pl-6 pr-2 py-4 bg-black bg-opacity-50 text-white w-full max-h-[90%] overflow-auto group cursor-pointer`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold">{item.title}</h2>
        <p className={`text-sm hidden group-hover:flex`}>{item.overview}</p>
      </div>
    </div>
  );
};

export default CardContent;
