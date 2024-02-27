import React from "react";

const NewsCard = ({ item }) => {
  const { image, heading, description } = item;
  return (
    <div className="h-[420px]">
      <img className="h-[50%]  object-cover w-full  " src={image} />
      <div className="p-4">
        <p className="font-bold mt-2 line-clamp-2">{heading}</p>
        <p className="text-gray-500 mt-2 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
