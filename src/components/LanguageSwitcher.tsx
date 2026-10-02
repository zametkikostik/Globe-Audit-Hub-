"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";

const locales = [
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "bg", label: "BG", flag: "🇧🇬" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (next: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div className="flex items-center gap-1 rounded-xl bg-white/5 border border-white/10 p-1">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => switchLocale(l.code)}
          disabled={isPending || locale === l.code}
          className={`px-2.5 py-1 rounded-lg text-sm font-medium transition ${
            locale === l.code
              ? "bg-blue-600 text-white"
              : "text-slate-400 hover:text-white hover:bg-white/10"
          }`}
          title={l.label}
        >
          <span className="mr-1">{l.flag}</span>
          {l.label}
        </button>
      ))}
    </div>
  );
}
