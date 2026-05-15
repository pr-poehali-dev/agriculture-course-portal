import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, data?: unknown) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Главная" },
    { id: "courses", label: "Курсы" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-dark shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-agro-emerald to-agro-green flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Icon name="Leaf" size={20} className="text-white" />
            </div>
            <div className="text-left">
              <span className="block font-montserrat font-800 text-lg text-white leading-none">
                АгроАкадемия
              </span>
              <span className="block text-xs text-green-300 leading-none mt-0.5">
                Аграрный университет
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-5 py-2 rounded-xl font-montserrat font-600 text-sm transition-all duration-200 ${
                  currentPage === link.id
                    ? "bg-agro-emerald/20 text-agro-emerald border border-agro-emerald/30"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onNavigate("courses")}
              className="px-5 py-2.5 bg-gradient-to-r from-agro-green-light to-agro-emerald text-white font-montserrat font-700 text-sm rounded-xl btn-glow transition-all duration-200 hover:scale-105 shadow-lg shadow-green-900/30"
            >
              Записаться на курс
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden glass-dark rounded-2xl mb-4 p-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { onNavigate(link.id); setMobileOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-xl font-montserrat font-600 text-sm mb-1 transition-all duration-200 ${
                  currentPage === link.id
                    ? "bg-agro-emerald/20 text-agro-emerald"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { onNavigate("courses"); setMobileOpen(false); }}
              className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-agro-green-light to-agro-emerald text-white font-montserrat font-700 text-sm rounded-xl"
            >
              Записаться на курс
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
