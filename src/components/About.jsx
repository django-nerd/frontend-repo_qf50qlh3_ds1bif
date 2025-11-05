import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Chi siamo</h2>
            <p className="mt-4 text-white/80">
              Siamo un team di agenti editoriali con esperienza in scouting, editing e negoziazione dei diritti. 
              Lavoriamo a stretto contatto con le case editrici per valorizzare voci nuove e autrici/autori affermati.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />Valutazione manoscritti e sviluppo editoriale</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />Rappresentanza e pitching mirato alle case editrici</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />Negoziazione contratti e gestione diritti</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-emerald-500/30 via-cyan-500/20 to-purple-500/20 p-1">
              <div className="h-full w-full rounded-2xl bg-black/60 backdrop-blur border border-white/10 p-8 flex flex-col justify-center">
                <blockquote className="text-xl md:text-2xl font-medium tracking-tight">
                  “Crediamo in storie che emozionano, sorprendono e restano. Il nostro lavoro è portarle dove meritano.”
                </blockquote>
                <p className="mt-6 text-sm text-white/60">— Il team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
