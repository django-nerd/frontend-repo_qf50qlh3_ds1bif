import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      // Frontend-only demo submission. In a full app we'd send to backend.
      await new Promise((res) => setTimeout(res, 600));
      setStatus({ type: 'success', message: 'Grazie! Ti risponderemo al più presto.' });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ type: 'error', message: 'Si è verificato un problema. Riprova.' });
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Contatti</h2>
        <p className="mt-2 text-white/70">Hai un manoscritto o un progetto? Scrivici, siamo in ascolto.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-white/70 mb-2" htmlFor="name">Nome e cognome</label>
              <input id="name" name="name" required className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 outline-none focus:border-white/40" placeholder="Mario Rossi" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 outline-none focus:border-white/40" placeholder="nome@email.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2" htmlFor="subject">Oggetto</label>
            <input id="subject" name="subject" className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 outline-none focus:border-white/40" placeholder="Proposta manoscritto / Richiesta informazioni" />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2" htmlFor="message">Messaggio</label>
            <textarea id="message" name="message" rows="6" required className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 outline-none focus:border-white/40" placeholder="Raccontaci del tuo progetto..."></textarea>
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-white/50">Invieremo una conferma alla tua email.</p>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
              Invia richiesta
            </button>
          </div>

          {status && (
            <div className={`rounded-md border px-4 py-3 text-sm ${status.type === 'success' ? 'border-emerald-400/40 text-emerald-300 bg-emerald-400/10' : 'border-red-400/40 text-red-300 bg-red-400/10'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
