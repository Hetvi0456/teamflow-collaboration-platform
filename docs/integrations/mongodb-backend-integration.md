# MongoDB Backend Integration Documentation

---

# Goal

Connect the Express backend server to MongoDB Atlas using Mongoose.

This step establishes communication between:
- backend server
- cloud database

---

# Step 1 — Create `db.js`

Path:

```text
backend/config/db.js
```

Purpose:
- isolate database connection logic
- keep server setup clean
- follow separation of concerns architecture

---

# Final `db.js`

```js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

---

# Important Concepts Learned

## async / await

Database connections are asynchronous because they involve network communication.

`async` allows asynchronous operations.

`await` pauses execution until MongoDB connection completes.

---

## try/catch

Used for safe error handling.

If database connection fails:
- error is logged
- application exits safely

---

## module.exports

Exports the function so it can be reused in other files.

---

# Step 2 — Connect Database Inside `server.js`

Imported database connection:

```js
const connectDB = require("./config/db");
```

Then executed:

```js
connectDB();
```

---

# Final `server.js`

```js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TeamFlow Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

# Understanding `server.js`

---

## express

```js
const express = require("express");
```

Imports Express framework.

Express is used to:
- create backend server
- define API routes
- handle requests and responses

---

## dotenv

```js
dotenv.config();
```

Loads environment variables from `.env`.

This allows secure handling of:
- database URLs
- secret keys
- API credentials

---

## connectDB()

```js
connectDB();
```

Establishes MongoDB connection before routes start running.

---

## app.use(cors())

Allows frontend and backend to communicate across different ports/domains.

Without CORS:
frontend requests may get blocked by browser security.

---

## app.use(express.json())

Allows backend to read JSON data from request body.

Required for:
- forms
- API requests
- authentication data

---

## Root Route

```js
app.get("/", (req, res) => {
  res.send("TeamFlow Backend Running");
});
```

Creates a test API endpoint.

Purpose:
- verify backend server works
- test API functionality

---

## app.listen()

Starts backend server on selected port.

---

# Backend Startup Flow

```text
1. Load environment variables
        ↓
2. Connect to MongoDB
        ↓
3. Create Express app
        ↓
4. Setup middleware
        ↓
5. Define routes
        ↓
6. Start server
```

---

# Error Faced

## MongoDB Atlas IP Whitelist Error

Error:

```text
Could not connect to any servers in your MongoDB Atlas cluster.
```

Cause:
- current IP address was not allowed by MongoDB Atlas network access settings.

---

# Fix Applied

Inside MongoDB Atlas:

```text
Security → Network Access → Add Current IP Address
```

Added current IP address to Atlas whitelist.

After waiting briefly and restarting server:
connection succeeded.

---

# Security Understanding

MongoDB Atlas protects databases using IP-based access control.

This prevents unauthorized devices from connecting.

During development/hackathon stage:
allowing broader access is acceptable.

However, in production:
- access should be restricted carefully
- secrets should never be exposed publicly

---

# Important Security Practices Learned

## `.env`

Sensitive data must stay inside `.env`.

Examples:
- MongoDB connection strings
- JWT secrets
- API keys

---

## `.gitignore`

`.env` and `node_modules` should never be uploaded to GitHub.

`.gitignore` prevents Git from tracking them.

---

# Final Result

Backend successfully connected to MongoDB Atlas.

Successful terminal output:

```text
MongoDB Connected
Server running on port 5000
```

---

# Architecture Understanding

Current backend architecture:

```text
Frontend
   ↓
Express Backend API
   ↓
MongoDB Atlas Database
```

MongoDB Compass is used to visually inspect the database.

---

# Key Takeaways

- learned asynchronous database connection
- learned environment variable usage
- learned backend initialization flow
- learned IP whitelist security
- learned separation of concerns
- learned modular backend architecture
- learned secure Git practices