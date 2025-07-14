"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative">
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-lg font-modern">
        <li><a href="/naat" className="hover:text-accent transition-colors">Naat</a></li>
        <li><a href="/hamd" className="hover:text-accent transition-colors">Hamd</a></li>
        <li><a href="/manqabat" className="hover:text-accent transition-colors">Manqabat</a></li>
        <li><a href="/salam" className="hover:text-accent transition-colors">Salam</a></li>
        <li><a href="/munajaat" className="hover:text-accent transition-colors">Munajaat</a></li>
        <li><a href="/miscellaneous" className="hover:text-accent transition-colors">Misc</a></li>
      </ul>
      {/* Mobile Hamburger */}
      <button className="md:hidden p-2 rounded-full bg-card border border-accent/30 shadow ml-2" onClick={() => setOpen(true)} aria-label="Open Menu">
        <FiMenu className="text-2xl text-accent" />
      </button>
      {/* Mobile Overlay Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/30 h-screen flex flex-col items-end">
          <div className="w-3/4 max-w-xs bg-black/60 h-[1000px] p-6 flex flex-col gap-8 shadow-2xl border-l-2 border-accent/30">
            <button className="self-end mb-8" onClick={() => setOpen(false)} aria-label="Close Menu">
              <FiX className="text-3xl text-accent" />
            </button>
            <ul className="flex flex-col gap-6 text-xl font-modern text-accent">
              <li><a href="/naat" className="hover:text-black transition-colors" onClick={() => setOpen(false)}>Naat</a></li>
              <li><a href="/hamd" className="hover:text-black transition-colors" onClick={() => setOpen(false)}>Hamd</a></li>
              <li><a href="/manqabat" className="hover:text-black transition-colors" onClick={() => setOpen(false)}>Manqabat</a></li>
              <li><a href="/salam" className="hover:text-black transition-colors" onClick={() => setOpen(false)}>Salam</a></li>
              <li><a href="/munajaat" className="hover:text-black transition-colors" onClick={() => setOpen(false)}>Munajaat</a></li>
              <li><a href="/miscellaneous" className="hover:text-black transition-colors" onClick={() => setOpen(false)}>Misc</a></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
} 