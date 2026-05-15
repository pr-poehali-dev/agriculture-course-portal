import Icon from "@/components/ui/icon";

export default function ContactsPage() {
  const contacts = [
    {
      icon: "MapPin",
      title: "Адрес",
      lines: ["г. Краснодар, ул. Калинина, 13", "Главный корпус, каб. 201"],
    },
    {
      icon: "Phone",
      title: "Телефон",
      lines: ["+7 (861) 221-57-00", "+7 (861) 221-57-01 (факс)"],
    },
    {
      icon: "Mail",
      title: "Email",
      lines: ["edu@agroacademy.ru", "info@agroacademy.ru"],
    },
    {
      icon: "Clock",
      title: "Режим работы",
      lines: ["Пн–Пт: 8:00–18:00", "Сб: 9:00–13:00"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="hero-mesh pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-900 text-4xl lg:text-5xl text-white mb-4">Контакты</h1>
          <p className="text-green-200/80 text-lg max-w-xl mx-auto font-golos">
            Мы всегда рады ответить на ваши вопросы об обучении
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div>
            <h2 className="font-montserrat font-800 text-2xl text-agro-green-dark mb-8">
              Свяжитесь с нами
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contacts.map((c) => (
                <div key={c.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 card-hover">
                  <div className="w-10 h-10 rounded-xl bg-agro-green/10 flex items-center justify-center mb-3">
                    <Icon name={c.icon} size={20} className="text-agro-green" />
                  </div>
                  <h3 className="font-montserrat font-700 text-sm text-agro-green-dark mb-1">{c.title}</h3>
                  {c.lines.map((line) => (
                    <p key={line} className="text-gray-500 text-sm font-golos">{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Социальные сети */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-montserrat font-700 text-sm text-agro-green-dark mb-3">Мы в соцсетях</h3>
              <div className="flex gap-3">
                {[
                  { icon: "Youtube", label: "YouTube" },
                  { icon: "Send", label: "Telegram" },
                  { icon: "Globe", label: "ВКонтакте" },
                ].map((s) => (
                  <button key={s.label} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-agro-green/10 text-agro-green font-montserrat font-600 text-sm hover:bg-agro-green hover:text-white transition-all duration-200">
                    <Icon name={s.icon} size={16} />
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Форма */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <h2 className="font-montserrat font-800 text-2xl text-agro-green-dark mb-6">
              Отправить заявку
            </h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-montserrat font-600 text-gray-700 mb-1.5">
                    Имя
                  </label>
                  <input
                    type="text"
                    placeholder="Иван Петров"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 font-golos text-sm transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-montserrat font-600 text-gray-700 mb-1.5">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (000) 000-00-00"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 font-golos text-sm transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-montserrat font-600 text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@mail.ru"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 font-golos text-sm transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat font-600 text-gray-700 mb-1.5">
                  Интересующий курс
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 font-golos text-sm text-gray-600 transition-all duration-200">
                  <option value="">Выберите направление</option>
                  <option>Агротехнологии</option>
                  <option>Животноводство</option>
                  <option>Агроинженерия</option>
                  <option>Экономика АПК</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-montserrat font-600 text-gray-700 mb-1.5">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  placeholder="Напишите ваш вопрос..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-agro-green focus:ring-2 focus:ring-agro-green/20 font-golos text-sm transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-agro-green-light to-agro-emerald text-white font-montserrat font-700 text-base rounded-2xl btn-glow hover:scale-105 transition-all duration-200 shadow-lg shadow-green-900/20 flex items-center justify-center gap-2"
              >
                <Icon name="Send" size={18} />
                Отправить заявку
              </button>

              <p className="text-center text-xs text-gray-400 font-golos">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
