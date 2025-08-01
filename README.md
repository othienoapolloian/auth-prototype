# Auth Prototype Web App

## Project Overview

This is a minimalist full-stack web app prototype built with:

- Frontend: Plain HTML, CSS, and vanilla JavaScript (no React, no Tailwind)
- Backend: Node.js with Express.js framework
- Database: MongoDB Atlas via Mongoose ODM
- Features:  
  - User registration with hashed passwords (bcrypt)  
  - User login with password verification  
  - Simple routing and static file serving  
  - Debug route to list all registered users (for dev purposes)

The goal: build a simple, working auth flow prototype to understand the full-stack integration and MongoDB Atlas setup.

---

## Setup & Installation

### 1. Clone or Create Project Directory

bash
mkdir auth-prototype
cd auth-prototype 

#### 2. Initialize npm and install dependecies
npm init -y
npm install express mongoose dotenv bcrypt

express for 
mongoose for
dotenv for 
bcrypt for
# Dependency Packages and Their Uses

1. express  
   - Web framework for Node.js  
   - Handles routing, middleware, and HTTP requests/responses  
   - Enables serving static files and JSON parsing

2. mongoose  
   - Object Data Modeling (ODM) library for MongoDB and Node.js  
   - Provides schema-based modeling and easy interaction with MongoDB  
   - Simplifies querying and managing data in MongoDB

3. dotenv  
   - Loads environment variables from a `.env` file into `process.env`  
   - Keeps sensitive info like database URIs and API keys out of source code  
   - Helps configure app behavior per environment (dev, prod, etc.)

4. bcrypt  
   - Library to hash passwords securely  
   - Ensures user passwords are stored encrypted, preventing plain-text exposure  
   - Provides functions for hashing and comparing hashed passwords for authentication


#### 3. Create project structure

project-root/
├── app.js
├── .env
├── package.json
├── routes/
│   └── auth.js
├── models/
│   └── User.js
├── views/
│   ├── index.html
│   ├── login.html
│   └── register.html
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js

Create the files exactly as per the codebase, placing routes and models accordingly.

#### 4. MongoDB Atlas Setup
Go to https://cloud.mongodb.com

Register / Login

Create a Free Shared Cluster

Create a Database User with username and password

Add an IP Whitelist (can use 0.0.0.0/0 to allow all IPs during dev)

In Clusters → Connect → Connect your application:
Copy the connection string and modify it by adding your database name after .net/ (e.g. myAuthDB):

bash
Copy
Edit
mongodb+srv://<username>:<password>@cluster0.mongodb.net/myAuthDB?retryWrites=true&w=majority
Put this full connection string into your .env file:

env
Copy
Edit
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myAuthDB?retryWrites=true&w=majority
#### 5. Run the App
bash
Copy
Edit
node app.js
Go to:

http://localhost:3000/register → create an account

http://localhost:3000/login → log in

http://localhost:3000/auth/users → view registered users (dev debug route)

Challenges & How We Overcame Them
Challenge	Solution
MongoDB URI missing DB name	Added database name to URI to avoid connecting to sample datasets
app.use not a function error	Fixed missing const app = express() line in app.js
Cannot find module .routes/auth	Corrected require path to ./routes/auth with the proper relative path
404 errors on localhost	Clarified that backend runs on port 3000, and frontend files are served through Express routes — don’t use Live Server for backend
Hidden real errors during registration	Added console error logs and sent error message in response for easier debugging
Checking registered users	Created a simple /auth/users JSON route and demonstrated viewing users in MongoDB Atlas UI

Next Steps (Optional Enhancements)
Implement session or JWT authentication

Add logout and protected routes

Build frontend user dashboard to list users

Deploy backend and frontend to cloud providers

Add role-based access (admin/user)

#### 6.Summary
This project is a lightweight but complete prototype demonstrating:

Full-stack auth with secure password hashing

Integration of Node.js backend with MongoDB Atlas cloud database

Simple, no-framework frontend forms

How to troubleshoot common issues with environment config, routing, and MongoDB connections
