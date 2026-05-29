# MongoDB Atlas IP Whitelist Error

## Error

Could not connect to MongoDB Atlas cluster.

---

## Cause

Current IP address was not allowed in Atlas Network Access settings.

---

## Fix

MongoDB Atlas → Security → Network Access → Add Current IP Address

---

## Lesson Learned

Backend issues are not always code issues.

Always read the full error message before changing code.

Check in this order:

1. Credentials
2. Network Access
3. Environment Variables
4. Configuration
5. Code

---

## Result

MongoDB connection succeeded after adding the current IP address to Atlas Network Access settings.

Terminal output:

```text
connectDB function started
Server running on port 5000
MongoDB Connected
```