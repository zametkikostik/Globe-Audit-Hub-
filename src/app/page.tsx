"use client";

import { useState } from "react";

const services = [
  { icon: "📊", title: "Бухгалтерское обслуживание", description: "Полное ведение бухгалтерии для ИП и ООО. Сдача отчётности." },
  { icon: "🔍", title: "Аудит", description: "Независимая проверка финансовой отчётности. Выявление рисков." },
  { icon: "💰", title: "Налоговое планирование", description: "Оптимизация налогообложения. Подбор режима." },
  { icon: "🌍", title: "Международная отчётность", description: "МСФО, GAAP, РСБУ. Отчёты для зарубежных партнёров." },
  { icon: "🔐", title: "Блокчейн-верификация", description: "Верификация платежей через Polygon. Неизменяемость данных." },
  { icon: "🤖", title: "AI-консультант 24/7", description: "Автоматические консультации по налогам и отчётности." },
];

const regions = [
  { flag: "🇷🇺", name: "Россия" },
  { flag: "🇰🇿", name: "Казахстан" },
  { flag: "🇧🇾", name: "Беларусь" },
  { flag: "🇩🇪", name: "Германия" },
  { flag: "🇫🇷", name: "Франция" },
  { flag: "🇬🇧", name: "Великобритания" },
  { flag: "🇺🇸", name: "США" },
  { flag: "🇨🇳", name: "Китай" },
  { flag: "🇧🇬", name: "Болгария" },
  { flag: "🇺🇿", name: "Узбекистан" },
];

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-white">Globe Audit Hub</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-slate-400">
            <a href="#services" className="hover:text-white transition">Услуги</a>
            <a href="#regions" className="hover:text-white transition">Регионы</a>
            <a href="#contact" className="hover:text-white transition">Контакты</a>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2 text-slate-300 hover:text-white transition">Вход</button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl transition">
              Регистрация
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Профессиональная{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Бухгалтерия
            </span>{" "}
            и Аудит
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
            Комплексные бухгалтерские и аудиторские услуги для России, Европы, США, СНГ, Азии и всего мира.
            AI-помощник 24/7 · Отчётность · Криптоплатежи DAI
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-2xl transition transform hover:scale-105">
              Начать работу
            </button>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-2xl transition"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 hover:bg-white/10 transition"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="regions" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Регионы работы</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {regions.map((r, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-4 text-center hover:bg-white/10 transition"
              >
                <div className="text-4xl mb-2">{r.flag}</div>
                <div className="text-sm text-slate-300">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Связаться с нами</h2>
          <p className="text-slate-400 text-center mb-12">
            Оставьте заявку — ответим в течение 15 минут
          </p>

          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
              <p className="text-slate-400">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Имя *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Сообщение</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Опишите вашу задачу..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 text-white font-semibold rounded-xl transition"
              >
                {loading ? "Отправка..." : "Отправить заявку"}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-white">Globe Audit Hub</span>
          </div>
          <p className="text-slate-400 text-sm mb-6">
            Профессиональная бухгалтерия и аудит · Работаем по всему миру · 24/7 поддержка
          </p>
          <p className="text-slate-500 text-sm">© 2026 Globe Audit Hub. Все права защищены.</p>
        </div>
      </footer>
    </main>
  );
}
