import { contentData } from "../data/contentData";

export function ContactPage() {
  const pageData = contentData.find((p) => p.path === "/contact");
  const contentParts = pageData?.content.split("\n") || [];
  const description = contentParts[0];
  const email = contentParts[1];

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 py-24 pt-32">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow border">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-heading text-gray-800 mb-4">
              {pageData?.title || "Fale Conosco"}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-xl font-semibold text-stone-600 hover:text-stone-800 underline transition-colors"
              >
                {email}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
