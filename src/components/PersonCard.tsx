import React from "react";
import type { MissingPerson } from "../types";

const PersonCard: React.FC<{
  person: MissingPerson;
  onViewDetails: (id: number) => void;
}> = ({ person, onViewDetails }) => (
  <div className="bg-white/20 dark:bg-gray-800/40 rounded-2xl shadow-xl hover:shadow-2xl border border-cyan-400/30 hover:border-cyan-400/60 transition-shadow overflow-hidden flex flex-col h-full transform hover:-translate-y-2 duration-300 backdrop-blur-lg relative group">
    <div className="relative">
      <div
        className={`w-full h-48 overflow-hidden ${
          person.isSocialPic
            ? "bg-gradient-to-b from-cyan-200/40 to-white/10"
            : "bg-gradient-to-b from-gray-100/30 to-white/10"
        }`}
      >
        {person.photo ? (
          <img
            src={`data:image/jpeg;base64,${person.photo}`}
            alt={person.name}
            className={`w-full h-full object-cover ${
              person.isSocialPic ? "object-top" : "object-center"
            } group-hover:scale-105 transition-transform duration-500`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200/60 dark:bg-gray-700/60">
            <span className="text-cyan-300/70">Sem foto</span>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-xl font-bold text-cyan-100 drop-shadow-lg">
          {person.name}, {person.age} anos
        </h3>
      </div>
    </div>
    <div className="p-4 flex-grow">
      <div className="flex space-x-2 mt-1">
        {person.isFound && (
          <span className="px-3 py-1 bg-green-200/30 dark:bg-green-800/60 text-green-700 dark:text-green-100 rounded-full text-xs font-semibold tracking-wide shadow-sm">
            Encontrado
          </span>
        )}
        {person.isDead && (
          <span className="px-3 py-1 bg-red-200/30 dark:bg-red-800/60 text-red-700 dark:text-red-100 rounded-full text-xs font-semibold tracking-wide shadow-sm">
            Falecido
          </span>
        )}
        {!person.isFound && !person.isDead && (
          <span className="px-3 py-1 bg-yellow-200/30 dark:bg-yellow-800/60 text-yellow-700 dark:text-yellow-100 rounded-full text-xs font-semibold tracking-wide shadow-sm">
            Desaparecido
          </span>
        )}
      </div>
      <div className="mt-6">
        <button
          onClick={() => {
            onViewDetails(person.id);
          }}
          className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-700 text-white rounded-xl transition-all duration-300 text-base font-bold cursor-pointer shadow-lg tracking-wide backdrop-blur-md border border-cyan-400/40 hover:border-cyan-400/80"
        >
          Ver detalhes
        </button>
      </div>
    </div>
  </div>
);

export default PersonCard;
