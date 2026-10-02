# Globe Audit Hub

**Professional global accounting & audit SaaS platform**

[English](#english) · [Русский](#русский)

---

<a id="english"></a>
## English

### Overview

**Globe Audit Hub** is a production-oriented SaaS platform for international accounting, audit, tax reporting and compliance. It is designed for businesses operating across Russia, the CIS, Europe, the United States, Asia, Bulgaria and other jurisdictions.

The product combines a multilingual web interface, client dashboard, admin panel, crypto and fiat payments, and a 24/7 AI consultant for accounting and tax questions.

### Key Features

| Area | Description |
|------|-------------|
| **Multilingual** | Russian, English, Bulgarian with an in-app language switcher |
| **Authentication** | Sign-in / sign-up and personal dashboard (demo auth; Clerk-ready) |
| **Accounting & audit** | Bookkeeping, audit support, tax planning, IFRS / GAAP / RAS reporting |
| **Payments** | DAI on Polygon (official contract) and Stripe (card payments) |
| **AI assistant** | 24/7 chat for taxes, reporting deadlines and audit guidance |
| **Admin panel** | Clients, subscriptions, payments and reports overview |
| **Deployment** | Serverless-ready: Vercel, Netlify, Cloudflare Pages |

### Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript  
- **UI:** Tailwind CSS  
- **i18n:** next-intl (RU / EN / BG)  
- **Crypto:** ethers.js · DAI on Polygon `0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063`  
- **AI:** OpenAI / xAI API (optional) with offline fallback  
- **Auth:** Demo local auth · prepared for Clerk  

### Quick Start

```bash
git clone https://github.com/zametkikostik/Globe-Audit-Hub-.git
cd Globe-Audit-Hub-
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/ru`.

### Environment Variables

See `.env.example`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_CLERK_*` / `CLERK_SECRET_KEY` | Optional Clerk authentication |
| `OPENAI_API_KEY` / `XAI_API_KEY` | Optional AI backend |
| `NEXT_PUBLIC_STRIPE_*` / `STRIPE_SECRET_KEY` | Optional Stripe payments |
| `NEXT_PUBLIC_DAI_CONTRACT` | DAI contract on Polygon (default: official) |
| `NEXT_PUBLIC_PAYMENT_RECIPIENT` | Wallet that receives DAI payments |

### Project Structure

```
src/
  app/[locale]/          # Locale-aware routes (ru | en | bg)
    page.tsx             # Marketing landing
    dashboard/           # Client dashboard
    admin/               # Admin panel
    payment/             # Payment page
    auth/                # Sign-in / sign-up
  app/api/ai/            # AI chat API
  app/api/contact/       # Contact form API
  components/            # Navbar, AIChat, CryptoPayment, LanguageSwitcher
  i18n/                  # next-intl routing & request config
  messages/              # Translation files (ru, en, bg)
  middleware.ts          # Locale middleware
```

### Deployment

| Platform | Notes |
|----------|--------|
| **Vercel** | Connect the repository; default Next.js settings |
| **Netlify** | Build command: `npm run build` |
| **Cloudflare Pages** | Use the Next.js framework preset |

The project uses `output: "standalone"` for flexible serverless and container deploys.

### License

This project is licensed under the **GNU General Public License v2.0** (same family as the Linux kernel).  
See the [LICENSE](LICENSE) file for the full text.

You are free to use, modify and distribute the software under the terms of the GPL. Any derivative work must also be released under the GPL.

---

<a id="русский"></a>
## Русский

### Обзор

**Globe Audit Hub** — SaaS-платформа для международной бухгалтерии, аудита, налоговой отчётности и compliance. Рассчитана на бизнес, работающий в России, СНГ, Европе, США, Азии, Болгарии и других юрисдикциях.

Платформа объединяет мультиязычный веб-интерфейс, личный кабинет клиента, админ-панель, крипто- и фиат-платежи, а также AI-консультанта 24/7 по вопросам бухгалтерии и налогов.

### Основные возможности

| Направление | Описание |
|-------------|----------|
| **Мультиязычность** | Русский, английский, болгарский + переключатель в интерфейсе |
| **Авторизация** | Вход / регистрация и личный кабинет (демо-auth; готов к Clerk) |
| **Бухгалтерия и аудит** | Ведение учёта, аудит, налоговое планирование, отчётность МСФО / GAAP / РСБУ |
| **Платежи** | DAI в сети Polygon (офиговорный контракт) и Stripe (оплата картой) |
| **AI-помощник** | Чат 24/7 по налогам, срокам сдачи отчётности и аудиту |
| **Админ-панель** | Клиенты, подписки, платежи, отчёты |
| **Развёртывание** | Serverless: Vercel, Netlify, Cloudflare Pages |

### Технологический стек

- **Фреймворк:** Next.js 15 (App Router) + TypeScript  
- **UI:** Tailwind CSS  
- **i18n:** next-intl (RU / EN / BG)  
- **Крипто:** ethers.js · DAI на Polygon `0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063`  
- **AI:** OpenAI / xAI API (опционально) + offline fallback  
- **Auth:** Демо-авторизация · подготовлено под Clerk  

### Быстрый старт

```bash
git clone https://github.com/zametkikostik/Globe-Audit-Hub-.git
cd Globe-Audit-Hub-
npm install
cp .env.example .env.local
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) — произойдёт редирект на `/ru`.

### Переменные окружения

См. файл `.env.example`:

| Переменная | Назначение |
|------------|------------|
| `NEXT_PUBLIC_CLERK_*` / `CLERK_SECRET_KEY` | Опционально: авторизация через Clerk |
| `OPENAI_API_KEY` / `XAI_API_KEY` | Опционально: бэкенд AI |
| `NEXT_PUBLIC_STRIPE_*` / `STRIPE_SECRET_KEY` | Опционально: платежи Stripe |
| `NEXT_PUBLIC_DAI_CONTRACT` | Контракт DAI в Polygon (по умолчанию — официальный) |
| `NEXT_PUBLIC_PAYMENT_RECIPIENT` | Кошелёк-получатель DAI |

### Структура проекта

```
src/
  app/[locale]/          # Маршруты с учётом языка (ru | en | bg)
    page.tsx             # Лендинг
    dashboard/           # Личный кабинет
    admin/               # Админ-панель
    payment/             # Страница оплаты
    auth/                # Вход / регистрация
  app/api/ai/            # API AI-чата
  app/api/contact/       # API формы обратной связи
  components/            # Navbar, AIChat, CryptoPayment, LanguageSwitcher
  i18n/                  # Конфигурация next-intl
  messages/              # Переводы (ru, en, bg)
  middleware.ts          # Middleware локализации
```

### Развёртывание

| Платформа | Примечание |
|-----------|------------|
| **Vercel** | Подключите репозиторий; стандартные настройки Next.js |
| **Netlify** | Команда сборки: `npm run build` |
| **Cloudflare Pages** | Пресет фреймворка Next.js |

В проекте включён `output: "standalone"` для удобного serverless- и Docker-деплоя.

### Лицензия

Проект распространяется на условиях **GNU General Public License v2.0** (тот же класс лицензий, что и у ядра Linux).  
Полный текст — в файле [LICENSE](LICENSE).

Вы можете свободно использовать, изменять и распространять ПО на условиях GPL. Производные работы также должны распространяться под GPL.

---

**Globe Audit Hub** · 2026  
Licensed under the GNU General Public License v2.0
