import {useState} from "react";

export default function ProjectImages({ images, onOpen }) {
  return (
    <div className="flex flex-col gap-4 mt-6 md:mt-0">
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
        </figure>
      ))}
    </div>
  );
}

