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

- **[Node.js](https://nodejs.org/)**: A JavaScript runtime environment that allows server-side code execution.
- **[Express.js](https://expressjs.com/)**: A minimalist web framework for Node.js, used to handle API routing and HTTP
  requests.
- **[MongoDB](https://www.mongodb.com/)**: A NoSQL database for storing application data in a scalable and flexible
  format.
- **[Mongoose](https://mongoosejs.com/)**: An Object Data Modeling (ODM) library for MongoDB and Node.js, facilitating
  schema-based data interactions.
- **[JWT (JSON Web Tokens)](https://jwt.io/)**: A compact, URL-safe token used for securely transmitting information
  between parties, employed here for user authentication.

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
