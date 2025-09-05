import { useState } from 'react';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [lgpdConsent, setLgpdConsent] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!lgpdConsent) {
      setStatus('Você precisa aceitar os termos de privacidade.');
      return;
    }
    console.log({ name, email, message });
    setStatus('Mensagem enviada com sucesso! (Simulação)');
    
    setName('');
    setEmail('');
    setMessage('');
    setLgpdConsent(false);
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-24 pt-32">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold font-heading text-gray-800">
            Entre em Contato
          </h1>
          <p className="mt-4 text-xl text-gray-600 font-sans max-w-2xl mx-auto">
            Tem alguma dúvida, sugestão ou interesse em parcerias? Fale conosco!
          </p>
        </header>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2 font-sans">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-litoral"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2 font-sans">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-litoral"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2 font-sans">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-litoral"
                required
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label htmlFor="lgpd" className="flex items-center">
                <input
                  type="checkbox"
                  id="lgpd"
                  checked={lgpdConsent}
                  onChange={(e) => setLgpdConsent(e.target.checked)}
                  className="h-5 w-5 text-litoral focus:ring-litoral border-gray-300 rounded"
                  required
                />
                <span className="ml-2 text-gray-600 font-sans text-sm">
                  Eu concordo em compartilhar meus dados para fins de contato, conforme a LGPD.
                </span>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-litoral text-white font-bold font-heading py-3 px-8 rounded-full uppercase tracking-wider hover:bg-blue-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </div>

            {status && (
              <p className="mt-4 text-center text-sm font-sans">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}