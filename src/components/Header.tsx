"use client";

import { useState } from "react";

const navItems = [
  { label: "Преимущества", href: "#problems" },
  { label: "Как работает", href: "#how-it-works" },
  { label: "Тарифы", href: "#pricing" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-woomus-navy/95 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 lg:px-12 py-0 h-[60px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-woomus-teal rounded-sm flex items-center justify-center font-heading font-bold text-woomus-dark text-lg">
            W
          </div>
          <span className="text-woomus-white font-body font-bold text-xl tracking-[2px]">
            WOOMUS
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 font-body text-sm hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:flex items-center bg-woomus-teal text-woomus-dark font-heading text-[13px] font-medium px-6 py-2.5 hover:brightness-110 transition-all"
        >
          Рассчитать стоимость
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-woomus-navy border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 font-body text-sm hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-woomus-teal text-woomus-dark font-heading text-sm font-medium px-6 py-3 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Рассчитать стоимость
          </a>
        </nav>
      )}
    </header>
  );
}
