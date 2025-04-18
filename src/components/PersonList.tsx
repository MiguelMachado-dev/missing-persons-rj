import React from "react";
import PersonCard from "./PersonCard";
import EmptyState from "./EmptyState";
import { ChevronLeft } from "lucide-react";
import type { MissingPerson } from "../types";

interface PersonListProps {
  persons: MissingPerson[];
  isLoading: boolean;
  searchQuery: string;
  onViewDetails: (id: number) => void;
  onClearSearch: () => void;
}

const PersonList: React.FC<PersonListProps> = ({
  persons,
  isLoading,
  searchQuery,
  onViewDetails,
  onClearSearch,
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-400"></div>
      </div>
    );
  }

  if (persons.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <EmptyState />
        {searchQuery && (
          <button
            onClick={onClearSearch}
            className="cursor-pointer mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-700 text-white font-semibold rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={20} className="mr-2" />
            Voltar à página inicial
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {persons.map((person) => (
        <PersonCard
          key={person.id}
          person={person}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default PersonList;
