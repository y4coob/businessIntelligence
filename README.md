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
