# Todo List App

A simple Todo List application built for a technical test using Express and TypeScript.

## Project Overview and Functionality

This project is a backend application for managing a todo list. It uses Express.js as the web framework, TypeScript for type-checking, and Sequelize as the ORM for interacting with a PostgreSQL database. The application provides endpoints to perform CRUD operations on todo items.

## Setting Up and Running the Project Locally

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
```bash
git clone https://github.com/Marc1an4/todo-list-app.git
```

2. **Navigate to the project directory:**
```bash
cd todo-list-app/backend
```

3. **Open the project in your code editor:**
```bash
code .
```

4. **Install dependencies:**
```bash
npm install
```

5. **Create a .env file in the root directory (backend/) and set environment variables**
```bash
DB_USER='your_user | postgres'
DB_PASSWORD='your_password'
DB_HOST='localhost'
DB_NAME='todo_app'
DB_PORT='your_port | 8080'
```

6. **Create the PostgreSQL database**
```bash
CREATE DATABASE todo_app;
```

7. **Ensure your PostgreSQL database server is running.**

8. **Start the Express server**
```bash
npm run dev
```

# API Endpoints Documentation
The API endpoints for this application include:
- `GET /api/todo`: Fetch all todo items.
- `GET /api/todo/:id`: Fetch a todo item by ID.
- `POST /api/todo`: Create a new todo item.
- `PUT /api/todo/:id`: Update a todo item by ID.
- `DELETE /api/todo/:id`: Delete a todo item by ID.

# Additional Information
- Make sure to replace placeholders (your_user, your_password, your_port) in the .env file with your actual database credentials and configurations.
- The express server runs on port 3000 by default unless overridden by the PORT environment variable.
- The application uses Sequelize with PostgreSQL as the database.
- Error handling and validation are implemented to enhance code robustness and security.
