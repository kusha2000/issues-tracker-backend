# Issue Tracker System

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue) ![JWT Auth](https://img.shields.io/badge/JWT-Auth-orange) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4)

A full-featured issue tracking system built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, CRUD operations, and advanced filtering capabilities.

## ✨ Features

- 🔐 JWT Authentication (Register/Login/Logout)
- 👥 Role-Based Access Control (User/Admin)
- 📝 Issue Management (CRUD Operations)
- 🏷️ Issue Status Tracking (Open, In Progress, Testing, Resolved, Closed)
- ⚠️ Priority Levels (Low, Medium, High, Critical)
- 🚨 Severity Levels (Minor, Moderate, Major, Blocker)
- 🔍 Advanced Filtering & Search
- 📱 Fully Responsive Design
- 🎨 Modern UI with Tailwind CSS

## 🛠️ Technologies

**Frontend:**
- React.js
- Vite.js
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB 
- JSON Web Tokens (JWT)
- Bcrypt.js

## 🚀 Getting Started

### Prerequisites

- Node.js (v22.x recommended)
- npm (comes with Node.js)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/issue-tracker.git
   cd issue-tracker
   ```

2. **Set up backend:**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your credentials
   ```

3. **Set up frontend:**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Edit .env with your API URL
   ```

### Running Locally

```bash
# Start backend
cd backend
npm run dev

# In new terminal, start frontend
cd ../frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Configuration

**Backend .env:**
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
JWT_EXPIRE=30d
PORT=5000
NODE_ENV=development
```

**Frontend .env:**
```env
VITE_API_URL=http://localhost:5000/api
```

## 📖 Usage

### User Accounts
- **Register:** Navigate to `/register`
- **Login:** Navigate to `/login`
- **Admin Access:** Admins can be created by setting `role: "admin"` in the database

### Managing Issues
- **Create:** Click "New Issue" button
- **View:** Click on issue title
- **Edit:** Click "Edit" button (creator/admin only)
- **Delete:** Click "Delete" button (creator/admin only)

### Filters
- **Status:** Open, In Progress, Testing, Resolved, Closed
- **Priority:** Low, Medium, High, Critical
- **Severity:** Minor, Moderate, Major, Blocker
- **Search:** Filter by title or description text
- **Assignee:** Filter by team member

## 📚 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user profile |
| GET | `/api/issues` | Get all issues |
| POST | `/api/issues` | Create new issue |
| GET | `/api/issues/:id` | Get single issue |
| PUT | `/api/issues/:id` | Update issue |
| DELETE | `/api/issues/:id` | Delete issue |
| GET | `/api/users` | Get all users (admin only) |

## 🧩 Dependencies

### Backend
```json
{
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-async-handler": "^1.2.0",
    "helmet": "^7.0.0",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.0.3",
    "morgan": "^1.10.0"
  }
}
```

### Frontend
```json
{
  "dependencies": {
    "axios": "^1.3.4",
    "formik": "^2.2.9",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.8.0",
    "react-router-dom": "^6.8.1",
    "react-toastify": "^9.1.2",
    "yup": "^1.0.0"
  }
}
```



## 📧 Contact

👤 Kushan Andarawewa

📧 kushanandarawewa1@gmail.com

📱 0714249784

<h2>This is the Full Demo of the project</h2><br><br>


https://github.com/user-attachments/assets/4fb5b335-2aaa-493e-a89f-6efd58245e6b



<h2>This is the Screenshots of the system</h2><br><br>

<img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/562cd90a-08ba-4fb7-a5fe-fd4b864ba526" />
<img width="1920" height="1374" alt="2" src="https://github.com/user-attachments/assets/ec4845bc-52ad-4ed9-89dd-7a36815e7690" />
<img width="1920" height="1080" alt="3" src="https://github.com/user-attachments/assets/734bde2e-9392-4136-b24d-13504066b133" />
<img width="1920" height="1080" alt="4" src="https://github.com/user-attachments/assets/5fed69d0-aee0-4315-ad10-ed99b33a34cf" />
<img width="1920" height="1553" alt="5" src="https://github.com/user-attachments/assets/4fa649c7-9270-4f26-ac14-e1d23a897c3c" />
<img width="1920" height="1530" alt="6" src="https://github.com/user-attachments/assets/cf329491-1335-43f5-8042-0f75b4347f3e" />
<img width="1920" height="1450" alt="7" src="https://github.com/user-attachments/assets/f3036768-5105-433f-a574-1a36ba7bc76d" />
<img width="1920" height="1423" alt="8" src="https://github.com/user-attachments/assets/abb884a7-f8eb-48ab-be95-ff413a4be7f8" />
