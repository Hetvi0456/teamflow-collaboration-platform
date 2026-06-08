# Mongoose Models And Documents

## Big Picture

Node.js
↓
Express
↓
Mongoose
↓
MongoDB

Mongoose acts as a bridge between Node.js and MongoDB.

---

# Relationship Between Schema, Model, Collection And Document

Schema
↓
Model
↓
Collection
↓
Document

---

# Schema

A schema is a blueprint.

It defines:

- Fields
- Data types
- Default values
- Validation rules

Example:

```js
const taskSchema = new mongoose.Schema({
  title: String,
  description: String
});
```

A schema does NOT create anything in MongoDB.

It only describes what documents should look like.

---

# Model

A model is created from a schema.

Example:

```js
const Task = mongoose.model("Task", taskSchema);
```

Think:

Model = Manager Of Collection

The model provides methods like:

```js
Task.create()

Task.find()

Task.findById()

Task.findByIdAndUpdate()

Task.findByIdAndDelete()
```

Without a model we cannot interact with MongoDB.

---

# Collection

Collection = Group Of Documents

Example:

```text
tasks
```

Mongoose automatically converts:

```text
Task
↓
tasks
```

Model names are singular.

Collection names become plural.

---

# Document

Document = Actual Data Record

Example:

```json
{
  "title": "Setup MongoDB Atlas",
  "description": "Connect backend"
}
```

This is one document.

---

# TeamFlow Example

Database:

```text
test
```

↓

Collection:

```text
tasks
```

↓

Document:

```json
{
  "title": "Setup MongoDB Atlas"
}
```

---

# Automatic Fields

MongoDB automatically creates:

```js
_id
```

Every document must have a unique identifier.

---

# Automatic Fields From Mongoose

When:

```js
timestamps: true
```

is enabled,

Mongoose automatically creates:

```js
createdAt

updatedAt
```

Example:

```json
{
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

# Default Values

Example:

```js
status: {
  type: String,
  default: "Todo"
}
```

If user does not provide status:

Mongoose automatically inserts:

```js
status: "Todo"
```

---

# Naming Convention

Model:

```js
Task
```

Document:

```js
task
```

Example:

```js
const task = await Task.create(req.body);
```

Task = Model

task = Document

This avoids confusion.