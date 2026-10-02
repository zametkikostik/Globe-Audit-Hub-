"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="text-xl font-bold text-white hidden sm:inline">
            Globe Audit Hub
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-slate-400">
          <a href="#services" className="hover:text-white transition">
            {t("services")}
          </a>
          <a href="#regions" className="hover:text-white transition">
            {t("regions")}
          </a>
          <a href="#contact" className="hover:text-white transition">
            {t("contact")}
          </a>
          <Link href="/dashboard" className="hover:text-white transition">
            {t("dashboard")}
          </Link>
          <Link href="/admin" className="hover:text-white transition">
            {t("admin")}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/auth/signin"
            className="hidden sm:inline text-slate-300 hover:text-white transition text-sm"
          >
            {t("login")}
          </Link>
          <Link
            href="/auth/signup"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-medium rounded-xl transition"
          >
            {t("register")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
