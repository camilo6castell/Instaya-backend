# Instaya: Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## About

This project is developed in **Node.js** with the help of **Express** and **MongoDB** as a non-relational database.

The execution environment of the _Instaya_ project in its entirety is called **MERN** and this part refers specifically to the backend of the application.

Instaya is an exercise that showcases a web application for a physical package courier company. The backend part of the application handles the respective **CRUD** (Create, Read, Update, Delete) operations in the database to manage packages and users.

Using a non-relational database such as MongoDB offers performance advantages and data accessibility.

## Features

1. Server created with Express
2. Integration with MongoDB database
3. Use of schemas for different data types in MongoDB
4. Users CRUD (Create, Read, Update, Delete)
5. Parcels CRUD (Create, Read, Update, Delete)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/instaya-backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd instaya-backend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:

   - Create a `.env` file in the root directory and add your MongoDB URI and other necessary environment variables.

   ```env
   DB_KEY=your_mongodb_uri
   TOKEN_SECRET=secret_key_for_encryption
   [Optional]PORT=your_port
   ```

5. Start the server:
   ```bash
   npm start
   ```

## Usage

After starting the server, you can use tools like Postman or cURL to interact with the API endpoints for managing users and parcels.

## Documentation

The formal project documentation (in Spanish) can be accessed via the following link:

[Google Drive](https://drive.google.com/file/d/1v7anSEonx4DkO3JBXeIhxUjEv6Eu6TLY/view?usp=sharing)

### Contact

[LinkedIn](https://www.linkedin.com/in/camilocastell/)
