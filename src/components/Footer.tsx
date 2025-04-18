import React from "react";
import { Github } from "lucide-react";

const Footer: React.FC = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("pt-BR");

  return (
    <footer className="bg-white/10 dark:bg-gray-900/30 border-t border-cyan-400/20 py-8 mt-auto backdrop-blur-xl w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-cyan-200 text-sm">
              © 2025 Este não é um aplicativo oficial do governo. Feito por
              Miguel Machado usando a API do Governo do Rio de Janeiro.
            </p>
            <p className="text-cyan-200/70 text-xs mt-2">
              Última vez editado: {formattedDate}
            </p>
          </div>
          <a
            href="https://github.com/MiguelMachado-dev/missing-persons-rj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white rounded-xl transition-all duration-300 text-sm font-bold shadow-lg tracking-wide backdrop-blur-md border border-cyan-400/40 hover:border-cyan-400/80"
          >
            <Github size={18} />
            Ver código no GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
