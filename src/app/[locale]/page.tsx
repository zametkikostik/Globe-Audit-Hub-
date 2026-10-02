"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/Navbar";

const serviceKeys = ["accounting", "audit", "tax", "ifrs", "blockchain", "ai"] as const;
const regions = [
  { flag: "🇷🇺", name: "Russia" },
  { flag: "🇰🇿", name: "Kazakhstan" },
  { flag: "🇧🇾", name: "Belarus" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇨🇳", name: "China" },
  { flag: "🇧🇬", name: "Bulgaria" },
  { flag: "🇺🇿", name: "Uzbekistan" },
];
const icons = ["📊", "🔍", "💰", "🌍", "🔐", "🤖"];

export default function HomePage() {
  const t = useTranslations();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {}
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t("hero.title1")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>{" "}
            {t("hero.title3")}
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/auth/signup"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-2xl transition transform hover:scale-105"
            >
              {t("hero.cta")}
            </Link>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-2xl transition"
            >
              {t("hero.contact")}
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t("services.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceKeys.map((key, i) => (
              <div
                key={key}
                className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 hover:bg-white/10 transition"
              >
                <div className="text-4xl mb-4">{icons[i]}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t(`services.items.${key}.title`)}
                </h3>
                <p className="text-slate-400">{t(`services.items.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="regions" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t("regions.title")}
          </h2>
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
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-slate-400 text-center mb-12">{t("contact.subtitle")}</p>

          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t("contact.success")}
              </h3>
              <p className="text-slate-400">{t("contact.successDesc")}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    {t("contact.name")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    {t("contact.email")} *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 text-white font-semibold rounded-xl transition"
              >
                {loading ? t("contact.sending") : t("contact.submit")}
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
          <p className="text-slate-400 text-sm mb-6">{t("footer.tagline")}</p>
          <p className="text-slate-500 text-sm">{t("footer.rights")}</p>
        </div>
      </footer>
    </main>
  );
}
