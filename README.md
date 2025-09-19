# Task Manager API

A simple REST API built with Express.js and MongoDB for managing tasks

# Features

- Create tasks with title, description, and status
- Get all tasks
- Get a task by ID
- Delete a task
- Status values: `pending`, `in-progress`, `completed`
- Input validation using Express Validator
- Centralized error handling

# Repository

You can find the source code here: [https://github.com/Kishanth12/task-api-backend.git]

# Installation Setup

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file with MONGODB_URI and PORT
   example
   PORT=5001
   MONGODB_URI=<your-mongodb-uri>
4. Run `npm run dev`

# Postman Collection

Import `task-api-backend.postman_collection.json` in Postman to test all API endpoints easily.
