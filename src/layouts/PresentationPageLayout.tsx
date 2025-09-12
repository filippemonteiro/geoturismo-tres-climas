import React from "react";

interface PresentationPageLayoutProps {
  title: string;
  imageUrl: string;
  children: React.ReactNode;
}

export function PresentationPageLayout({
  title,
  imageUrl,
  children,
}: PresentationPageLayoutProps) {
  return (
    <div className="bg-stone-50 min-h-screen pt-16 overflow-hidden">
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="relative z-10 p-4 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading drop-shadow-lg text-white break-words">
            {title}
          </h1>
        </div>
      </div>

      <section className="bg-stone-50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow">
            <div className="prose max-w-none md:text-lg text-gray-700 space-y-4">
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
