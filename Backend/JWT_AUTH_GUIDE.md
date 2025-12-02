# JWT Authentication Implementation Guide

## Overview
This project now uses JWT (JSON Web Token) authentication for secure user login and signup.

## Features Implemented

### Backend Changes

1. **Password Hashing with bcrypt**
   - Passwords are now hashed before saving to the database
   - Added `comparePassword` method to User model for secure password verification

2. **JWT Token Generation**
   - Tokens are generated upon successful signup/login
   - Tokens expire in 7 days
   - Token includes user ID as payload

3. **Auth Middleware** (`middleware/authMiddleware.js`)
   - Protects routes by verifying JWT tokens
   - Extracts user information from token and attaches to request

4. **Updated Auth Controller**
   - `/api/auth/signup` - Creates user and returns JWT token
   - `/api/auth/login` - Validates credentials and returns JWT token

### Frontend Changes

1. **Enhanced Auth Utilities** (`utils/auth.js`)
   - `setToken()` - Store JWT token
   - `getToken()` - Retrieve JWT token
   - `setUser()` - Store user data
   - `getUser()` - Retrieve user data
   - `isAuthenticated()` - Check if user is logged in
   - `logout()` - Clear all auth data

2. **API Utility Updates** (`utils/api.js`)
   - Automatically includes JWT token in Authorization header for all API requests
   - Format: `Authorization: Bearer <token>`

3. **Updated Components**
   - AuthModal now stores token and user data on successful login/signup
   - Header uses `isAuthenticated()` utility
   - ProtectedRoute uses JWT token for route protection
   - All pages use `getUser()` utility

## Environment Variables

Add to `.env` file:
```
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345
```

## How to Use Protected Routes

To protect a route, import and use the `protect` middleware:

```javascript
import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getExpenses, addExpense } from '../controllers/expenseController.js';

const router = express.Router();

// Protected routes - require JWT token
router.get('/', protect, getExpenses);
router.post('/', protect, addExpense);

export default router;
```

## API Response Format

### Signup Success
```json
{
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_id",
    "name": "User Name",
    "email": "user@example.com"
  }
}
```

### Login Success
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_id",
    "name": "User Name",
    "email": "user@example.com"
  }
}
```

## Frontend Usage

### Making Authenticated API Calls

The API utility automatically includes the token:

```javascript
import { api } from '../utils/api';

// Token is automatically added to headers
const response = await api.expenses.getAll(userId);
```

### Checking Authentication

```javascript
import { isAuthenticated } from '../utils/auth';

if (isAuthenticated()) {
  // User is logged in
}
```

### Getting User Data

```javascript
import { getUser } from '../utils/auth';

const user = getUser();
const userId = user?.id;
```

## Testing the Implementation

1. **Signup a New User**
   ```bash
   curl -X POST http://localhost:3001/api/auth/signup \
     -H "Content-Type: application/json" \
     -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
   ```

2. **Login**
   ```bash
   curl -X POST http://localhost:3001/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","password":"password123"}'
   ```

3. **Access Protected Route**
   ```bash
   curl http://localhost:3001/api/expenses \
     -H "Authorization: Bearer YOUR_TOKEN_HERE"
   ```

## Security Notes

1. **Change JWT_SECRET in Production** - Use a strong, random secret key
2. **Use HTTPS** - Always use HTTPS in production to protect tokens in transit
3. **Token Expiration** - Tokens expire after 7 days by default
4. **Password Requirements** - Minimum 6 characters (can be increased)
5. **Existing User Data** - Users with plain text passwords will need to re-register or you'll need to run a migration

## Migration for Existing Users

If you have existing users with plain text passwords, they will need to:
1. Create a new account with the same email (after deleting the old one), OR
2. Run a migration script to hash existing passwords

## Next Steps

To fully implement authentication:
1. Add the `protect` middleware to all routes that require authentication
2. Update controllers to use `req.user` instead of `userId` from query parameters
3. Consider implementing refresh tokens for better security
4. Add password reset functionality
5. Implement email verification
