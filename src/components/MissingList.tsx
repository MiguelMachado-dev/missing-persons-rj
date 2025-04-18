import React, { useState, useEffect } from "react";
import {
  useMissingPersons,
  useMissingPersonDetail,
  useEyeColors,
  useSkinColors,
  useHairColors,
} from "../hooks";
import Header from "./Header";
import PaginationControls from "./PaginationControls";
import PersonList from "./PersonList";
import PersonDetail from "./PersonDetail";
import Footer from "./Footer";

const pageSize = 20;

const MissingList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedPersonId, setSelectedPersonId] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const { data, isLoading } = useMissingPersons(
    currentPage,
    pageSize,
    searchQuery
  );
  const apiData = data;
  const totalPages = apiData?.totalPages ?? 0;
  const totalRecords = apiData?.totalRecords ?? 0;
  const persons = apiData?.content ?? [];

  const detailQuery = useMissingPersonDetail(selectedPersonId);
  const { data: eyeColors = [], isLoading: eyeLoading } = useEyeColors();
  const { data: skinColors = [], isLoading: skinLoading } = useSkinColors();
  const { data: hairColors = [], isLoading: hairLoading } = useHairColors();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (selectedPersonId != null) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedPersonId(null);
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [selectedPersonId]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setCurrentPage(0);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchInput("");
    setCurrentPage(0);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden flex flex-col">
      <div className="absolute inset-0 z-0 animate-gradient-move bg-gradient-to-br from-blue-900 via-cyan-700 to-blue-800 opacity-90 blur-sm" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          scrolled={scrolled}
          searchInput={searchInput}
          handleSearchInputChange={handleSearchInputChange}
          handleSearch={handleSearch}
        />

        <div
          className={`container mx-auto px-4 py-8 ${
            scrolled ? "pt-24" : "pt-56"
          } flex-grow`}
        >
          <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-cyan-100 text-lg font-medium">
              {totalRecords > 0 ? (
                <p>
                  Mostrando {persons.length} de {totalRecords} resultados
                </p>
              ) : null}
            </div>
            <div className="flex items-center space-x-4">
              {totalPages > 1 && (
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </div>
          </div>

          <PersonList
            persons={persons}
            isLoading={isLoading}
            searchQuery={searchQuery}
            onViewDetails={(id) => {
              setSelectedPersonId(id);
            }}
            onClearSearch={handleClearSearch}
          />

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </div>

        {selectedPersonId != null && (
          <PersonDetail
            person={detailQuery.data}
            isLoading={
              detailQuery.isLoading || eyeLoading || skinLoading || hairLoading
            }
            isError={detailQuery.isError}
            eyeColors={eyeColors}
            hairColors={hairColors}
            skinColors={skinColors}
            onClose={() => {
              setSelectedPersonId(null);
            }}
          />
        )}

        <Footer />
      </div>
    </div>
  );
};

export default MissingList;
