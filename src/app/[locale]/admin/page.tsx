"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";

const mockUsers = [
  { id: 1, name: "ООО Альфа", email: "alpha@example.com", plan: "Pro", status: "active" },
  { id: 2, name: "ИП Иванов", email: "ivanov@mail.ru", plan: "Basic", status: "active" },
  { id: 3, name: "Globe BG EOOD", email: "bg@globe.bg", plan: "Enterprise", status: "trial" },
];

export default function AdminPage() {
  const t = useTranslations("admin");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">{t("title")}</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: t("users"), value: "128" },
            { label: t("subscriptions"), value: "94" },
            { label: t("payments"), value: "$12.4k" },
            { label: t("reports"), value: "312" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
            >
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10 font-semibold text-white">
            {t("users")}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-slate-400 border-b border-white/5">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Plan</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-slate-200">
                {mockUsers.map((u) => (
                  <tr key={u.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="px-6 py-3">{u.id}</td>
                    <td className="px-6 py-3">{u.name}</td>
                    <td className="px-6 py-3">{u.email}</td>
                    <td className="px-6 py-3">{u.plan}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs ${
                          u.status === "active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {u.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
