"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import Navbar from "@/components/Navbar";

export default function SignInPage() {
  const t = useTranslations("auth");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "gah_user",
          JSON.stringify({ email, role: email.includes("admin") ? "admin" : "client" })
        );
      }
      router.push("/dashboard");
    } else {
      setError("Fill all fields");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <div className="pt-32 pb-16 px-6 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5"
        >
          <h1 className="text-2xl font-bold text-white text-center">{t("signin")}</h1>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <div>
            <label className="block text-sm text-slate-400 mb-1">{t("email")}</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">{t("password")}</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl font-semibold transition"
          >
            {t("submitLogin")}
          </button>
          <p className="text-center text-sm text-slate-400">
            {t("noAccount")}{" "}
            <Link href="/auth/signup" className="text-blue-400 hover:underline">
              {t("signup")}
            </Link>
          </p>
          <p className="text-xs text-slate-500 text-center">
            Demo: any email/password. For production use Clerk keys in .env
          </p>
        </form>
      </div>
    </div>
  );
}
