import React, { useState, useEffect, useRef } from "react";

interface InfoTooltipProps {
  title: string;
  children: React.ReactNode;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-flex items-center ml-2">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="text-blue-500 hover:text-blue-700 transition-colors"
        aria-label="Mais informações"
        aria-expanded={isOpen}
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {isOpen && (
        <div
          ref={tooltipRef}
          className="fixed bottom-1/2 translate-y-1/2 left-4 right-4 p-4
                    bg-white rounded-lg shadow-xl border border-gray-200 z-50
                    max-h-[70vh] overflow-y-auto
                    sm:absolute sm:bottom-full sm:mb-2
                    sm:left-1/2 sm:-translate-x-1/2
                    sm:translate-y-0
                    sm:w-72 md:w-96
                    sm:max-h-none sm:overflow-y-visible
                    sm:right-auto"
          role="tooltip"
        >
          <h4 className="font-bold text-lg text-gray-800 mb-2">{title}</h4>
          <div className="text-sm text-gray-700 space-y-2">{children}</div>
          <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-200"></div>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 sm:hidden"
            aria-label="Fechar informação"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
