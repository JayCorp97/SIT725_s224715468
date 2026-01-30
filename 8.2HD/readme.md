# Recipe Management System with DOCKER: END-TO-END APPLICATION DEPLOYMENT

## Overview

This project contains a fully containerized Recipe Management System that was built as part of the SIT725 High Distinction (HD) task. The application consists of a Node.js backend, a MongoDB database, and a static HTML/CSS/JS frontend, all running in separate Docker containers.

### Key Features

- **Full Dockerization**: Backend, frontend, and MongoDB database all run in Docker containers.
- **Database Integration**: MongoDB runs in a container, and the backend successfully connects to it.
- **Student Identity Endpoint**: The `/api/student` endpoint returns the student’s name and ID.

---

## Prerequisites

Before you run the application, ensure that you have the following installed:

- **Docker Desktop** (or Docker Engine + Docker Compose)
  - [Install Docker Desktop](https://www.docker.com/products/docker-desktop)
  - For Windows, ensure that **WSL2** is enabled.
  - Verify the installation with:
    ```bash
    docker --version
    docker-compose --version
    ```

---

## Setting Up the Application

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd Recipe-Management-System
```

## Configuration

All configurations (such as environment variables, port mappings, and services) are pre-configured in the docker-compose.yml file. No additional manual setup is required!
Building and Running the Containers

Once the repository is cloned, run the following command to build and start the application:

```bash
docker-compose up --build
```

This will:

    Build the backend image using the backend/Dockerfile.

    Build the frontend image using the frontend/Dockerfile.

    Pull the MongoDB 7.0 image.

    Initialize the MongoDB container first, followed by the backend container.

    The application will be accessible at http://localhost:5000.

First run: It may take a few minutes to build images and download dependencies.
Subsequent runs: Use docker-compose up (faster, uses cached images).

To run the containers in the background, use:

```bash
docker-compose up -d
```

### Stopping the Application

When You Want to Stop Containers Without Losing Data:

```bash
docker-compose down
```

When You Want to Clean Up, But Keep Data:

```bash
docker-compose down -v
```

When You Want to Completely Clean Up (Including Volumes, Images, and Networks):

```bash
docker-compose down --rmi all -v
```

### Accessing the Application
Frontend Application

    URL: http://localhost:8080

    The frontend can be accessed via the browser at this URL.

Backend Application

    URL: http://localhost:5000

    The backend can be accessed via the browser at this URL.

Student Identity Endpoint

    URL: http://localhost:5000/api/student

    Method: GET

    Response:

  ```bash
    {
      "name": "JANITHA JAYASANKA BOMIRIYA",
      "studentId": "s224715468"
    }
  ```

### MongoDB Database

    Connection String: mongodb://localhost:27017/recipes_db

    Port: 27017 (default MongoDB port)

## Configuration
Environment Variables

Configuration is managed through the docker-compose.yml file. Below are the key environment variables:

    PORT: 5000 (inside the container)

    MONGO_URI: mongodb://mongodb:27017/recipes_db (connects to MongoDB container)

    JWT_SECRET: supersecretkey (default, can be overridden for production)

    NODE_ENV: production

Sensitive Information

    No sensitive information is hard-coded in the repository.

    Default values are provided in docker-compose.yml for easy testing.

## Project Structure

8.2HD/
├── backend/                 # Node.js backend application
│   ├── Dockerfile           # Docker image build instructions for backend
│   ├── .dockerignore        # Files excluded from Docker build
│   ├── server.js            # Application entry point
│   ├── app.js               # Express app configuration
│   ├── routes/              # API routes (including /api/student)
│   ├── models/              # MongoDB models
│   └── ...
├── frontend/                # Static HTML/CSS/JS frontend
│   ├── Dockerfile           # Docker image build instructions for frontend
│   ├── pages/               # app navigation pages
│   ├── login.html           # Frontend HTML file
│   ├── nginx.conf           # frontend nginx configuaration file
│   └── ...
├── docker-compose.yml       # Multi-container orchestration
├── README.md                # This file
├── .dockerignore            # Files excluded from frontend Docker build

Testing the Application
1. Verify Running Containers

Check if the containers are running(Under Names):

```bash
docker ps
```

You should see two containers:

    82hd-frontend

    82hd-backend

    mongo (MongoDB)

2. Test the /api/student Endpoint

Open your browser or use curl to test the student identity endpoint:
```bash
curl http://localhost:5000/api/student
```
Expected response:

```bash
  {"name":"JANITHA JAYASANKA BOMIRIYA","studentId":"s224715468"}
```

3. Test the Web Application

    Open http://localhost:5000 in your browser.

    Register a new user account.

    Log in with user credentials.

    do changes to test the database functionality.

    Ensure that all features (user registration, login, recipe creation, etc.) work correctly.

4. Check Logs

To view the logs for the frontend, backend or MongoDB containers, run:

docker-compose logs frontend
docker-compose logs backend
docker-compose logs mongodb

## Docker Architecture

This application uses a multi-container setup:

    MongoDB Container: Runs MongoDB 7.0 with data persisted in the mongodb_data volume.

    Backend Container: Runs the Node.js application, serving the frontend and connecting to MongoDB.

    Frontend Container: Serves static HTML/CSS/JS frontend from the frontend container.

    Network: Both containers are on the recipe-network for service discovery.

    Volumes:

        mongodb_data: Persistent storage for MongoDB data.

        ./backend/uploads: Stores recipe images.


