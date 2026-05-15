export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  image: string;
  instructor: string;
  tags: string[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  color: string;
  coursesCount: number;
  courses: Course[];
}

export const categories: Category[] = [
  {
    id: "agrotechnology",
    title: "Агротехнологии",
    description: "Современные методы возделывания культур и управление агроэкосистемами",
    icon: "Sprout",
    image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/35e4e265-1708-44b6-a40a-72fcfb51afd4.jpg",
    color: "from-green-600 to-emerald-500",
    coursesCount: 12,
    courses: [
      {
        id: "agro-1",
        title: "Точное земледелие и GPS-навигация",
        description: "Освойте современные технологии точного земледелия: дроны, GPS-навигацию, картирование почв и дифференцированное внесение удобрений.",
        duration: "48 часов",
        level: "Средний",
        students: 342,
        rating: 4.8,
        image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/59c9d08a-3680-428b-8b52-dc4cc445bba8.jpg",
        instructor: "Проф. Иванов А.В.",
        tags: ["GPS", "Дроны", "Агрохимия"]
      },
      {
        id: "agro-2",
        title: "Органическое земледелие",
        description: "Принципы органического производства, сертификация, компостирование и экологически безопасные методы защиты растений.",
        duration: "36 часов",
        level: "Начальный",
        students: 218,
        rating: 4.9,
        image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/35e4e265-1708-44b6-a40a-72fcfb51afd4.jpg",
        instructor: "Доц. Петрова М.С.",
        tags: ["Органика", "Экология", "Сертификация"]
      },
      {
        id: "agro-3",
        title: "Защита растений от вредителей",
        description: "Интегрированная система защиты растений, биологические методы борьбы, фитосанитарный мониторинг.",
        duration: "40 часов",
        level: "Средний",
        students: 176,
        rating: 4.7,
        image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/35e4e265-1708-44b6-a40a-72fcfb51afd4.jpg",
        instructor: "Проф. Сидоров К.Л.",
        tags: ["Защита", "Биология", "Мониторинг"]
      }
    ]
  },
  {
    id: "livestock",
    title: "Животноводство",
    description: "Передовые технологии содержания и разведения сельскохозяйственных животных",
    icon: "Beef",
    image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/35b4a985-0300-4e1c-a0da-f6ba3c09afd7.jpg",
    color: "from-amber-600 to-orange-500",
    coursesCount: 9,
    courses: [
      {
        id: "live-1",
        title: "Молочное скотоводство 2.0",
        description: "Современные технологии доения, роботизированные фермы, племенная работа и кормление высокопродуктивных коров.",
        duration: "52 часа",
        level: "Продвинутый",
        students: 124,
        rating: 4.9,
        image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/35b4a985-0300-4e1c-a0da-f6ba3c09afd7.jpg",
        instructor: "Проф. Козлова Е.Н.",
        tags: ["Роботы", "Молоко", "Племенная работа"]
      },
      {
        id: "live-2",
        title: "Свиноводство и птицеводство",
        description: "Промышленные технологии выращивания свиней и птицы, ветеринарная профилактика, автоматизация кормления.",
        duration: "44 часа",
        level: "Средний",
        students: 89,
        rating: 4.6,
        image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/35b4a985-0300-4e1c-a0da-f6ba3c09afd7.jpg",
        instructor: "Доц. Николаев П.В.",
        tags: ["Свиньи", "Птица", "Автоматизация"]
      }
    ]
  },
  {
    id: "agroengineering",
    title: "Агроинженерия",
    description: "Сельскохозяйственная техника, мелиорация и инженерные решения для АПК",
    icon: "Settings",
    image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/59c9d08a-3680-428b-8b52-dc4cc445bba8.jpg",
    color: "from-blue-600 to-cyan-500",
    coursesCount: 8,
    courses: [
      {
        id: "eng-1",
        title: "Техническое обслуживание тракторов",
        description: "Диагностика и ремонт современных тракторов, работа с бортовыми компьютерами, регламентное обслуживание.",
        duration: "60 часов",
        level: "Средний",
        students: 203,
        rating: 4.8,
        image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/59c9d08a-3680-428b-8b52-dc4cc445bba8.jpg",
        instructor: "Доц. Федоров И.А.",
        tags: ["Трактора", "Ремонт", "Диагностика"]
      },
      {
        id: "eng-2",
        title: "Системы орошения и мелиорация",
        description: "Проектирование и монтаж систем капельного орошения, дождевания, управление водными ресурсами.",
        duration: "38 часов",
        level: "Средний",
        students: 156,
        rating: 4.7,
        image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/59c9d08a-3680-428b-8b52-dc4cc445bba8.jpg",
        instructor: "Проф. Смирнова О.В.",
        tags: ["Орошение", "Мелиорация", "Вода"]
      }
    ]
  },
  {
    id: "economics",
    title: "Экономика АПК",
    description: "Управление аграрным бизнесом, финансы и маркетинг в сельском хозяйстве",
    icon: "TrendingUp",
    image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/35b4a985-0300-4e1c-a0da-f6ba3c09afd7.jpg",
    color: "from-purple-600 to-pink-500",
    coursesCount: 7,
    courses: [
      {
        id: "eco-1",
        title: "Бизнес-планирование в сельском хозяйстве",
        description: "Разработка бизнес-планов, анализ рентабельности, привлечение субсидий и грантов для фермерских хозяйств.",
        duration: "32 часа",
        level: "Начальный",
        students: 287,
        rating: 4.9,
        image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/35b4a985-0300-4e1c-a0da-f6ba3c09afd7.jpg",
        instructor: "Проф. Белова Т.Ю.",
        tags: ["Бизнес", "Субсидии", "Финансы"]
      },
      {
        id: "eco-2",
        title: "Агромаркетинг и экспорт",
        description: "Продвижение сельхозпродукции, работа с маркетплейсами, экспортные процедуры и сертификация для выхода на внешние рынки.",
        duration: "28 часов",
        level: "Средний",
        students: 194,
        rating: 4.7,
        image: "https://cdn.poehali.dev/projects/051e5d1a-0587-4e81-b1ef-c85ffe6dfbc8/files/35b4a985-0300-4e1c-a0da-f6ba3c09afd7.jpg",
        instructor: "Доц. Громов С.Э.",
        tags: ["Маркетинг", "Экспорт", "Рынки"]
      }
    ]
  }
];
