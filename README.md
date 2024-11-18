# Docket Backend

Docket Backend is a robust RESTful API built with **Node.js** and **Express.js**, designed to support secure and
efficient note management. This backend service handles user authentication with **JSON Web Tokens (JWT)** for secure
login and registration, and utilizes **MongoDB** for reliable data storage. The API provides full CRUD functionalities
for notes while maintaining data integrity and security.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Endpoints](#endpoints)
    - [Authentication](#authentication)
    - [Users](#users)
    - [Notes](#notes)
- [Project Links](#project-links)

## Features

- **User Authentication**: Secure user sign-up, login, and logout functionalities powered by JWT, ensuring secure
  session management.
- **Create Notes**: Allows users to add new notes with titles and content, stored securely in MongoDB.
- **Read Notes**: Retrieve a list of all notes or access individual notes with detailed data.
- **Update Notes**: Enables users to edit the title and content of their notes.
- **Delete Notes**: Allows users to delete notes from their account, ensuring data is removed from the database.

## Technologies Used

- **[Node.js](https://nodejs.org/)**: JavaScript runtime for server-side code.
- **[Express.js](https://expressjs.com/)**: Web framework for API routing and HTTP requests.
- **[MongoDB](https://www.mongodb.com/)**: NoSQL database for scalable, flexible data storage.
- **[Mongoose](https://mongoosejs.com/)**: ODM for schema-based MongoDB interactions.
- **[JWT (JSON Web Tokens)](https://jwt.io/)**: Secure, URL-safe token for user authentication.

## Endpoints

### Authentication

- **`POST /auth/register`**       ➜ Register a new user
- **`POST /auth/login`**          ➜ Log in an existing user
- **`POST /auth/logout`**         ➜ Log out the current user
- **`POST /auth/refresh`**        ➜ Refresh the JWT token

### Users

- **`POST /auth/delete-user`**     ➜ Delete the current user account

### Notes

- **`GET /notes`**                ➜ Retrieve all notes
- **`GET /notes/:id`**            ➜ Retrieve a specific note by ID
- **`POST /notes`**               ➜ Create a new note
- **`PUT /notes/:id`**            ➜ Update an existing note by ID
- **`DELETE /notes/:id`**         ➜ Delete a specific note by ID

## Project Links

- **Source Code**:  [Backend Repository](https://github.com/sam4web/docket-backend)
- **Live API**: [Docket API](https://docket-backend-qxw8.onrender.com/)
- **Frontend Code**: [Frontend Repository](https://github.com/sam4web/docket-frontend)
