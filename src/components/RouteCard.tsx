interface RouteCardProps {
  title: string;
  description: string;
  colorTheme: 'mountain' | 'desert';
}

export function RouteCard({ title, description, colorTheme }: RouteCardProps) {
  const textColor = colorTheme === 'mountain' ? 'text-serra' : 'text-sertao';
  const hoverBorderColor = colorTheme === 'mountain' ? 'hover:border-serra' : 'hover:border-sertao';

  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg border-2 border-transparent ${hoverBorderColor} transition-all duration-300 transform hover:-translate-y-2`}>
      <h3 className={`text-2xl font-bold font-heading ${textColor}`}>
        {title}
      </h3>
      <p className="mt-2 font-sans text-gray-600">
        {description}
      </p>
    </div>
  );
}