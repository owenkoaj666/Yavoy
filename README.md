# Yavoy Mototaxi and Delivery Application

## Overview
Yavoy is a comprehensive mototaxi and delivery application designed for urban mobility and efficient package delivery. The application allows users to book rides and schedule deliveries with ease, providing a user-friendly interface for both riders and customers.

## Project Structure
The project structure is organized into several key directories and files:

```
Yavoy/
│
├── client/               # Contains the frontend application
│   ├── src/              # Source code for the client
│   ├── public/           # Static public assets
│   └── package.json      # Client dependencies and scripts
│
├── server/               # Contains the backend application
│   ├── src/              # Source code for the server
│   ├── config/           # Configuration files
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── package.json      # Server dependencies and scripts
│
├── database/             # Database management files
│   ├── migrations/        # Database migrations
│   └── seeds/            # Seed data for database
│
├── docs/                 # Documentation related to the project
│   └── API.md            # API documentation
│
├── .gitignore            # Files and directories to ignore in Git
├── README.md             # Project README
└── package.json          # Root-level dependencies and configurations
```

## Technologies
- **Frontend:** React, Redux, Axios
- **Backend:** Node.js, Express, MongoDB
- **Database:** MongoDB with Mongoose
- **Deployment:** Docker, Nginx
- **Testing:** Jest, Mocha
- **Version Control:** Git

## Setup Instructions
Follow these steps to get the Yavoy application running locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/owenkoaj666/Yavoy.git
   cd Yavoy
   ```

2. **Install dependencies**
   * For the server:
   ```bash
   cd server
   npm install
   ```
   * For the client:
   ```bash
   cd ../client
   npm install
   ```

3. **Set up the database**
   Make sure to have MongoDB installed and running. You can also set up a MongoDB Atlas database.

4. **Configure environment variables**
   Create a `.env` file in the `server` directory with the following variables:
   ```bash
   DATABASE_URL=<your_database_url>
   API_KEY=<your_api_key>
   ```

5. **Run the applications**
   * Start the server:
   ```bash
   cd server
   npm start
   ```
   * Start the client:
   ```bash
   cd ../client
   npm start
   ```

6. **Access the application**
   Open your browser and go to `http://localhost:3000` for the client application.

## Contribution
Contributions are welcome! Please submit a pull request to contribute to the project.