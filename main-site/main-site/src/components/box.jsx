export const BorderBox = ({ children, className = "" }) => {
  return (
    <div
      className={`relative flex items-center justify-center border-2 border-[#3A86FE] text-[#3A86FE] p-6 ${className}`}
    >
      <div className="absolute top-[-0.5rem] max-sm:top-[-0.5rem] max-sm:left-[-0.6rem] left-[-0.8rem] w-6 h-4 max-sm:w-4 max-sm:h-3 bg-[#3A86FE]" />
      <div className="absolute top-[-0.5rem] max-sm:top-[-0.5rem] max-sm:right-[-0.6rem] right-[-0.8rem] w-6 h-4 max-sm:w-4 max-sm:h-3 bg-[#3A86FE]" />
      <div className="absolute bottom-[-0.5rem] max-sm:bottom-[-0.5rem] max-sm:left-[-0.6rem] left-[-0.8rem] w-6 h-4 max-sm:w-4 max-sm:h-3 bg-[#3A86FE]" />
      <div className="absolute bottom-[-0.5rem] max-sm:bottom-[-0.5rem] max-sm:right-[-0.6rem] right-[-0.8rem] w-6 h-4 max-sm:w-4 max-sm:h-3 bg-[#3A86FE]" />

      {children}
    </div>
  );
};
