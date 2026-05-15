import { type Course } from "@/data/courses";
import Icon from "@/components/ui/icon";

interface CourseDetailPageProps {
  course: Course;
  onNavigate: (page: string, data?: unknown) => void;
}

const modules = [
  "Введение в курс и обзор программы",
  "Теоретические основы",
  "Практические занятия и лабораторные работы",
  "Современное оборудование и технологии",
  "Анализ кейсов и примеры из практики",
  "Итоговый экзамен и сертификация",
];

export default function CourseDetailPage({ course, onNavigate }: CourseDetailPageProps) {
  const levelColors: Record<string, string> = {
    "Начальный": "text-emerald-600 bg-emerald-50 border-emerald-200",
    "Средний": "text-blue-600 bg-blue-50 border-blue-200",
    "Продвинутый": "text-purple-600 bg-purple-50 border-purple-200",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="hero-mesh pt-28 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-green-300/60 text-sm font-golos mb-6">
            <button onClick={() => onNavigate("home")} className="hover:text-white transition-colors">Главная</button>
            <Icon name="ChevronRight" size={14} />
            <button onClick={() => onNavigate("courses")} className="hover:text-white transition-colors">Курсы</button>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white/80 truncate">{course.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-montserrat font-600 border mb-4 ${levelColors[course.level] || "text-gray-600 bg-gray-50 border-gray-200"}`}>
                {course.level} уровень
              </span>
              <h1 className="font-montserrat font-900 text-3xl lg:text-4xl text-white mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-green-200/80 text-base font-golos leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-6 text-sm font-golos">
                <div className="flex items-center gap-2 text-white/80">
                  <Icon name="Clock" size={16} className="text-agro-emerald" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Icon name="Users" size={16} className="text-agro-emerald" />
                  <span>{course.students} студентов</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Icon name="Star" size={16} className="text-agro-gold" />
                  <span className="font-700 text-white">{course.rating}</span>
                  <span>/ 5.0</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-agro-green to-agro-emerald flex items-center justify-center">
                  <Icon name="User" size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-montserrat font-600 text-sm">{course.instructor}</p>
                  <p className="text-green-400/60 text-xs font-golos">Преподаватель курса</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-agro-green-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* О курсе */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-montserrat font-800 text-2xl text-agro-green-dark mb-4">О курсе</h2>
              <p className="text-gray-600 font-golos leading-relaxed mb-4">
                {course.description} Программа разработана практикующими специалистами и преподавателями аграрного университета с учётом актуальных требований отрасли.
              </p>
              <p className="text-gray-600 font-golos leading-relaxed">
                По окончании курса вы получите удостоверение о повышении квалификации государственного образца, признаваемое ведущими агропредприятиями России.
              </p>
            </div>

            {/* Программа курса */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-montserrat font-800 text-2xl text-agro-green-dark mb-6">Программа курса</h2>
              <div className="space-y-3">
                {modules.map((module, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-green-50/50 border border-green-100 hover:border-agro-emerald/30 transition-colors duration-200">
                    <div className="w-8 h-8 rounded-xl bg-agro-green/10 flex items-center justify-center shrink-0">
                      <span className="font-montserrat font-700 text-agro-green text-sm">{i + 1}</span>
                    </div>
                    <span className="font-golos text-gray-700">{module}</span>
                    <Icon name="ChevronRight" size={16} className="text-gray-400 ml-auto shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Теги */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-montserrat font-800 text-2xl text-agro-green-dark mb-4">Темы курса</h2>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-xl bg-gradient-to-r from-agro-green/10 to-agro-emerald/10 text-agro-green font-montserrat font-600 text-sm border border-agro-emerald/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Запись */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <span className="font-montserrat font-800 text-2xl text-agro-green-dark">Бесплатно</span>
                <span className="text-sm text-gray-400 font-golos line-through">2 500 ₽</span>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { icon: "Clock", text: course.duration },
                  { icon: "Monitor", text: "Онлайн-формат" },
                  { icon: "FileCheck", text: "Сертификат гос. образца" },
                  { icon: "Infinity", text: "Пожизненный доступ" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-sm text-gray-600 font-golos">
                    <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center">
                      <Icon name={item.icon} size={14} className="text-agro-green" fallback="Check" />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-agro-green-light to-agro-emerald text-white font-montserrat font-700 text-base rounded-2xl btn-glow hover:scale-105 transition-all duration-200 shadow-lg shadow-green-900/20 mb-3">
                Записаться на курс
              </button>

              <button
                onClick={() => onNavigate("contacts")}
                className="w-full py-3.5 border-2 border-agro-green/30 text-agro-green font-montserrat font-600 text-sm rounded-2xl hover:bg-agro-green/5 transition-all duration-200"
              >
                Задать вопрос
              </button>
            </div>

            {/* Похожие курсы */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-montserrat font-700 text-base text-agro-green-dark mb-4">Похожие курсы</h3>
              <button
                onClick={() => onNavigate("courses")}
                className="w-full flex items-center gap-2 text-agro-green font-montserrat font-600 text-sm hover:gap-3 transition-all duration-200"
              >
                <Icon name="ArrowLeft" size={16} />
                Все курсы направления
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
