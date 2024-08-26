# School Management REST API

This project is a NestJS-based REST API for managing school information. It allows you to perform CRUD operations on schools, addresses, and organizations. The API is documented with Swagger and includes a Python client to interact with the API.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Python Client](#python-client)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Swagger](https://swagger.io/)
- [Python](https://www.python.org/)
- [Git](https://git-scm.com/)

## Setup and Installation

### Prerequisites

- Node.js (v14.x or higher)
- PostgreSQL
- Python (optional, for the Python client)
- Git

### Installation Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ab958/school-management.git
    cd school-management
    ```

2. **Install Node.js dependencies:**

    ```bash
    npm install
    ```

3. **Set up your PostgreSQL database:**

    Create a PostgreSQL database for the project.

4. **Configure environment variables:**

    Create a `.env` file in the root directory and configure your database connection.

    ```env
    DB_TYPE=postgres
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=your_username
    DATABASE_PASSWORD=your_password
    DATABASE_NAME=your_database_name
    ```

## Running the Application

You can run the application using the following command:

```bash
npm run start
```
