# HTTP Methods And CRUD

## What Is CRUD?

CRUD stands for:

Create
Read
Update
Delete

Most applications are built around these four operations.

Examples:

- Create a task
- Read tasks
- Update a task
- Delete a task

---

# Create

Purpose:

Create new data.

HTTP Method:

```http
POST
```

Example:

```http
POST /api/tasks
```

TeamFlow Example:

Create a new task.

---

# Read

Purpose:

Retrieve existing data.

HTTP Method:

```http
GET
```

Example:

```http
GET /api/tasks
```

TeamFlow Example:

Retrieve all tasks.

---

# Update

Purpose:

Modify existing data.

HTTP Method:

```http
PUT
```

Example:

```http
PUT /api/tasks/:id
```

TeamFlow Example:

- Change task status
- Change task title
- Assign task to another member

---

# Delete

Purpose:

Remove existing data.

HTTP Method:

```http
DELETE
```

Example:

```http
DELETE /api/tasks/:id
```

TeamFlow Example:

Delete a task.

---

# CRUD Mapping

| Operation | HTTP Method |
|-----------|------------|
| Create | POST |
| Read | GET |
| Update | PUT |
| Delete | DELETE |

---

# TeamFlow Progress

Completed:

- POST /api/tasks
- GET /api/tasks

Not Yet Implemented:

- PUT /api/tasks/:id
- DELETE /api/tasks/:id

---

# Key Learning

HTTP methods tell the server what action the client wants to perform.

The same URL can have multiple routes because Express looks at:

METHOD + URL

Examples:

```http
GET /api/tasks
```

and

```http
POST /api/tasks
```

use the same URL but perform different actions.