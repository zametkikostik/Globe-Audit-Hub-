import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Globe Audit Hub — Профессиональная Бухгалтерия и Аудит",
  description: "Международные бухгалтерские и аудиторские услуги. Россия, Европа, США, СНГ, Азия. AI-помощник 24/7, отчётность, DAI-платежи.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}
