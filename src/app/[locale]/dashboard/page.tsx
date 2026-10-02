"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import CryptoPayment from "@/components/CryptoPayment";

export default function DashboardPage() {
  const t = useTranslations("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">{t("title")}</h1>
        <p className="text-slate-400 mb-10">{t("welcome")}, Client</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { key: "profile", href: "#", icon: "👤" },
            { key: "reports", href: "#", icon: "📄" },
            { key: "payments", href: "/payment", icon: "💳" },
            { key: "subscription", href: "#", icon: "⭐" },
          ].map((item) => (
            <Link
              key={item.key}
              href={item.href as any}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-semibold text-white">{t(item.key)}</div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">{t("reports")}</h2>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Balance Sheet Q3 2026</span>
                <span className="text-green-400">Ready</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>P&amp;L September 2026</span>
                <span className="text-yellow-400">Draft</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Tax Return RF</span>
                <span className="text-slate-500">Pending</span>
              </li>
            </ul>
          </div>
          <CryptoPayment />
        </div>
      </div>
    </div>
  );
}
