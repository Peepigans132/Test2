import React from "react";
import { useNavigate } from "react-router-dom";

const images = [
  {
    id: 1,
    src: "https://via.placeholder.com/150",
    alt: "Donkey Kong Country 2: Diddy's Kong Quest",
  },
  { id: 2, src: "https://via.placeholder.com/150", alt: "Super Mario World" },
];

export default function ClickableImages() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/image/${id}`);
  };

  return (
    <div className="bg-green-500 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-brown-800 mb-2 font-serif">
        Gaming Encyclopedia
      </h1>
      <p className="text-lg text-center mb-6">
        Here's some games we recommend to check out. Click the image to learn
        the game's info
      </p>
      <button className="absolute top-4 right-4 bg-white p-2 rounded shadow flex items-center">
        Search 🔍
      </button>
      <div className="grid grid-cols-2 gap-8">
        {images.map((image) => (
          <div key={image.id} className="text-center">
            <img
              src={image.src}
              alt={image.alt}
              className="cursor-pointer rounded-lg shadow-lg hover:scale-105 transition-transform w-64 h-64"
              onClick={() => handleClick(image.id)}
            />
            <p className="mt-2 text-white font-semibold">{image.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
