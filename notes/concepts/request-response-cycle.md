# Request Response Cycle

## Big Picture

Every backend application follows the same basic flow:

Client
↓
Request
↓
Route
↓
Business Logic
↓
Database
↓
Response
↓
Client

---

# What Is A Client?

A client is anything that sends requests to the server.

Examples:

- Browser
- React App
- React Native App
- Postman
- Mobile App

For TeamFlow:

```text
Postman
```

was our first client.

---

# What Is A Request?

A request is information sent from a client to the server.

Examples:

```http
GET /api/tasks
```

```http
POST /api/tasks
```

A request can contain:

- Method
- URL
- Headers
- Body
- Query Parameters

---

# What Is A Route?

A route tells Express what code should run when a request arrives.

Example:

```js
router.get("/", async (req, res) => {
  ...
});
```

Express chooses a route using:

METHOD + URL

Example:

```http
GET /api/tasks
```

↓

```js
router.get("/")
```

---

# What Is Business Logic?

Business logic is the work performed by the server.

Examples:

- Creating tasks
- Retrieving tasks
- Validating data
- Authenticating users
- Uploading files

Example:

```js
const tasks = await Task.find();
```

The server is performing work before responding.

---

# What Is The Database Layer?

The database stores application data.

In TeamFlow Phase 1:

```text
MongoDB Atlas
```

was the database.

Examples:

```js
Task.create()
```

```js
Task.find()
```

Both interact with MongoDB.

---

# What Is A Response?

A response is information sent back to the client.

Example:

```js
res.status(200).json(tasks);
```

The client receives the data and displays it.

---

# TeamFlow Example: Create Task

Postman

↓

POST /api/tasks

↓

router.post()

↓

Task.create(req.body)

↓

MongoDB Atlas

↓

Task Saved

↓

201 Created

↓

JSON Returned

---

# TeamFlow Example: Get Tasks

Postman

↓

GET /api/tasks

↓

router.get()

↓

Task.find()

↓

MongoDB Atlas

↓

Tasks Retrieved

↓

200 OK

↓

JSON Returned

---

# Request Object (req)

Contains information sent by the client.

Examples:

```js
req.body
```

Data sent in request body.

---

```js
req.params
```

Values from URL parameters.

---

```js
req.query
```

Values from query strings.

---

# Response Object (res)

Used to send data back to the client.

Examples:

```js
res.send()
```

Send text.

---

```js
res.json()
```

Send JSON.

---

```js
res.status()
```

Set HTTP status code.

---

# Key Learning

The backend acts as a middle layer between clients and databases.

Client
↓
Backend
↓
Database

The backend receives requests, performs work, communicates with the database, and returns responses.