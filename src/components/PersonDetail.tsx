import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { MissingPersonDetail } from "../types";

interface PersonDetailProps {
  person: MissingPersonDetail | undefined;
  isLoading: boolean;
  isError: boolean;
  eyeColors: { id: number; desc: string }[];
  hairColors: { id: number; desc: string }[];
  skinColors: { id: number; desc: string }[];
  onClose: () => void;
}

const PersonDetail: React.FC<PersonDetailProps> = ({
  person,
  isLoading,
  isError,
  eyeColors,
  hairColors,
  skinColors,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    return () => {
      setIsOpen(false);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-[6px] transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <section
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`relative z-10 bg-white/20 dark:bg-gray-900/60 rounded-3xl p-0 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl border border-cyan-400/40 backdrop-blur-2xl flex flex-col items-center transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-8"
        }`}
        tabIndex={-1}
      >
        <header className="w-full flex items-center justify-between px-6 pt-6 pb-2 border-b border-cyan-400/20">
          <h2 className="text-xl font-extrabold text-cyan-100 tracking-tight leading-tight">
            {person?.name}, {person?.age} anos
          </h2>
          <button
            onClick={handleClose}
            className="bg-cyan-100/30 hover:bg-cyan-200/50 rounded-full p-1 transition-colors ml-2"
            aria-label="Fechar"
          >
            <X
              size={28}
              className="text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100"
            />
          </button>
        </header>
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
          </div>
        ) : isError ? (
          <p className="text-red-500 p-6">Erro ao carregar detalhes</p>
        ) : (
          person && (
            <div className="w-full px-6 pb-6 pt-2 flex flex-col items-center">
              {person.photo && (
                <img
                  src={`data:image/jpeg;base64,${person.photo}`}
                  alt={person.name}
                  className="w-40 h-40 object-cover rounded-xl border-4 border-cyan-400/30 shadow-lg mb-4 mt-2"
                />
              )}
              <dl className="w-full space-y-2 text-cyan-100 text-base">
                <div>
                  <dt className="font-bold inline">Mãe:</dt>{" "}
                  <dd className="inline font-medium text-cyan-50">
                    {person.mother}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold inline">Pai:</dt>{" "}
                  <dd className="inline font-medium text-cyan-50">
                    {person.father ?? "Não informado"}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold inline">Olhos:</dt>{" "}
                  <dd className="inline font-medium text-cyan-50">
                    {eyeColors.find((c) => c.id === person.eyeColor)?.desc ??
                      "Não informado"}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold inline">Cabelo:</dt>{" "}
                  <dd className="inline font-medium text-cyan-50">
                    {hairColors.find((c) => c.id === person.hairColor)?.desc ??
                      "Não informado"}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold inline">Pele:</dt>{" "}
                  <dd className="inline font-medium text-cyan-50">
                    {skinColors.find((c) => c.id === person.skinColor)?.desc ??
                      "Não informado"}
                  </dd>
                </div>
                {person.scar && (
                  <div>
                    <dt className="font-bold inline">Cicatriz:</dt>{" "}
                    <dd className="inline font-medium text-cyan-50">
                      {person.scar}
                    </dd>
                  </div>
                )}
                {person.tattoo && (
                  <div>
                    <dt className="font-bold inline">Tatuagem:</dt>{" "}
                    <dd className="inline font-medium text-cyan-50">
                      {person.tattoo}
                    </dd>
                  </div>
                )}
                {person.clothing && (
                  <div>
                    <dt className="font-bold inline">Roupa:</dt>{" "}
                    <dd className="inline font-medium text-cyan-50">
                      {person.clothing}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="font-bold inline">
                    Local de Desaparecimento:
                  </dt>{" "}
                  <dd className="inline font-medium text-cyan-50">
                    {person.placeOfDisappearance}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold inline">Data de Desaparecimento:</dt>{" "}
                  <dd className="inline font-medium text-cyan-50">
                    {new Date(person.dateOfDisappearance).toLocaleDateString()}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold inline">Obs:</dt>{" "}
                  <dd className="inline font-medium text-cyan-50">
                    {person.obs}
                  </dd>
                </div>
              </dl>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default PersonDetail;
