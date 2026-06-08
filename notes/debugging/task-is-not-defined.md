# Debugging: Task Is Not Defined

## Error

While testing the Create Task API, the following error was returned:

```json
{
  "message": "Task is not defined"
}
```

---

# Cause

The model was imported incorrectly.

Example:

```js
const task = require("../models/Task");
```

Later in the code:

```js
Task.create(...)
```

was used.

JavaScript searched for:

```js
Task
```

but only:

```js
task
```

had been declared.

---

# Why The Error Occurred

JavaScript is case-sensitive.

These are different variables:

```js
task
```

and

```js
Task
```

Because:

```js
Task
```

did not exist,

Node.js threw:

```text
Task is not defined
```

---

# Fix

Use:

```js
const Task = require("../models/Task");
```

Then:

```js
const task = await Task.create(req.body);
```

---

# Learning

Recommended convention:

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

This convention makes it immediately clear:

* Task = Model
* task = Document

---

# Lesson Learned

When debugging:

1. Read the exact error message.
2. Identify the variable causing the error.
3. Verify spelling and capitalization.
4. Remember that JavaScript is case-sensitive.

---

# Status

Resolved successfully.
