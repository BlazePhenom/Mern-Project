# BookMarked - A MERN Stack Link Sharing App

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to sign up, log in, and share/manage their favorite bookmarks. It features a public feed of all bookmarks and a private, protected dashboard for each user to manage their own.

## 🚀 Live Demo Links

* **Live Application (Frontend):** `https://mern-project-bookmarked.netlify.app`
* **Live API (Backend):** `https://mern-project-mbbs.onrender.com/`

---

## Features

* **User Authentication:** Secure user registration and login using JWT (JSON Web Tokens) and bcrypt for password hashing.
* **Protected Routes:** User dashboard is a private route, accessible only to logged-in users.
* **Full CRUD Functionality:**
    * **Create:** Logged-in users can create new bookmarks (title, URL, description).
    * **Read:** Features a public homepage to view all bookmarks and a private dashboard to view *only* the user's own bookmarks.
    * **Delete:** Users can delete their own bookmarks.
* **Dynamic UI:** The navigation bar changes to show "Login/Signup" or "Dashboard/Logout" based on auth state.
* **Global State Management:** Uses React's Context API to manage authentication state across the entire application.

---

## Tech Stack

| Category | Technology |
| --- | --- |
| **Frontend** | React, React Router, Axios, Context API, Vite |
| **Backend** | Node.js, Express |
| **Database** | MongoDB (with Mongoose) |
| **Authentication** | JSON Web Token (JWT), bcryptjs |
| **Deployment** | Backend on Render, Frontend on Netlify/Vercel |

---

## How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/) (which includes npm) and [Git](https://git-scm.com/) installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/BlazePhenom/Mern-Project.git](https://github.com/BlazePhenom/Mern-Project.git)
    cd Mern-Project
    ```

2.  **Set up the Backend (`/server`):**
    ```bash
    # Navigate to the server folder
    cd server
    
    # Install dependencies
    npm install
    ```
    * Create a file named `.env` in the `/server` folder.
    * Add the following two variables, replacing the values with your own:
        ```env
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_super_secret_jwt_key
        ```
    * Start the server:
        ```bash
        npm start
        ```
    * The backend will be running on `http://localhost:5000`.

3.  **Set up the Frontend (`/client`):**
    * Open a new, separate terminal window.
    ```bash
    # Navigate to the client folder
    cd client
    
    # Install dependencies
    npm install
    
    # Start the client dev server
    npm run dev
    ```
    * The frontend will open and run on `http://localhost:5173`.