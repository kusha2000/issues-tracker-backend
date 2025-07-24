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

🔗 Project Link: https://github.com/yourusername/issue-tracker