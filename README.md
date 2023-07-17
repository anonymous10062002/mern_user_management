# mern_user_management

This project is a full-stack web application built with React, Node.js, Express, and MongoDB. It allows you to register users and displays a list of registered users.

## Prerequisites

Before you can run this project, make sure you have the following software installed on your machine:

- Node.js

## Installation

1. Clone the repository to your local machine: 

- git clone https://github.com/anonymous10062002/mern_user_management.git


2. Change into `backend` directory and install the dependencies for the server:

- cd backend
- npm install


4. Change into the `frontend` directory and install the dependencies for the client:

- cd ..
- cd frontend
- npm install


## Configuration

1. Create a `.env` file in the root directory of the project.

2. In the `.env` file, add the following environment variables:

mongoURL=mongodb+srv://ashish:ashishpal@cluster0.2ahhjtl.mongodb.net/merndb?retryWrites=true&w=majority
port=4000

## Running the Application

1. Start the backend server by changing into `backend` directory:

- npm run server


The server will run on http://localhost:4000.

2. In a new terminal, change into the `frontend` directory and start the client server:

- npm start


The client will run on http://localhost:3000 and open automatically in your browser.

## Usage

- Access the application by visiting http://localhost:3000 in your browser.
- The server API endpoints are accessible at http://localhost:4000/api.

## Backend API Endpoints

- **POST /users/register**: Register a new user. Requires the following JSON payload:
```json
{
 "name": "Ashish Pal",
 "email": "ashish@example.com",
 "password": "password"
}
```

- **GET /users**: Get all users
```
[
  {
      "_id": "1"
     "name": "John Doe",
     "email": "john@example.com",
     "password": "password"
  }
]
```









