import React, { useEffect, useState } from "react";

export default function Character() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character")
      .then((res) => res.json())
      .then((res) => setCharacter(res));
  }, []);

  return (
    <div
      style={{ backgroundColor: "#0f1a21" }}
      className="relative w-full min-h-screen flex flex-col justify-start items-center"
    >
      <img
        className="absolute z-0 object-cover h-full w-full mt-0 left-0 opacity-50"
        src="https://static.vecteezy.com/system/resources/previews/000/190/741/original/ultra-violet-galactic-background-free-vector.jpg"
        alt="Space"
      />
      <div className="z-10 max-w-screen-xl block w-full px-5 py-10">
        <h1 className="text-white text-7xl font-bold mb-10 text-center">
          Trailer
        </h1>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="rounded border-none"
            src="https://www.youtube.com/embed/4EHbt_kSkG8"
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <h1 className="z-10 text-white text-5xl sm:text-7xl font-bold mb-5 mt-20 text-center">
        Personajes
      </h1>
      <div className="z-10 max-w-screen-xl w-full px-5 py-10 flex flex-wrap justify-center">
        {characters.map((character) => (
          <div className="text-white bg-gray-900 rounded m-2 overflow-hidden">
            <img
              className="w-full"
              src={character.img_url}
              alt={`${character.name} Photo`}
            />
            <div className="px-4 py-2 max-w-xs">
              <h1 className="text-lg font-bold text-white">{character.name}</h1>
              <p className="text-green-400 mb-2">{character.species}</p>
              <p className="text-red-400">{character.gender}</p>
              <p className="text-blue-400 font-bold text-right">{character.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
