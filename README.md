# 📝 FULLSTACK_TODO_APP

**FULLSTACK_TODO_APP** is a full-stack To-Do application developed using **FastAPI**, **React.js**, **SQLite**, and **Tailwind CSS**. It features user authentication, task CRUD operations, filtering, and drag-and-drop task ordering — providing a seamless user experience with a clean modern UI.

---

## 📸 Video && Screenshots

▶️ [Watch Demo Video](https://www.youtube.com/watch?v=dO4SlTO9Qtk)


> ![](https://github.com/Akash-code-0-1/TODO-App-with-React-Tailwindcss-FastAPI-SQLite/blob/main/frontend/src/project_output/1.PNG) 
> ![](https://github.com/Akash-code-0-1/TODO-App-with-React-Tailwindcss-FastAPI-SQLite/blob/main/frontend/src/project_output/2.PNG)  
> ![](https://github.com/Akash-code-0-1/TODO-App-with-React-Tailwindcss-FastAPI-SQLite/blob/main/frontend/src/project_output/3.PNG) 
> ![](https://github.com/Akash-code-0-1/TODO-App-with-React-Tailwindcss-FastAPI-SQLite/blob/main/frontend/src/project_output/4.PNG)  
> ![](https://github.com/Akash-code-0-1/TODO-App-with-React-Tailwindcss-FastAPI-SQLite/blob/main/frontend/src/project_output/5.PNG) 
> ![](https://github.com/Akash-code-0-1/TODO-App-with-React-Tailwindcss-FastAPI-SQLite/blob/main/frontend/src/project_output/6.PNG)  
> ![](https://github.com/Akash-code-0-1/TODO-App-with-React-Tailwindcss-FastAPI-SQLite/blob/main/frontend/src/project_output/7.PNG) 
> ![](https://github.com/Akash-code-0-1/TODO-App-with-React-Tailwindcss-FastAPI-SQLite/blob/main/frontend/src/project_output/8.PNG)  
> ![](https://github.com/Akash-code-0-1/TODO-App-with-React-Tailwindcss-FastAPI-SQLite/blob/main/frontend/src/project_output/9.PNG) 
> ![](https://github.com/Akash-code-0-1/TODO-App-with-React-Tailwindcss-FastAPI-SQLite/blob/main/frontend/src/project_output/10.PNG)  
> ![](https://github.com/Akash-code-0-1/TODO-App-with-React-Tailwindcss-FastAPI-SQLite/blob/main/frontend/src/project_output/11.PNG) 
> ![](https://github.com/Akash-code-0-1/TODO-App-with-React-Tailwindcss-FastAPI-SQLite/blob/main/frontend/src/project_output/12.PNG)  


---

## 📂 Project Structure

```
TODO-PROJECT/
├── backend/
│   ├── app/
│   │   ├── routers/
│   │   │   ├── __init__.py
│   │   │   ├── auth.py
│   │   │   ├── tasks.py
│   │   │   └── user.py
│   │   ├── crud.py
│   │   ├── database.py
│   │   ├── dependencies.py
│   │   ├── main.py
│   │   ├── models.py
│   │   └── schemas.py
│   ├── todo.db
│   ├── requirements.txt
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── LoginRegister.jsx
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── axios.js
│   ├── public/
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── .env
└── README.md
```

---

## 🚀 Features

✅ **User Authentication** – Register/Login using JWT  
✅ **Task Management** – Create, read, update, delete tasks  
✅ **Task Filtering** – Filter by completed, incomplete, upcoming  
✅ **Drag-and-Drop** – Reorder tasks via intuitive drag interface  
✅ **Secure API** – RESTful FastAPI with JWT authentication  
✅ **Beautiful UI** – Tailwind CSS-powered modern frontend  

---

## 🛠️ Tech Stack

**Frontend**  
- React.js  
- Tailwind CSS  
- Axios  

**Backend**  
- FastAPI  
- SQLite  
- JWT Authentication  
- Pydantic

---

## 💽 Installation & Setup

### 📦 Backend Setup

```bash
# Navigate to backend
cd backend

# Create virtual environment (optional)
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Run FastAPI server
uvicorn app.main:app --reload
```

### 🌐 Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install node modules
npm install

# Start React app
npm run dev
```

Now, visit `http://localhost:5173` for frontend and `http://localhost:8000/docs` for the FastAPI Swagger UI.

---

## 🔐 Authentication

- Register and Login forms handled with **JWT tokens**
- All task routes are **protected**
- Only authenticated users can access and manage **their own tasks**

---

## ✅ Functionality

| Feature                  | Status   |
|--------------------------|----------|
| Register/Login           | ✅        |
| Create Task              | ✅        |
| Edit/Delete Task         | ✅        |
| Filter Tasks             | ✅        |
| Upcoming Tasks Filter    | ✅        |
| Task Status Toggle       | ✅        |
| Drag-and-Drop Ordering   | ✅        |

---

## 📋 API Documentation



---

## 🧪 Sample User Flow

1. Register or Login with your email
2. Create a task with title, description, and due date
3. View task list with filters and drag-drop reorder
4. Edit/delete/update task status
5. Logout anytime

---



## 📝 License

This project is licensed under the **MIT License** — use it freely.

---

## 💌 Contact

👨‍💻 **Developer:** MD. Tanvir Ahmed Akash  
📧 **Email:** tanvir0ah0akash@gmail.com  
🌐 **GitHub:** [Akash-code-0-1](https://github.com/Akash-code-0-1)  
💼 **LinkedIn:** [MD. Tanvir Ahmed Akash](https://www.linkedin.com/in/md-tanvir-ahmed-akash-8ba50b2b9/)  

---

🌟 **If this project helped you, consider giving it a ⭐ on GitHub!** 🙌