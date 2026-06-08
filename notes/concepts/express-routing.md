# Express Routing

## What Is A Route?

A route defines what code should run when a specific request reaches the server.

Example:

```js
router.get("/", (req, res) => {
  res.send("Hello");
});
```

---

# Route Structure

```js
router.get("/", callback);
```

Components:

1. HTTP Method
2. URL Path
3. Callback Function

---

# Request And Response

Request:

```js
req
```

Contains information sent by the client.

Examples:

```js
req.body

req.params

req.query
```

---

Response:

```js
res
```

Used to send information back to the client.

Examples:

```js
res.send()

res.json()

res.status()
```

---

# How Express Chooses A Route

Express does NOT look only at the URL.

Express looks at:

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

Example:

```http
POST /api/tasks
```

↓

```js
router.post("/")
```

---

# Why Multiple Routes Can Share The Same URL

Example:

```js
router.get("/users")

router.post("/users")

router.delete("/users")
```

Same URL:

```text
/users
```

Different HTTP Methods.

Express uses the method to determine which route should run.

---

# TeamFlow Example

```http
GET /api/tasks
```

Get all tasks.

---

```http
POST /api/tasks
```

Create a task.

---

Later:

```http
PUT /api/tasks/:id
```

Update a task.

---

```http
DELETE /api/tasks/:id
```

Delete a task.  