import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-white">Agenzia Letteraria</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#portfolio" className="text-white/80 hover:text-white transition">Portfolio</a>
            <a href="#about" className="text-white/80 hover:text-white transition">Chi siamo</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contatti</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Agenzia Letteraria — Tutti i diritti riservati.
        </div>
      </footer>
    </div>
  );
}
