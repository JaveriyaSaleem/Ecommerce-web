# 🛍️ Full Stack E-Commerce Web App (SHOPCO)

A fully responsive, animated, full-stack eCommerce website with seamless user experience and robust backend features. Built to scale, styled to slay!
---

## 💡 Features

### 👤 User Side:
- 🔐 **Authentication & Authorization** (JWT-based login/signup)
<!-- - 🌙 **Light/Dark Theme Toggle** (mood switch real quick) -->
- 🛒 **Product Browsing** by categories
- ➕ **Add to Cart** functionality
- 📦 **Order Placement**
- 🕰 **View Order History**
- 📝 **Edit User Profile & Info**
- 📧 **Email Confirmation** after order placement (coming soon)
- 🤖 **Customer Support Chatbot** (coming soon)

### 💻 Developer Side:
- 🧠 Built with **MERN Stack**
  - React (Frontend)
  - Node.js + Express (Backend)
  - MongoDB (Database)
- 🎨 Styled with **Tailwind CSS** and juicy **Animations**
- 📱 Fully **Responsive** across all screen sizes
- 🔄 RESTful API Integration
- 🔐 JWT **Token-based security**
- 💾 Persistent User Sessions
- ⚙️ Clean & Modular Codebase

---

## 🚀 Tech Stack

| Tech          | Usage                          |
|---------------|-------------------------------|
| `React`       | Frontend UI                   |
| `Tailwind CSS`| Styling & responsive design   |
| `Swiper.js`   | Slider Animation          |
| `Node.js`     | Backend logic & server        |
| `Express.js`  | API Routing                   |
| `MongoDB`     | Database                      |
| `Mongoose`    | Data Modeling                 |
| `JWT`         | Authentication                |

---

## 🔧 Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/JaveriyaSaleem/Ecommerce-web.git
cd Ecommerce Web

# 2. Install dependencies for frontend and backend
cd frontend && npm install
cd backend && npm install

# 3. Add your environment variables
# Example: .env (in /server)
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_super_secret_key

# 4. Start development server
cd frontend && npm run dev
cd backend && npm run dev
---
happy coding fellas!
