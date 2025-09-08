interface RouteCardProps {
  title: string;
  description: string;
  theme: "litoral" | "serra" | "sertao";
}

export function RouteCard({ title, description, theme }: RouteCardProps) {
  const colorClasses = {
    litoral: {
      text: "text-litoral",
      hoverBorder: "hover:border-litoral",
    },
    serra: {
      text: "text-serra",
      hoverBorder: "hover:border-serra",
    },
    sertao: {
      text: "text-sertao",
      hoverBorder: "hover:border-sertao",
    },
  };

  const themeClasses = colorClasses[theme];

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg border-2 border-transparent ${themeClasses.hoverBorder} transition-all duration-300 transform hover:-translate-y-2 h-full`}
    >
      <h3 className={`text-2xl font-bold font-heading ${themeClasses.text}`}>
        {title}
      </h3>
      <p className="mt-2 font-sans text-gray-600">{description}</p>
    </div>
  );
}
