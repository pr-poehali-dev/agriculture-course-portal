import { useState } from "react";
import { categories, type Category } from "@/data/courses";
import Icon from "@/components/ui/icon";

interface CoursesPageProps {
  onNavigate: (page: string, data?: unknown) => void;
  initialCategory?: Category | null;
}

export default function CoursesPage({ onNavigate, initialCategory }: CoursesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(initialCategory || null);

  const displayedCourses = selectedCategory
    ? selectedCategory.courses
    : categories.flatMap((c) => c.courses);

  const levelColors: Record<string, string> = {
    "Начальный": "bg-emerald-100 text-emerald-700",
    "Средний": "bg-blue-100 text-blue-700",
    "Продвинутый": "bg-purple-100 text-purple-700",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка страницы */}
      <section className="hero-mesh pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-montserrat font-900 text-4xl lg:text-5xl text-white mb-4">
              {selectedCategory ? selectedCategory.title : "Все курсы"}
            </h1>
            <p className="text-green-200/80 text-lg max-w-xl mx-auto font-golos">
              {selectedCategory ? selectedCategory.description : "Профессиональные программы для специалистов АПК"}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Фильтры по категориям */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-5 py-2.5 rounded-xl font-montserrat font-600 text-sm transition-all duration-200 ${
              !selectedCategory
                ? "bg-agro-green text-white shadow-lg shadow-green-900/20"
                : "bg-white text-gray-600 border border-gray-200 hover:border-agro-green hover:text-agro-green"
            }`}
          >
            Все курсы
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-montserrat font-600 text-sm transition-all duration-200 flex items-center gap-2 ${
                selectedCategory?.id === cat.id
                  ? "bg-agro-green text-white shadow-lg shadow-green-900/20"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-agro-green hover:text-agro-green"
              }`}
            >
              <Icon name={cat.icon} size={14} fallback="BookOpen" />
              {cat.title}
            </button>
          ))}
        </div>

        {/* Результат */}
        <p className="text-gray-500 text-sm font-golos mb-6">
          Найдено курсов: <span className="font-600 text-agro-green">{displayedCourses.length}</span>
        </p>

        {/* Карточки курсов */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCourses.map((course, i) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md card-hover animate-fade-in border border-gray-100"
              style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
            >
              {/* Картинка */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-montserrat font-700 ${levelColors[course.level] || "bg-gray-100 text-gray-600"}`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-agro-gold/90 px-2.5 py-1 rounded-lg">
                  <Icon name="Star" size={12} className="text-white" />
                  <span className="text-white text-xs font-montserrat font-700">{course.rating}</span>
                </div>
              </div>

              {/* Контент */}
              <div className="p-5">
                <h3 className="font-montserrat font-700 text-lg text-agro-green-dark mb-2 leading-tight">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm font-golos mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Мета */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 font-golos">
                  <span className="flex items-center gap-1.5">
                    <Icon name="Clock" size={13} className="text-agro-green" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="Users" size={13} className="text-agro-green" />
                    {course.students} студентов
                  </span>
                </div>

                {/* Теги */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-green-50 text-agro-green text-xs font-montserrat font-600 border border-green-100">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Преподаватель + кнопка */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-agro-green to-agro-emerald flex items-center justify-center">
                      <Icon name="User" size={14} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-500 font-golos">{course.instructor}</span>
                  </div>
                  <button
                    onClick={() => onNavigate("courseDetail", course)}
                    className="px-4 py-2 bg-gradient-to-r from-agro-green to-agro-emerald text-white font-montserrat font-700 text-sm rounded-xl hover:scale-105 transition-all duration-200 btn-glow"
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
