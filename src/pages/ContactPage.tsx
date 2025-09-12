import { useState } from "react";

export function ContactPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 py-24 pt-32">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow border">
          <h1 className="text-4xl font-bold font-heading text-center text-gray-800 mb-4">
            Contato
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Tem alguma dúvida, sugestão ou encontrou algum erro? Fale conosco.
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-500 focus:border-stone-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-500 focus:border-stone-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-500 focus:border-stone-500"
              ></textarea>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="focus:ring-stone-500 h-4 w-4 text-stone-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="consent" className="font-medium text-gray-700">
                  Eu concordo com o uso dos meus dados
                </label>
                <p className="text-gray-500">
                  Ao marcar esta caixa, você concorda que os dados fornecidos
                  serão utilizados exclusivamente para o retorno do contato.
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={!agreed}
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-stone-600 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
