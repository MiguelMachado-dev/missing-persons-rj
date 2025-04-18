import { AlertTriangle } from "lucide-react";

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center h-64 text-cyan-200 bg-white/20 dark:bg-gray-800/40 rounded-2xl p-10 shadow-xl border border-cyan-400/30 backdrop-blur-lg">
    <AlertTriangle size={56} className="text-yellow-400 drop-shadow-lg mb-4" />
    <h3 className="text-2xl font-extrabold text-cyan-100 tracking-tight mb-1">
      Nenhuma pessoa encontrada
    </h3>
    <p className="text-cyan-200/80 mt-2 text-center text-lg">
      Não foram encontradas pessoas desaparecidas com estes critérios de busca.
    </p>
  </div>
);

export default EmptyState;
