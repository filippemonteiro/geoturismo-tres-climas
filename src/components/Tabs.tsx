import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
  theme: "litoral" | "serra" | "sertao";
}

interface TabsProps {
  tabs: Tab[];
  initialTabIndex?: number;
}

export function Tabs({ tabs, initialTabIndex = 0 }: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);

  const themeClasses = {
    litoral: "border-[#1E88E5] text-[#1E88E5]",
    serra: "border-[#388E3C] text-[#388E3C]",
    sertao: "border-[#F57C00] text-[#F57C00]",
  };

  return (
    <div>
      <div className="border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px justify-center">
          {tabs.map((tab, index) => {
            const isActive = index === activeTabIndex;
            return (
              <li key={tab.label} className="mr-2 mb-2">
                <button
                  onClick={() => setActiveTabIndex(index)}
                  className={`inline-block p-4 text-lg font-medium text-center rounded-t-lg transition-colors ${
                    isActive
                      ? `border-b-2 ${themeClasses[tab.theme]}`
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pt-10">
        {tabs[activeTabIndex] && tabs[activeTabIndex].content}
      </div>
    </div>
  );
}