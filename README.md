Business Intelligence Dashboard

This project is a Business Intelligence Dashboard built using Next.js, Express, MongoDB, and various UI libraries. Follow the instructions below to install all the necessary dependencies and run the project locally.

Table of Contents

Backend Setup
Frontend Setup
shadcn/ui Component Setup
Environment Variables
Running the Application
Backend Setup

1. Install Dependencies
Navigate to your backend directory and run the following commands to initialize the project and install necessary dependencies:

bash
Code kopieren
npm init -y
npm install express mongoose cors dotenv
npm install --save-dev nodemon
Express: Web framework for Node.js.
Mongoose: MongoDB object modeling tool.
CORS: Middleware for handling Cross-Origin Resource Sharing.
dotenv: Module for environment variable management.
Nodemon: Development tool that automatically restarts the server when files change.
2. Add Backend Scripts
In your package.json file, add the following scripts for starting the server with Nodemon:

json
Code kopieren
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
Frontend Setup

1. Create Next.js Project
Navigate to your frontend directory and create a Next.js project using the following command:

bash
Code kopieren
npx create-next-app@latest
Select "Yes" for TypeScript, ESLint, Tailwind CSS, and the src/ directory when prompted.
2. Install Frontend Dependencies
After the project is created, install the necessary libraries for icons and charting:

bash
Code kopieren
npm install @radix-ui/react-icons lucide-react recharts
Radix UI Icons: A set of customizable icons.
Lucide React: Additional icon library.
Recharts: Charting library for React.
shadcn/ui Component Setup

shadcn/ui is a collection of reusable components for building user interfaces. To integrate it into your project, follow these steps:

1. Initialize shadcn/ui
Run the following command to initialize shadcn/ui in your project:

bash
Code kopieren
npx shadcn-ui@latest init
Follow the prompts to set up shadcn/ui.

2. Install Components
To install the components used in the project, run:

bash
Code kopieren
npx shadcn-ui@latest add button card form input label radio-group tabs toast
Environment Variables

1. Create a .env File
In the backend directory, create a .env file to store your MongoDB connection string:

plaintext
Code kopieren
MONGODB_URI=your_mongodb_connection_string_here
Replace your_mongodb_connection_string_here with your actual MongoDB connection string.

Running the Application

1. Running the Backend
To start the backend server, navigate to the backend directory and run:

bash
Code kopieren
npm run dev
This will run the server with Nodemon for automatic restarts on file changes.

2. Running the Frontend
To start the frontend, navigate to the frontend directory and run:

bash
Code kopieren
npm run dev
3. Ensure Proper Backend URL
Make sure that your frontend points to the correct backend URL, which should be http://localhost:5000 if you're running the backend locally.

Final Notes

With these steps, you should have your Business Intelligence Dashboard running both the frontend and backend. Make sure both servers are running simultaneously for the full application to function correctly.

Happy coding!

Here’s the formatted `README.md` file content, ready for you to copy and paste into your file. It will look clean and structured when viewed on GitHub or in Markdown preview:

---

# Business Intelligence Dashboard

## Installation Guide

Follow these steps to install all the necessary dependencies for the Business Intelligence Dashboard.

---

### 1. Backend Dependencies

First, navigate to your **backend directory** in the terminal and run:

```bash
npm init -y
npm install express mongoose cors dotenv
npm install --save-dev nodemon
```

This installs:

- **Express**: A web framework for Node.js.
- **Mongoose**: MongoDB object modeling for Node.js.
- **CORS**: Middleware for handling cross-origin resource sharing.
- **dotenv**: For managing environment variables.
- **Nodemon**: Automatically restarts the server during development.

---

### 2. Frontend Dependencies

For the frontend, we're using **Next.js** with React. Navigate to your **frontend directory** and run:

```bash
npx create-next-app@latest
```

Follow the prompts, selecting **Yes** for TypeScript, ESLint, Tailwind CSS, and "src/" directory.

After the project is created, install additional dependencies:

```bash
npm install @radix-ui/react-icons lucide-react recharts
```

This installs:

- **Radix UI** icons.
- **Lucide React** for additional icons.
- **Recharts** for creating charts.

---

### 3. Install `shadcn/ui` Components

`shadcn/ui` is a collection of reusable components. To set it up in your project, run:

```bash
npx shadcn-ui@latest init
```

Then, install the necessary components:

```bash
npx shadcn-ui@latest add button card form input label radio-group tabs toast
```

---

### 4. Update `package.json`

In your **backend**’s `package.json`, add a script to run the server with **Nodemon**:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

In the **frontend**’s `package.json`, the scripts are already set up by `create-next-app`.

---

### 5. Create a `.env` File

In your **backend directory**, create a `.env` file and add your MongoDB connection string:

```plaintext
MONGODB_URI=your_mongodb_connection_string_here
```

Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string.

---

### 6. Running the Application

#### Running the Backend

Navigate to the **backend directory** and run:

```bash
npm run dev
```

#### Running the Frontend

Navigate to the **frontend directory** and run:

```bash
npm run dev
```

Ensure both the frontend and backend are running simultaneously for the full application to work. Make sure the frontend points to the correct backend URL (usually `http://localhost:5000` if running locally).

---

## Conclusion

With these steps, you should have all the necessary dependencies installed and be ready to run your **Business Intelligence Dashboard**.

---

This structured Markdown should display well both in GitHub and in any Markdown preview, making it easy to read and follow.