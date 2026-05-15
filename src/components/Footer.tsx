import Icon from "@/components/ui/icon";

interface FooterProps {
  onNavigate: (page: string, data?: unknown) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-agro-green-dark text-white relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-agro-emerald rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-agro-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-agro-emerald to-agro-green flex items-center justify-center">
                <Icon name="Leaf" size={20} className="text-white" />
              </div>
              <div>
                <span className="block font-montserrat font-800 text-xl text-white">АгроАкадемия</span>
                <span className="block text-xs text-green-400">Аграрный университет</span>
              </div>
            </div>
            <p className="text-green-300/80 text-sm leading-relaxed max-w-xs font-golos">
              Ведущий образовательный центр в сфере сельского хозяйства. Более 30 лет готовим специалистов для АПК России.
            </p>
            <div className="flex gap-3 mt-6">
              {["Youtube", "Send", "Globe"].map((icon) => (
                <button
                  key={icon}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-agro-emerald/30 flex items-center justify-center transition-colors duration-200 border border-white/10 hover:border-agro-emerald/40"
                >
                  <Icon name={icon} size={16} className="text-white/70" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-montserrat font-700 text-white mb-4 text-sm uppercase tracking-wider">
              Навигация
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Главная", id: "home" },
                { label: "Курсы", id: "courses" },
                { label: "Контакты", id: "contacts" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-green-300/70 hover:text-agro-emerald text-sm font-golos transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-montserrat font-700 text-white mb-4 text-sm uppercase tracking-wider">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-green-300/70 text-sm">
                <Icon name="MapPin" size={16} className="text-agro-emerald mt-0.5 shrink-0" />
                <span>г. Краснодар, ул. Калинина, 13</span>
              </li>
              <li className="flex items-center gap-2 text-green-300/70 text-sm">
                <Icon name="Phone" size={16} className="text-agro-emerald shrink-0" />
                <span>+7 (861) 221-57-00</span>
              </li>
              <li className="flex items-center gap-2 text-green-300/70 text-sm">
                <Icon name="Mail" size={16} className="text-agro-emerald shrink-0" />
                <span>edu@agroacademy.ru</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-green-400/50 text-xs font-golos">
            © 2024 АгроАкадемия. Все права защищены.
          </p>
          <div className="flex items-center gap-2 text-green-400/50 text-xs">
            <Icon name="Shield" size={12} />
            <span>Лицензия на образовательную деятельность №1234 от 01.01.2020</span>
          </div>
        </div>
      </div>
    </footer>
  );
}