# 🛒 Redux Shopping Cart (Zustand + Next.js)

## 📌 Aim

To implement state management for a shopping cart using **Zustand** with persistent storage in a **Next.js 16** application.

---

## 🚀 Project Overview

This project is a simple **Product Manager / Shopping Cart system** where users can:

* View a list of products
* Add new products
* Update product quantity
* Delete products
* Persist data using `localStorage`

All changes remain saved even after refreshing the page.

---

## 🧰 Tech Stack

| Tool            | Purpose          |
| --------------- | ---------------- |
| Next.js 16      | Framework        |
| React 19        | UI Library       |
| TypeScript      | Type Safety      |
| Tailwind CSS v4 | Styling          |
| Zustand v5      | State Management |
| Zustand Persist | Data Persistence |
| shadcn/ui       | UI Components    |

---

## 📁 Project Structure

```
app/
  globals.css
  layout.tsx
  page.tsx

components/
  ProductList.tsx
  ProductItem.tsx
  ui/

store/
  useProductStore.ts

lib/
  utils.ts
```

---

## ⚙️ Installation & Setup

### 1️⃣ Install dependencies

```bash
pnpm install
```

### 2️⃣ Install Zustand

```bash
pnpm add zustand
```

### 3️⃣ Setup shadcn/ui

```bash
pnpm dlx shadcn@latest init
```

Then install components:

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add spinner
```

---

## ▶️ Running the Project

```bash
pnpm dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🧠 Key Features

### ✅ Zustand Store

* Centralized state management
* Handles product list and actions

### ✅ Persistence

* Uses `localStorage`
* Data remains after refresh

### ✅ Hydration Handling

* Prevents UI mismatch in Next.js
* Uses `hydrated` flag

### ✅ CRUD Operations

* Add Product
* Update Quantity
* Delete Product

---

## 🔄 How It Works

1. App loads with default products
2. Zustand reads saved data from `localStorage`
3. UI waits until hydration completes
4. User actions update state
5. State is automatically saved

---

## ⚠️ Important Concepts

### Hydration

* React hydration → attaches JS to HTML
* Zustand hydration → loads data from storage

### Persist Middleware

* Saves state automatically
* Restores state on reload

---

## 📸 Output

* Product list displayed
* Quantity editable
* Delete button
* Total items count
* Persistent data

---

## 🎯 Conclusion

This project demonstrates how to use **Zustand for global state management** with persistence in a modern **Next.js application**, making it efficient and scalable.

---

## 👨‍💻 Author

**Kenyi Oliver**

---

## 📌 Notes

* Ensure you run commands inside project folder
* Make sure all UI components are installed
* Use `pnpm dev` to start server

---
