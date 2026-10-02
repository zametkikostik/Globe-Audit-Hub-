"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import CryptoPayment from "@/components/CryptoPayment";

export default function PaymentPage() {
  const t = useTranslations("payment");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <div className="pt-28 pb-16 px-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">{t("title")}</h1>
        <CryptoPayment />
      </div>
    </div>
  );
}
