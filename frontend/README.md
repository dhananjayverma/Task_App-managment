# ✨ Task Manager App (React Native & Node.js)

## 📌 Overview
A full-stack **Task Manager** application built with **React Native (Expo)** for the frontend and **Node.js with Express and MongoDB** for the backend. The app allows users to **sign up, log in, and manage tasks** using **JWT-based authentication**.

---

# 🚀 Features
## 📱 **Frontend (React Native with Expo)**
- **🔐 Authentication:**
  - ✅ **User signup** with name, email, and password
  - ✅ **User login** with email and password
  - ✅ **JWT token-based authentication** stored in AsyncStorage
- **📝 Task Management:**
  - ✅ **Fetch and display tasks**
  - ✅ **Pull-to-refresh functionality**
  - ✅ **Create, edit, delete tasks**
  - ✅ **View task details**
- **🚪 Logout:**
  - ✅ **Logout button clears stored token** and navigates to Login screen
- **⚙️ State Management:** **React Context API / Redux Toolkit**
- **📍 Navigation:** **React Navigation (Stack Navigator)**
- **🎨 UI Components:** **React Native Paper / NativeBase**

## 🛠 **Backend (Node.js, Express, MongoDB)**
- **🔑 Authentication (JWT-based)**
  - 📝 `POST /auth/signup` → **Register a new user**
  - 📝 `POST /auth/login` → **Authenticate user and return JWT**
- **📝 Task Management (Protected Routes - Requires JWT)**
  - 📝 `POST /tasks` → **Create a new task**
  - 📝 `GET /tasks` → **Get all tasks for the logged-in user**
  - 📝 `GET /tasks/:id` → **Get a specific task**
  - 📝 `PUT /tasks/:id` → **Update a task**
  - 📝 `DELETE /tasks/:id` → **Delete a task**

## 🎯 **Bonus Enhancements (Optional)**
- 🔄 **Implement password reset functionality**
- 🤩 **Use React Native Gesture Handler for smooth UI animations**

---

# 🏗 **Tech Stack**
## 📱 **Frontend**
- ⚛️ **React Native (Expo)**
- 📍 **React Navigation**
- 🔐 **AsyncStorage**
- 🎨 **React Native Paper / NativeBase**
- ⚡ **Redux Toolkit (optional)**

## 🛠 **Backend**
- 🟢 **Node.js**
- 🚀 **Express.js**
- 🗄️ **MongoDB & Mongoose**
- 🔑 **bcrypt.js (password hashing)**
- 🔒 **jsonwebtoken (JWT authentication)**
- 🌍 **CORS & Express JSON Middleware**

---

# 📂 **Project Structure**
```plaintext
Task-Manager-App/
│── frontend/       # React Native (Expo) App
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── context/
│   │   ├── navigation/
│   │   ├── utils/
│   ├── App.js
│   ├── package.json
│   ├── README.md
│── backend/        # Node.js API
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   ├── README.md
│── README.md       # Main Project Readme
```

---

# 🛠 **Setup Instructions**
## ⚙️ **Backend Setup**
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/task-manager-app.git
   cd task-manager-app/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

## 📱 **Frontend Setup**
1. Navigate to the frontend folder:
   ```sh
   cd task-manager-app/frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Expo development server:
   ```sh
   npx expo start
   ```

---

# 🚀 **Expo Development Setup**
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the app:
   ```sh
   npx expo start
   ```
3. Open the app in:
   - 📲 [Development Build](https://docs.expo.dev/develop/development-builds/introduction/)
   - 📱 [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - 🍏 [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - 🌍 [Expo Go](https://expo.dev/go)

---

# 📌 **API Documentation**
## 🔑 **Authentication Endpoints**
- 📝 `POST /auth/signup` → **Register a new user**
- 📝 `POST /auth/login` → **Authenticate user and return JWT**

## 📝 **Task Management Endpoints (Requires JWT)**
- 📝 `POST /tasks` → **Create a new task**
- 📝 `GET /tasks` → **Get all tasks for the logged-in user**
- 📝 `GET /tasks/:id` → **Get a specific task**
- 📝 `PUT /tasks/:id` → **Update a task**
- 📝 `DELETE /tasks/:id` → **Delete a task**

---

# 🚀 **Deployment**
## 🌍 **Backend Deployment**
- Deploy using **Render, Railway, or Vercel**
- Example: Deploy to Render:
  ```sh
  git push origin main
  ```

## 📲 **Frontend Deployment**
- Generate **Expo Go APK for testing**:
  ```sh
  expo build:android -t apk
  ```
- Share the **Expo Go APK link**

---

# 🤝 **Contributing**
1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature-branch`)
3. **Commit your changes** (`git commit -m 'Add new feature'`)
4. **Push to the branch** (`git push origin feature-branch`)
5. **Open a Pull Request**

---

# 📖 **Learn More**
- 📚 [**Expo Documentation**](https://docs.expo.dev/): Learn the fundamentals and advanced topics.
- 🛠 [**Expo GitHub**](https://github.com/expo/expo): Contribute to the open-source project.
- 💬 [**Expo Discord**](https://chat.expo.dev): Join the community for discussions and support.

---


---

# 📧 **Contact**
For any issues or suggestions, contact: [your.email@example.com](mailto:dhananjaykumarverma088@gmail.com)

