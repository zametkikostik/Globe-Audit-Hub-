# Globe Audit Hub

Профессиональная платформа бухгалтерских и аудиторских услуг (Global Accounting SaaS).

## Возможности

- 🌐 **Мультиязычность**: RU / EN / BG + переключатель
- 🔐 **Auth + личный кабинет** (demo + готовность к Clerk)
- 💳 **Платежи**: DAI (Polygon, официальный контракт `0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063`) + Stripe placeholder
- 🤖 **AI-чат 24/7** (OpenAI / xAI Grok или offline fallback)
- 🛠 **Админ-панель**
- Serverless: Vercel / Netlify / Cloudflare Pages

## Быстрый старт

```bash
git clone https://github.com/zametkikostik/Globe-Audit-Hub-.git
cd Globe-Audit-Hub-
npm install
cp .env.example .env.local
npm run dev
```

Откройте http://localhost:3000 → редирект на `/ru`

## Структура

```
src/
  app/[locale]/     # ru | en | bg
    page.tsx        # лендинг
    dashboard/      # личный кабинет
    admin/          # админка
    payment/        # DAI + Stripe
    auth/           # signin / signup
  app/api/ai/       # AI endpoint
  components/       # Navbar, AIChat, CryptoPayment, LanguageSwitcher
  i18n/             # next-intl routing
  messages/         # ru.json, en.json, bg.json
```

## Deploy

- **Vercel**: подключите репозиторий
- **Netlify**: build `npm run build`
- **Cloudflare Pages**: framework preset Next.js

© 2026 Globe Audit Hub
