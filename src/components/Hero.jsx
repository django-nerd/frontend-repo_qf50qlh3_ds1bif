import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden" aria-label="Hero">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Agenzia letteraria moderna
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Diamo voce alle storie che meritano di essere lette
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            Rappresentiamo autrici e autori, sviluppiamo progetti editoriali e costruiamo ponti tra
            talento e case editrici. Scopri il nostro approccio.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
              Esplora Portfolio
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
              Parla con noi
            </a>
          </div>
        </div>
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
