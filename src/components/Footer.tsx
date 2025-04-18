import React from "react";

const Footer: React.FC = () => {
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
              Última vez editado: 18/04/2025
            </p>
          </div>
          <a
            href="https://github.com/MiguelMachado-dev/missing-persons-rj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white rounded-xl transition-all duration-300 text-sm font-bold shadow-lg tracking-wide backdrop-blur-md border border-cyan-400/40 hover:border-cyan-400/80"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Ver código no GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
