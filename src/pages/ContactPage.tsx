export function ContactPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 py-24 pt-32">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow border">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-heading text-gray-800 mb-4">
              Fale Conosco
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Para dúvidas, sugestões, ou para reportar um erro, por favor, entre em contato através do e-mail abaixo.
            </p>
            <a 
              href="mailto:r.matosmachado@gmail.com" 
              className="text-xl font-semibold text-stone-600 hover:text-stone-800 underline transition-colors"
            >
              r.matosmachado@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}