# Get All Tasks API

## Objective

The purpose of this API is to retrieve all task documents stored in the database.

This was the second API implemented in TeamFlow.

---

# Endpoint

```http
GET /api/tasks
```

---

# Purpose

Allows clients (frontend applications, Postman, mobile apps, etc.) to retrieve all tasks.

Example use cases:

* Display all tasks on dashboard
* Show project task list
* Load tasks for team members
* Generate reports

---

# Route Implementation

```js
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
```

---

# Request Flow

Client

↓

GET /api/tasks

↓

Express Route

↓

Task.find()

↓

MongoDB Atlas

↓

Documents Retrieved

↓

Response Returned

---

# Understanding Task.find()

```js
Task.find()
```

Purpose:

* Searches collection
* Retrieves matching documents
* Returns results as an array

Without any filter:

```js
Task.find()
```

returns all documents.

---

# Why An Array Is Returned

Even if only one task exists:

```json
[
  {
    "title": "Setup MongoDB Atlas"
  }
]
```

an array is still returned.

Reason:

Task.find() always returns a collection of results.

Possible outcomes:

```js
[]
```

No tasks found.

---

```js
[
  task1
]
```

One task found.

---

```js
[
  task1,
  task2,
  task3
]
```

Multiple tasks found.

---

# Why await Is Used

Database operations take time.

```js
await Task.find()
```

ensures the server waits until MongoDB returns the data.

---

# Response

Successful Response:

```http
200 OK
```

Example:

```json
[
  {
    "_id": "...",
    "title": "Setup MongoDB Atlas",
    "description": "Connect backend and verify connection",
    "status": "Todo",
    "priority": "Medium",
    "createdAt": "...",
    "updatedAt": "..."
  }
]
```

---

# Error Handling

If retrieval fails:

```http
500 Internal Server Error
```

is returned.

Example:

```json
{
  "message": "Error details"
}
```

---

# Testing

Tool Used:

```text
Postman
```

Method:

```http
GET
```

URL:

```text
http://localhost:5000/api/tasks
```

---

# Observations During Testing

A task document was successfully retrieved from MongoDB Atlas.

The response was returned as an array.

This confirmed that:

* Database connection was working
* Route was working
* Model was working
* Data retrieval was working

---

# Key Learnings

* GET is used for retrieving data.
* Task.find() returns an array.
* await waits for database operations.
* JSON responses are returned to the client.
* Status code 200 indicates successful retrieval.
* Collections can contain zero, one, or many documents.

---

# Status

Completed and tested successfully using Postman.
