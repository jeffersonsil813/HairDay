# 💈 HairDay — Haircut Appointment Scheduler

> A challenge project from the **Rocketseat React Formation**, built to practice React fundamentals with a real-world scheduling use case.

---

## 🚀 Live Demo

🔗 **[Click here to access the application](#)**

---

## 📸 Screenshots

### Desktop

![HairDay Desktop](./public/HairDay%20Desktop.png)

### Mobile

| Scheduling Form | Your Schedule |
|---|---|
| ![Mobile Form](./public/HairDay%20Mobile%201.png) | ![Mobile Schedule](./public/HairDay%20Mobile%202.png) |

---

## 📋 About the Project

**HairDay** is a haircut appointment scheduler that allows a barber to manage their daily agenda. The user can select a date, choose an available time slot (Morning, Afternoon, or Night), enter the client's name, and schedule the appointment. Scheduled appointments are listed by time period and can be deleted individually.

This project was built as part of the **React Formation challenge at [Rocketseat](https://www.rocketseat.com.br/)**, with the goal of reinforcing component composition, state management, local persistence, and internationalization in a React application.

---

## ✨ Features

- 📅 Select any date from a date picker
- 🕐 Choose from available time slots grouped by period (Morning / Afternoon / Night)
- 👤 Register a client name for each appointment
- 🗑️ Delete appointments individually
- 💾 Appointments persisted in `localStorage` — data survives page refreshes
- 🌐 Full internationalization with two languages: **Portuguese (BR)** and **English (US)**

---

## 🌐 Internationalization (i18next)

One of the highlights of this project is the integration of **[i18next](https://www.i18next.com/)** with **react-i18next**, enabling full bilingual support:

| Language | Flag |
|---|---|
| 🇧🇷 Português (BR) | Selectable via flag button |
| 🇺🇸 English (US) | Default |

All UI strings — labels, placeholders, section titles, time period names, and button text — are translated through JSON locale files, making the application fully switchable between languages at runtime without any page reload.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | Static typing and type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Class Variance Authority (CVA)](https://cva.style/) | Component variant management |
| [use-local-storage](https://github.com/nas5w/use-local-storage) | Persistent state via localStorage |
| [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/) | Internationalization (PT-BR / EN) |

---

## 📁 Project Structure

```
src/
├── assets/            # Static assets (images, icons, etc.)
├── components/        # Reusable UI components
├── core-components/   # Base/core components
├── hooks/             # Custom React hooks
├── i18n/
│   ├── locales/
│   │   ├── en.ts     # English translations
│   │   └── pt.ts     # Portuguese (BR) translations
│   └── index.ts      # i18n configuration
├── models/            # TypeScript types and interfaces
├── utils/             # Utility functions
├── App.tsx
├── index.css
└── main.tsx
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hairday.git

# Navigate to the project folder
cd hairday

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 📚 About Rocketseat

This project is part of the **React Formation** track at [Rocketseat](https://www.rocketseat.com.br/), a hands-on challenge designed to consolidate knowledge of React, TypeScript, and modern front-end tooling.

---

## 📝 License

This project is open source and available under the [MIT License](./LICENSE).