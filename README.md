# 🚲 Bike Library API

A RESTful API built using [Nest.js](https://nestjs.com/) to manage a library of bikes. The API supports CRUD operations and includes **Swagger** documentation for easy testing and interaction.

## Features
- 🚀 **CRUD Operations**: Create, Read, Update, and Delete bikes.
- 📚 **SQLite** for data persistence.
- 🛡️ **DTO (Data Transfer Object)** validation using `class-validator`.
- 🛠️ **Swagger Documentation** for testing and interacting with the API directly from the browser.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Testing the API with Swagger](#testing-the-api-with-swagger)
- [Endpoints](#endpoints)
- [Swagger Documentation](#swagger-documentation)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [SQLite](https://www.sqlite.org/index.html) (Optional for inspecting the database)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/gauravkr198/Bike-Library

2. Navigate to the project directory:
    ```bash
    cd Bike-Library
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

1. Start the application in development mode:
    ```bash
    npm run start
    ```

2. The API will be running at:
    ```
    http://localhost:3000/api
    ```

### Testing the API with Swagger

Once the application is running, you can test and interact with the API through the built-in Swagger documentation.

1. Open your browser and navigate to:
    ```
    http://localhost:3000/api
    ```

2. You’ll find an interactive UI to execute the API's endpoints and view detailed documentation.

## Endpoints

| Method | Endpoint       | Description                   |
|--------|----------------|-------------------------------|
| GET    | `/bikes`       | Get a list of all bikes       |
| GET    | `/bikes/:id`   | Get details of a specific bike|
| POST   | `/bikes`       | Add a new bike                |
| PUT    | `/bikes/:id`   | Update details of a bike      |
| DELETE | `/bikes/:id`   | Remove a bike from the library|

### Example of Adding a Bike (POST `/bikes`)
```json
{
  "make": "Yamaha",
  "model": "R15",
  "year": 2022,
  "type": "Sport"
}

![Screenshot 2024-10-10 212149](https://github.com/user-attachments/assets/5de1c100-cf2c-4ffc-85c4-b6dffd043b43)
![Screenshot 2024-10-10 204300](https://github.com/user-attachments/assets/d40a0153-9dc8-4ace-9c56-8e5ba6ccc5ca)
![Screenshot 2024-10-10 204340](https://github.com/user-attachments/assets/0c436118-04b0-42a5-9c36-e2c70cf8decc)
![Screenshot 2024-10-10 204824](https://github.com/user-attachments/assets/3eb7914a-7a4c-4826-97ca-68a47f084ede)
![Screenshot 2024-10-10 205034](https://github.com/user-attachments/assets/9b60096c-8c37-46e0-a3ce-722cf44031b3)




 


 

 
 

 

