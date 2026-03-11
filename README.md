# 📋 Full-Stack Task Board Application

A robust, production-ready Task Management dashboard designed for high-performance productivity and seamless user experience. This application serves as a demonstration of clean Full-Stack integration between a Pythonic backend and a React-based frontend.

---

## 🚀 Executive Summary

This project provides a centralized workspace for users to manage tasks efficiently. It was architected to be **modular, scalable, and responsive**. By utilizing **Django REST Framework (DRF)** for data orchestration and **React (Vite)** for a reactive UI, the application ensures instantaneous feedback and data integrity.

## 🧠 Core Architecture

* **The Backend (Django REST Framework):** Follows the Model-View-Controller (MVC) pattern. It exposes a strict RESTful API that handles data persistence and business logic, ensuring a clean separation between data layers and client requests.
* **The Frontend (React + Vite):** A Single-Page Application (SPA) architecture. It uses hooks-based state management to handle dynamic data flows without page reloads, ensuring a fluid user experience.

## 🛠 Tech Stack

| Tier | Technology |
| --- | --- |
| **Backend** | Python 3.x, Django, Django REST Framework, SQLite |
| **Frontend** | React 19, Vite, Tailwind CSS v4, Axios |
| **Tools** | Git, Postman (API Testing), VS Code |

## 📡 API Interface

The backend is structured to handle high-frequency CRUD operations via the following endpoints:

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/api/tasks/` | `GET` | Retrieves the full state of the task board. |
| `/api/tasks/` | `POST` | Validates and persists new task entries. |
| `/api/tasks/{id}/` | `PATCH` | Implements partial updates (Completion status). |
| `/api/tasks/{id}/` | `DELETE` | Removes task records from the persistence layer. |

## 🌟 Unique Creative Component: "Cognitive Load Management"

I implemented a **Dynamic Priority-Aware Engine**.
Unlike standard todo apps, this system automatically translates task metadata (`priority`) into real-time UI states. By using conditional CSS rendering, the interface forces the user to focus on **High-Urgency items first**, effectively acting as a "Cognitive Load Manager" to reduce decision fatigue throughout the workday.

---

## 🔧 Backend Server Running (Django)

<img width="1920" height="1080" alt="Screenshot 2026-03-11 205515" src="https://github.com/user-attachments/assets/91c8000e-c061-4ce7-9e5e-24eddc9f8fa0" />

---
## 📡 API Endpoint Response (Task Data JSON)

<img width="1920" height="1080" alt="Screenshot 2026-03-11 205604" src="https://github.com/user-attachments/assets/c8d670b2-e313-416e-8449-1b2e3daf5f99" />

---
## 🖥️ Frontend Task Board Interface (React UI)

<img width="1920" height="1080" alt="Screenshot 2026-03-11 205838" src="https://github.com/user-attachments/assets/448be8b2-301d-49ed-9810-0422898e8a45" />

---

## ⚙️ Deployment & Local Setup

### Prerequisites

* Python 3.10+
* Node.js 20+

### Step 1: Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

```

### Step 2: Frontend Setup

```bash
cd frontend
npm install
npm run dev

```

---
