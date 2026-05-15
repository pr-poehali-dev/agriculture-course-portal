import { categories } from "@/data/courses";
import Icon from "@/components/ui/icon";

interface HomePageProps {
  onNavigate: (page: string, data?: unknown) => void;
}

const stats = [
  { value: "3 200+", label: "Выпускников", icon: "GraduationCap" },
  { value: "36", label: "Курсов", icon: "BookOpen" },
  { value: "98%", label: "Трудоустройство", icon: "Briefcase" },
  { value: "25 лет", label: "На рынке", icon: "Award" },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="hero-mesh min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-agro-emerald/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-agro-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          {/* Декоративные линии */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Текст */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-agro-emerald/20 border border-agro-emerald/30 mb-6 animate-fade-in">
                <div className="w-2 h-2 rounded-full bg-agro-emerald animate-pulse" />
                <span className="text-agro-emerald text-sm font-montserrat font-600">
                  Набор на 2024–2025 учебный год открыт
                </span>
              </div>

              <h1 className="font-montserrat font-900 text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in delay-100">
                Знания для
                <br />
                <span className="shimmer-text">агрария</span>
                <br />
                будущего
              </h1>

              <p className="text-green-200/80 text-lg leading-relaxed mb-8 max-w-lg font-golos animate-fade-in delay-200">
                Профессиональные курсы повышения квалификации для специалистов АПК. Современные технологии, опытные преподаватели, практические знания.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
                <button
                  onClick={() => onNavigate("courses")}
                  className="px-8 py-4 bg-gradient-to-r from-agro-green-light to-agro-emerald text-white font-montserrat font-700 text-base rounded-2xl btn-glow hover:scale-105 transition-all duration-200 shadow-xl shadow-green-900/40 flex items-center gap-2"
                >
                  <Icon name="BookOpen" size={18} />
                  Смотреть курсы
                </button>
                <button
                  onClick={() => onNavigate("contacts")}
                  className="px-8 py-4 glass text-white font-montserrat font-600 text-base rounded-2xl hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
                >
                  <Icon name="Phone" size={18} />
                  Связаться с нами
                </button>
              </div>
            </div>

            {/* Фото */}
            <div className="relative animate-scale-in delay-400 hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
                <img
                  src="https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/35e4e265-1708-44b6-a40a-72fcfb51afd4.jpg"
                  alt="Поле пшеницы с дроном"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agro-green-dark/50 to-transparent" />
              </div>

              {/* Плавающая карточка */}
              <div className="absolute -bottom-6 -left-6 glass-dark rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-agro-gold/20 flex items-center justify-center">
                    <Icon name="Trophy" size={20} className="text-agro-gold" />
                  </div>
                  <div>
                    <p className="text-white font-montserrat font-700 text-sm">Топ-3 вуза</p>
                    <p className="text-green-300/70 text-xs">Аграрное образование РФ</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 glass-dark rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-agro-emerald/20 flex items-center justify-center">
                    <Icon name="Users" size={20} className="text-agro-emerald" />
                  </div>
                  <div>
                    <p className="text-white font-montserrat font-700 text-sm">3 200+</p>
                    <p className="text-green-300/70 text-xs">Студентов прошли курсы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/50" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-agro-green-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl glass-dark border border-agro-emerald/10 hover:border-agro-emerald/30 transition-all duration-300 card-hover"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-agro-emerald/20 flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon} size={24} className="text-agro-emerald" />
                </div>
                <p className="font-montserrat font-900 text-3xl text-white mb-1">{stat.value}</p>
                <p className="text-green-400/70 text-sm font-golos">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КАТЕГОРИИ */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-agro-emerald/10 text-agro-green font-montserrat font-600 text-sm mb-4 border border-agro-emerald/20">
              Направления обучения
            </span>
            <h2 className="font-montserrat font-800 text-4xl lg:text-5xl text-agro-green-dark mb-4">
              Выберите <span className="text-gradient-agro">своё направление</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto font-golos">
              36 курсов по 4 ключевым направлениям аграрного образования
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <div
                key={cat.id}
                className="group relative rounded-3xl overflow-hidden shadow-lg card-hover cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => onNavigate("category", cat)}
              >
                {/* Картинка */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-card" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-40 mix-blend-multiply`} />
                </div>

                {/* Контент */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Icon name={cat.icon} size={20} className="text-white" fallback="Leaf" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-montserrat font-600 border border-white/20">
                      {cat.coursesCount} курсов
                    </span>
                  </div>
                  <h3 className="font-montserrat font-800 text-2xl text-white mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-white/70 text-sm font-golos mb-4 line-clamp-2">
                    {cat.description}
                  </p>
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-agro-green-dark font-montserrat font-700 text-sm rounded-xl hover:bg-agro-emerald hover:text-white transition-all duration-200 group/btn">
                    Смотреть курсы
                    <Icon name="ArrowRight" size={16} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-agro-green-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-agro-emerald rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-agro-gold rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Icon name="GraduationCap" size={48} className="text-agro-emerald mx-auto mb-6" />
          <h2 className="font-montserrat font-900 text-4xl lg:text-5xl text-white mb-4">
            Начните обучение
            <br />
            <span className="text-gradient-agro">уже сегодня</span>
          </h2>
          <p className="text-green-300/70 text-lg font-golos mb-8 max-w-lg mx-auto">
            Запишитесь на любой курс и получите доступ к материалам в течение 24 часов
          </p>
          <button
            onClick={() => onNavigate("courses")}
            className="px-10 py-4 bg-gradient-to-r from-agro-gold to-agro-gold-light text-agro-green-dark font-montserrat font-800 text-lg rounded-2xl hover:scale-105 transition-all duration-200 shadow-xl shadow-yellow-900/30 inline-flex items-center gap-2"
          >
            <Icon name="Zap" size={20} />
            Выбрать курс
          </button>
        </div>
      </section>
    </div>
  );
}
