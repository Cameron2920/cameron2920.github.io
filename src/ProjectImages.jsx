import { useState } from "react";

export default function ProjectImages({ images, onOpen, isHorizontal }) {
  return (
    <div
      className={`mt-6 md:mt-0 gap-4 ${
        isHorizontal
          ? "flex flex-wrap justify-start justify-evenly" // horizontal layout, wraps if needed
          : "flex flex-col" // vertical layout
      }`}
    >
      {images.map((img, idx) => (
        <figure
          key={idx}
          className={`rounded-lg shadow-lg overflow-hidden cursor-pointer ${
            isHorizontal ? "w-1/3 sm:w-1/4 md:w-1/5" : "w-full"
          }`}
          onClick={() => onOpen(img)}
        >
          <img
            src={img}
            alt={`Figure ${idx + 1}`}
            className="w-full h-auto"
          />
        </figure>
      ))}
    </div>
  );
}
