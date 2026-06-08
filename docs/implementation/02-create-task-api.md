# Backend Server Setup

## Purpose

The purpose of this setup was to create the foundation of the TeamFlow backend application.

Before implementing features such as tasks, authentication, file uploads, and AI integrations, a backend server was required to:

* Receive requests from the frontend
* Process business logic
* Communicate with the database
* Return responses to the client

---

# Technologies Used

## Node.js

JavaScript runtime used to execute backend code.

---

## Express.js

Backend framework used to:

* Create routes
* Handle requests
* Send responses
* Configure middleware

---

## MongoDB Atlas

Cloud-hosted database used during the initial backend learning phase.

---

## Mongoose

ODM (Object Data Modeling) library used to interact with MongoDB.

---

## dotenv

Used to load environment variables from a `.env` file.

---

## cors

Used to allow frontend applications running on different origins to communicate with the backend.

---

## nodemon

Development tool that automatically restarts the server when code changes.

---

# Project Structure

```text
backend/
│
├── config/
│   └── db.js
│
├── models/
│
├── routes/
│
├── .env
│
├── package.json
│
└── server.js
```

---

# Environment Variables

File:

```text
backend/.env
```

Example:

```env
PORT=5000

MONGO_URI=<mongodb-connection-string>

JWT_SECRET=<secret>
```

Environment variables are used to keep sensitive information out of source code.

---

# Database Connection

Database connection logic was separated into:

```text
backend/config/db.js
```

Responsibilities:

* Connect to MongoDB Atlas
* Handle connection failures
* Export reusable connection function

This follows the principle of Separation of Concerns.

---

# Server Configuration

File:

```text
backend/server.js
```

Responsibilities:

* Load environment variables
* Connect database
* Configure middleware
* Register routes
* Start server

---

# Middleware Configured

## CORS

```js
app.use(cors());
```

Allows frontend applications to communicate with the backend.

---

## JSON Parser

```js
app.use(express.json());
```

Converts incoming JSON request bodies into JavaScript objects.

Example:

Incoming JSON:

```json
{
  "title": "Setup MongoDB"
}
```

Becomes:

```js
req.body.title
```

inside route handlers.

---

# Health Check Route

```js
app.get("/", (req, res) => {
  res.send("TeamFlow Backend Running");
});
```

Purpose:

* Verify server is running
* Verify routing is working
* Quick connectivity test

---

# Running The Server

Development mode:

```bash
npm run dev
```

Expected output:

```text
connectDB function started

MongoDB Connected

Server running on port 5000
```

---

# Key Learnings

During backend setup the following concepts were learned:

* Express Server
* Middleware
* Environment Variables
* MongoDB Atlas
* Mongoose
* Separation of Concerns
* Request / Response lifecycle
* Project structure organization

---

# Status

Completed

Date: Initial Backend Learning Phase
