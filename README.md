# BookMarked - A MERN Stack Link Sharing App

This is a full-stack MERN application for sharing and saving bookmarks. The complete code for both the frontend and backend is in this repository.

**Project Submission Repository:**
* [https://github.com/BlazePhenom/Mern-Project](https://github.com/BlazePhenom/Mern-Project)

**Note on Deployment:**
*Ran out of time to complete the free-tier cloud deployment on Render and Netlify. The application is fully functional and can be run locally using the instructions below.*

---

## Tech Stack

* **Frontend:** React (with Vite), React Router, Context API, Axios
* **Backend:** Node.js, Express
* **Database:** MongoDB (with Mongoose)
* **Authentication:** JWT (JSON Web Tokens) & bcrypt

---

## How to Run Locally

### Backend (`/server` folder)

1.  `cd server`
2.  Create a `.env` file and add your own `MONGO_URI` and `JWT_SECRET`.
3.  `npm install`
4.  `npm start` (Server will run on `http://localhost:5000`)

### Frontend (`/client` folder)

1.  `cd client`
2.  `npm install`
3.  `npm run dev` (Client will run on `http://localhost:5173`)