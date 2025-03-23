# To-Do App

🔗 **Live Link:** [https://todo-app-level1.netlify.app](https://todo-app-level1.netlify.app)

## 📌 Overview

The **To-Do App** is a **feature-rich task management application** that allows users to efficiently manage their daily tasks. Built using **React, Node.js, Express, and MongoDB**, this application provides a seamless and interactive experience.

## 🚀 Features

- **Task Management** - Users can **create, view, edit, and delete tasks**.
- **Due Dates** - Assign deadlines to tasks for better planning.
- **Modal View** - Click on a task to view details in a modal.
- **Real-Time Updates** - Instant updates with a **smooth UI**.
- **Responsive Design** - Built with **Tailwind CSS** for a modern and adaptive layout.

## 🛠️ Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Hosting**: Frontend deployed on **Netlify**, Backend deployed on **Render**

## 📂 Project Structure

```
todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskModal.jsx
│   ├── api/
│   │   ├── createTaskAPI.js
│   │   ├── fetchTasksAPI.js
│   ├── pages/
│   │   ├── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── .env
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/mohammedfaizan/todo-app.git
cd todo-app
```

### 2️⃣ Install Dependencies

```sh
yarn install  # or npm install
```

### 3️⃣ Create a `.env` File

```
VITE_BACKEND_BASE_URL=https://todo-backend.onrender.com/api/v1
```

### 4️⃣ Run the Development Server

```sh
yarn dev  # or npm run dev
```

### 5️⃣ Build for Production

```sh
yarn build  # or npm run build
```

## 🔥 API Endpoints

| Method   | Endpoint    | Description       |
| -------- | ----------- | ----------------- |
| `POST`   | `/task`     | Create a new task |
| `GET`    | `/tasks`    | Fetch all tasks   |
| `PATCH`  | `/task/:id` | Update a task     |
| `DELETE` | `/task/:id` | Delete a task     |

## 🌟 Future Improvements

- ✅ **Task Prioritization**
- ✅ **Recurring Tasks**
- ✅ **Push Notifications** for reminders
- ✅ **Dark Mode** toggle

## 📜 License

This project is **open-source** under the MIT License.

## 🤝 Contributing

Want to contribute? Feel free to **fork the repo**, create a branch, and submit a **pull request**.

---

Made with ❤️ by **Mohammed Faizan** 🚀
