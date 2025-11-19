# 🎮 GameHub – A Modern Game Library

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-Auth-orange?logo=firebase)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38bdf8?logo=tailwindcss)
![Netlify](https://img.shields.io/badge/Hosted%20On-Netlify-00C7B7?logo=netlify)
![License](https://img.shields.io/badge/License-MIT-green)

**GameHub** is a modern, urban-themed **React + Firebase** game library web application.  
Users can browse indie games, view detailed information, and support game developers.  
It is fully responsive, animated, and built as a single-page application (SPA).

---

## 🌐 Live Website
🌐 **Live Site:** [GameHub Link](https://b12-assignment-09.netlify.app/)

---

## 🔗 GitHub Repository
🌐 **Client Code:** [GameHub Repo](https://github.com/zahidulislammahim/B12-Assignment-09)

---

## 🧠 Overview

GameHub allows users to:

- Browse popular and high-rated games  
- View detailed information for each game  
- Access protected game detail pages  
- Login/Register with Firebase or Google Authentication  
- Use the Forgot Password feature to reset passwords  
- Update profile information (Name + PhotoURL)  
- Subscribe to newsletters  
- Enjoy dynamic page titles  
- Experience smooth animations with Framer Motion / GSAP  
- Access a fully responsive layout (Mobile, Tablet, Desktop)

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Description |
|------------|---------|-------------|
| React | ^18 | Component-based UI |
| React Router | ^6 | Routing & Protected Routes |
| Tailwind CSS | ^3 | Styling & Responsive Design |
| Firebase | ^12 | Authentication & Hosting |
| Swiper/Slick Slider | Latest | Banner Slider |
| Framer Motion / GSAP | Latest | Animations |
| React Icons | Latest | Icons |
| Axios / Fetch | - | Data Fetching |

---

## ⚙️ Features

✅ Email & Password Authentication  
✅ Google Login  
✅ Firebase Protected Routes  
✅ Game Details Page (Private Route)  
✅ Password Validation (Uppercase, Lowercase, Min 6 characters)  
✅ Forgot Password → Redirects to Gmail  
✅ User Profile Update (Name + PhotoURL)  
✅ Dynamic Title per Route  
✅ 404 Not Found Page  
✅ Additional Custom Route  
✅ Urban-Vibrant UI Theme  
✅ Fully Responsive (Mobile/Tablet/Desktop)  
✅ Slider Banner on Homepage  
✅ Popular Games Sorted by Ratings  
✅ Newsletter Subscription Section  
✅ Environment Variables Configured  
✅ Minimum 10+ Meaningful GitHub Commits

---

## 📁 Folder Structure

```
B12-Assignment-09/
├── src/
│ ├── components/ # Navbar, Footer, Card, Slider
│ ├── pages/ # Home, Login, Register, GameDetails, Profile, 404
│ ├── routes/ # ProtectedRoute setup
│ ├── context/ # AuthProvider (Firebase Auth)
│ ├── assets/ # Images, icons
│ ├── data/ # games.json
│ ├── App.jsx
│ └── main.jsx
├── public/
└── package.json
```


## 🚀 Installation & Setup

### Step 1 — Clone Repository
```bash
git clone https://github.com/zahidulislammahim/B12-Assignment-09.git
cd B12-Assignment-09
```

### Step 2 — Install Dependencies
```
npm install
```

### Step 3 — Add Environment Variables
```
Create .env.local file:

VITE_apiKey=your_firebase_key
VITE_authDomain=your_firebase_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_bucket
VITE_messagingSenderId=your_sender
VITE_appId=your_app_id
```
### Step 4 — Run the Project
```
npm run dev
```

# 📊 JSON Game Data Structure
```
{
  "id": "1",
  "title": "Player Unknown Battleground: PUBG",
  "coverPhoto": "https://example.com/images/pubg.png",
  "category": "FPS",
  "downloadLink": "https://www.pubgmobile.com/en-US/home.shtml",
  "description": "PUBG Mobile is a fast-paced battle royale game where players fight for survival.",
  "ratings": "4.5",
  "developer": "Krafton"
}
```
# 🎨 UI & Theme

- Urban-themed, vibrant design
- Tailwind CSS based layout
- Smooth animations using Framer Motion / GSAP
- Fully responsive (Mobile, Tablet, Desktop)
- Popular Games Cards Section
- Newsletter Subscription Section
- Slider Banner on Homepage

# 🖼️ Screenshots
### 🏠 Homepage

### 🎮 Game Details

### 🔐 Login Page

## 📧 Contact
👤 Author: Zahidul Islam Mahim

📍 Location: Noakhali, Bangladesh

📩 Email: zahidul.ismail@example.com

🌐 Live Site: Community Portal
