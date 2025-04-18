import React from "react";
import SearchBar from "./SearchBar";

interface HeaderProps {
  scrolled: boolean;
  searchInput: string;
  handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (e: React.FormEvent) => void;
}

const Header: React.FC<HeaderProps> = ({
  scrolled,
  searchInput,
  handleSearchInputChange,
  handleSearch,
}) => (
  <div
    className={`fixed top-0 left-0 right-0 z-20 backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 shadow-lg border-b border-cyan-400/30 transition-all duration-300 ${
      scrolled ? "py-2" : "py-3 sm:py-6"
    }`}
  >
    <div className="container mx-auto px-4">
      {scrolled ? (
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-cyan-300 drop-shadow-lg truncate mr-2">
            Pessoas Desaparecidas
          </h1>
          <SearchBar
            value={searchInput}
            onChange={handleSearchInputChange}
            onSubmit={handleSearch}
            compact={true}
          />
        </div>
      ) : (
        <>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-cyan-300 drop-shadow-lg mb-1 sm:mb-2">
            Pessoas Desaparecidas
          </h1>
          <p className="text-cyan-100 mb-3 sm:mb-6 text-sm sm:text-lg font-medium drop-shadow">
            Sistema de busca de pessoas desaparecidas do Estado do Rio de
            Janeiro
          </p>
          <SearchBar
            value={searchInput}
            onChange={handleSearchInputChange}
            onSubmit={handleSearch}
            compact={false}
          />
        </>
      )}
    </div>
  </div>
);

export default Header;
