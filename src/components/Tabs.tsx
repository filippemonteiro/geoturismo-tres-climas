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
    litoral: {
      border: "border-blue-500",
      text: "text-blue-600",
    },
    serra: {
      border: "border-green-500",
      text: "text-green-600",
    },
    sertao: {
      border: "border-yellow-500",
      text: "text-yellow-600",
    },
  };

  return (
    <div>
      <div className="border-b border-gray-200">
        {/* Adicionado 'flex-wrap' para permitir que as abas quebrem para a linha de baixo */}
        <ul className="flex flex-wrap -mb-px justify-center">
          {tabs.map((tab, index) => {
            const isActive = index === activeTabIndex;
            const activeTheme = themeClasses[tab.theme];

            return (
              <li key={tab.label} className="mr-2 mb-2">
                {" "}
                {/* Adicionado 'mb-2' para espaçamento vertical no wrap */}
                <button
                  onClick={() => setActiveTabIndex(index)}
                  className={`inline-block p-4 text-lg font-medium text-center rounded-t-lg ${
                    isActive
                      ? `border-b-2 ${activeTheme.border} ${activeTheme.text}`
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
