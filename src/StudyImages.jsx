import {useState} from "react";

export default function StudyImages({ images, onOpen }) {
  return (
    <div className="md:w-1/3 flex flex-col gap-4 mt-6 md:mt-0">
      {images.map((img, idx) => (
        <figure
          key={idx}
          className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => onOpen(img)}
        >
          <img
            src={img}
            alt={`Figure ${idx + 1}`}
            className="w-full h-auto"
          />
          <figcaption className="text-sm text-gray-500 text-center mt-1">
            Figure {idx + 1}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

