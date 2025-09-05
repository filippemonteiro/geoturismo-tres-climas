import React, { useState } from "react";

type Tab = { label: string; content: React.ReactNode };
interface TabsProps {
  tabs: Tab[];
  initialTabIndex?: number;
}

export function Tabs({ tabs, initialTabIndex = 0 }: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(activeTabIndex === index ? -1 : index);
  };

  return (
    <div className="md:border-b md:border-gray-200">
      <div className="md:flex md:space-x-8">
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            className="border-b border-gray-200 md:border-b-0"
          >
            <button
              onClick={() => handleTabClick(index)}
              className={`
                w-full text-left p-4 font-medium text-lg flex justify-between items-center
                md:w-auto md:p-1 md:py-4 md:border-b-2
                ${
                  activeTabIndex === index
                    ? "border-litoral text-litoral"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              {tab.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 md:hidden transition-transform ${
                  activeTabIndex === index ? "transform rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {activeTabIndex === index && (
              <div className="py-8 px-4 md:hidden">{tab.content}</div>
            )}
          </div>
        ))}
      </div>

      {activeTabIndex !== -1 && (
        <div className="hidden md:block py-8">
          {tabs[activeTabIndex].content}
        </div>
      )}
    </div>
  );
}
