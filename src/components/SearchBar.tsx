import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  compact?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSubmit,
  compact = false,
}) => (
  <form
    onSubmit={onSubmit}
    className={
      compact
        ? "flex w-full md:w-1/2 lg:w-1/3 ml-0 sm:ml-4"
        : "flex w-full max-w-md sm:max-w-xl md:max-w-2xl mx-auto px-3 sm:px-0"
    }
  >
    <div className="relative flex-grow">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Buscar por nome..."
        className={
          compact
            ? "bg-gray-900/70 dark:bg-gray-800/80 w-full px-3 sm:px-4 py-2.5 rounded-xl text-white placeholder-gray-300 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-inner transition-all duration-300 text-sm sm:text-base"
            : "bg-gray-900/70 dark:bg-gray-800/80 w-full px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl text-white placeholder-gray-300 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-inner transition-all duration-300 text-sm sm:text-base"
        }
      />
      <button
        type="submit"
        aria-label="Buscar"
        className={
          compact
            ? "cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 h-8 sm:h-8 w-8 sm:w-10 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 active:scale-95 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 shadow-md"
            : "cursor-pointer absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 h-10 sm:h-10 w-10 sm:w-12 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 active:scale-95 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 shadow-md"
        }
      >
        <Search size={compact ? 18 : 20} className="text-white" />
      </button>
    </div>
  </form>
);

export default SearchBar;
