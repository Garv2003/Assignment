
# Train Booking App

A simple and efficient train booking application built with React Native for the client and Prisma for the server. This app allows users to view available trains, filter them based on source and destination, and book tickets for their desired journeys.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Custom Hooks](#custom-hooks)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of available trains.
- Filter trains by source and destination.
- Book tickets for selected trains.
- User authentication and role management.
- Responsive design for mobile devices.

## Technologies Used

- **Client (React Native)**: For building the mobile application.
- **Axios**: For making HTTP requests to the backend API.
- **AsyncStorage**: For storing user tokens and other data.
- **Custom Hooks**: For managing complex logic and state across components.
- **React Navigation**: For navigating between different screens.
- **Server (Prisma)**: For database management and API development.

## Project Structure

The project is structured as follows:

```
train-booking-app/
├── client/          # React Native application
│   ├── components/  # Reusable UI components
│   ├── hooks/       # Custom hooks
│   ├── screens/     # Application screens
│   ├── styles/      # Styles for the application
│   ├── utils/       # Utility functions
│   ├── App.tsx      # Main application entry point
│   └── ...
├── server/          # Prisma server application
│   ├── prisma/      # Prisma schema and database setup
│   ├── src/         # Server source code
│   ├── .env         # Environment variables for the server
│   ├── package.json  # Server dependencies
│   └── ...
└── README.md        # Project documentation
```

## Installation

### Client

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the client directory and add your API URL:
   ```plaintext
   API_URL=https://your-api-url.com
   ADMIN_API_KEY="your_admin_api_key"
   ```

4. Run the application:
   ```bash
   npm run start
   ```
   This will start the development server. You can then run the app on your emulator or physical device.

### Server

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install server dependencies:
   ```bash
   npm install
   ```

3. Set up your database and env :
   - env var 
      ```DATABASE_URL="file:./dev.db"
         JWT_SECRET="your_jwt_secret"
         ADMIN_API_KEY="your_admin_api_key"
      ```
   - Ensure you have Prisma installed globally:
     ```bash
     npm install -g prisma
     ```
   - Run Prisma migrations to set up the database:
     ```bash
     npx prisma migrate dev
     ```

4. Run the server:
   ```bash
   npm run dev
   ```

## Usage

1. **User Authentication**: Users can log in or register to access the app features.
2. **Viewing Trains**: After logging in, users can view a list of available trains.
3. **Filtering Trains**: Users can filter trains based on source and destination.
4. **Booking Tickets**: Users can select a train and book tickets.

