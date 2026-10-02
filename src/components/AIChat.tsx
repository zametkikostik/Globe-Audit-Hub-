"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

type Msg = { role: "user" | "assistant"; content: string };

export default function AIChat() {
  const t = useTranslations("ai");
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Здравствуйте! Я AI-консультант Globe Audit Hub. Спрашивайте о бухгалтерии, налогах, МСФО, GAAP, аудиту и отчётности. Работаю 24/7.",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((m) => [...m, { role: "user", content: userMsg }]);
    setLoading(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history: messages }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.reply || "Извините, временно недоступен. Попробуйте позже.",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Для полноценной работы AI добавьте OPENAI_API_KEY или XAI_API_KEY в .env. Пока могу ответить базово: по РСБУ/МСФО, срокам отчётности и налоговому планированию обращайтесь в форму контактов.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/40 flex items-center justify-center text-2xl hover:scale-110 transition"
        aria-label="AI Chat"
      >
        {open ? "✕" : "🤖"}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[min(100vw-2rem,380px)] h-[480px] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
            <h3 className="font-semibold text-white">{t("title")}</h3>
            <p className="text-xs text-slate-400">24/7 · Globe Audit Hub</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "bg-white/10 text-slate-200"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="bg-white/10 text-slate-400 rounded-2xl px-3 py-2 text-sm w-fit">
                {t("thinking")}
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder={t("placeholder")}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={send}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium disabled:opacity-50"
            >
              {t("send")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
