import React, { useState } from "react";

interface InfoTooltipProps {
  title: string;
  children: React.ReactNode;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-flex items-center ml-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="text-blue-500 hover:text-blue-700 transition-colors"
        aria-label="Mais informações"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 w-72 md:w-96 mb-2 p-4 bg-white rounded-lg shadow-xl border border-gray-200 z-10"
          role="tooltip"
        >
          <h4 className="font-bold text-lg text-gray-800 mb-2">{title}</h4>
          <div className="text-sm text-gray-700 space-y-2">{children}</div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-200"></div>
        </div>
      )}
    </div>
  );
};
