import React from 'react';

const clients = [
  {
    name: 'Luna Bianchi',
    role: 'Narrativa contemporanea',
    highlight: 'Finalista Premio Strega 2024',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Marco Verdi',
    role: 'Saggistica',
    highlight: 'Tradotto in 7 lingue',
    cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Aisha Karim',
    role: 'Young Adult',
    highlight: 'Best seller nazionale',
    cover: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Portfolio clienti</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Alcune autrici e autori che rappresentiamo. Progetti curati dall'idea al contratto di pubblicazione.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-md border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition">
            Proponi un manoscritto
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((c) => (
            <article key={c.name} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.cover} alt={c.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium">{c.name}</h3>
                <p className="text-sm text-white/70">{c.role}</p>
                <p className="mt-2 text-sm text-emerald-300">{c.highlight}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
