const PageButton: React.FC<{
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}> = ({ onClick, disabled, children, className = "" }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center justify-center min-w-10 h-10 rounded-xl font-bold transition-all duration-300 shadow-md border backdrop-blur-md text-base
      ${
        disabled
          ? "bg-white/10 dark:bg-gray-700/40 text-cyan-300/40 border-cyan-400/10 cursor-not-allowed"
          : "bg-white/30 dark:bg-gray-800/40 text-cyan-200 border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 hover:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/40"
      }
      ${className}
    `}
  >
    {children}
  </button>
);

export default PageButton;
