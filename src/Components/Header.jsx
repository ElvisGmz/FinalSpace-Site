import React from "react";

export default function Header() {
  return (
    <header className="w-full h-screen flex justify-center items-center">
      <img
        className="absolute z-0 object-cover h-full w-full top-0 left-0 opacity-50"
        src="https://occ-0-2111-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABchKdKaBwoBMzNAGNw4E5AFcrjL7IfU8_f8pAT1pS6IuJauPgYiMpAFyaf8L-LHp1jZONuIGtTczn0G_Xh3iWzVaUEHN.jpg"
        alt="Imagen principal"
      />
      <div className="relative z-10 text-white w-full max-w-screen-xl px-5">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold mb-5">Final Space</h1>
        <p className="text-xl sm:text-2xl px-2 mb-7">
          El astronauta Gary y su ayudante destructor de planetas Mooncake
          viajan por el espacio para encontrar dónde termina el universo.
        </p>
        <a className="bg-red-600 text-white rounded px-4 py-2 mx-2 hover:bg-red-800 transition-all duration-300" href="https://www.netflix.com/sv/title/80174479" target="_blank">Ver en NetFlix</a>
      </div>
    </header>
  );
}
