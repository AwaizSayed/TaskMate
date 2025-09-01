
````markdown
# ✅ TaskMate

A simple yet powerful **Task Management Application** built with **MERN stack (MongoDB, Express, React, Node.js)**.  
This project helps users **add, delete, update, and manage tasks** while keeping track of their status (active/completed).

Deployed on **Vercel** (Frontend + Backend).
👉 Live Demo: [TaskMate on Vercel](https://task-mate-lac-one.vercel.app/) 

---

## 🚀 Features

- ➕ Add new tasks  
- ✅ Mark tasks as completed  
- ❌ Delete tasks  
- 🔄 Switch between **All / Active / Completed** tabs  
- 📱 Responsive UI with Bootstrap  
- ⚡ Fast and lightweight frontend using **React + Vite**  

---

## 🏗️ Tech Stack

**Frontend:** React (Vite), Bootstrap, Axios  
**Backend:** Node.js, Express, MongoDB (Mongoose)  
**Deployment:** Vercel (Full Stack)  

---

## 📂 Project Structure

```plaintext
TaskMate/
│
├── Server/                  # Backend (Node.js + Express + MongoDB)
├── TaskMateV1/              # Frontend (React + Vite)
│
├── assets/                  # All static assets for docs
│   ├── screenshots/         # App screenshots
│   │   ├── home.png
│   │   ├── active.png
│   │   ├── completed.png
│   │   └── add-task.png
│   │
│   ├── diagrams/            # UML, system design, flow diagrams
│   │   ├── usecase.png
│   │   ├── architecture.png
│   │   ├── sequence.png
│   │   └── erd.png
│   │
│   └── demo/                # Optional (video, gif demos)
│       ├── walkthrough.gif
│       └── demo.mp4
│
├── .env.example             # Example env file (without secrets)
├── README.md                # Documentation
````

---

## ⚙️ Environment Variables

Create a `.env` file inside `Server/` with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

For the frontend (`TaskMateV1/.env`):

```env
VITE_REACT_APP_BACKEND_BASE_URL=https://your-vercel-backend-url.vercel.app
```

---

## 🖥️ Installation & Setup

Clone the repo:

```bash
git clone https://github.com/AwaizSayed/TaskMate.git
cd TaskMate
```

### Backend Setup

```bash
cd Server
npm install
npm run dev
```

### Frontend Setup

```bash
cd TaskMateV1
npm install
npm run dev
```

The app should now be running on `http://localhost:5173` 🚀

---

## 📸 Screenshots

### Home Page

![Home Page](./assets/screenshots/home.png)

### Active Tasks

![Active Tasks](./assets/screenshots/active.png)

### Completed Tasks

![Completed Tasks](./assets/screenshots/completed.png)

### Add Task

![Add Task](./assets/screenshots/add-task.png)

---

## 🖼️ Diagrams

### Use Case Diagram

![Use Case Diagram](./assets/diagrams/usecase.png)

### System Architecture

![System Architecture](./assets/diagrams/architecture.png)

### Sequence Diagram

![Sequence Diagram](./assets/diagrams/sequence.png)

### Database ERD

![Database ERD](./assets/diagrams/erd.png)

---

## 📖 User Story

As a **user**, I want to:

* Add tasks I need to do
* Mark them as completed once done
* View pending vs completed tasks
* Delete tasks I no longer need

So that I can **organize my work efficiently**.

---

## ⚡ Challenges Faced

* Deploying both frontend and backend on Vercel with proper CORS handling
* Managing **state updates** without unnecessary page reloads
* Ensuring database connection stability with MongoDB Atlas
* Debugging **404 errors** on deployment

---

## 🚫 Limitations

* No user authentication (anyone can access tasks)
* Tasks are not user-specific (shared across all users in DB)
* Minimal UI (basic Bootstrap only)
* Error handling can be improved

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---