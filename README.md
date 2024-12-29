# Nooro-Frontend: Todo List App

This is the **frontend** application for the **Full-Stack Todo List App** built with **Next.js**, **Tailwind CSS**, and **TypeScript**. It provides the user interface to interact with tasks, including creating, editing, marking as completed, and deleting tasks.

---

## Features

### Home View
- View all tasks with their completion status.
- Mark tasks as completed or not completed directly from the list.
- Delete tasks with a confirmation dialog.
- Navigate to the "Create Task" or "Edit Task" pages.

### Create Task Page
- Add a new task with a title and selectable color.
- Save and redirect to the Home View.

### Edit Task Page
- Edit an existing task's title and color.
- Save updates or navigate back without saving.

---

## Prerequisites

1. **Node.js**: Ensure Node.js is installed on your machine.
2. **Backend API**: The backend API (Express.js) must be running on `http://localhost:3001`.

---

## Environment Variables

Create a `.env.local` file in the root of the project and add the following:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

This sets the base URL for API requests to point to your backend server.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <frontend-repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

### 3. Run the Development Server

Start the development server with:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

---

## Project Structure

```
frontend/
├── public/                # Public assets (images, favicon, etc.)
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── TodoList.tsx   # Main component for task list
│   ├── pages/             # Next.js pages
│   │   ├── index.tsx      # Home page (Task List)
│   │   ├── create-task.tsx# Page for creating tasks
│   │   ├── edit-task.tsx  # Page for editing tasks
│   ├── styles/            # Global styles
│   │   ├── globals.css    # Tailwind CSS and global styles
│   ├── utils/             # Utility functions (optional)
│   ├── types/             # TypeScript type definitions
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── README.md              # Documentation
```

---

## Key Scripts

| Script         | Description                                 |
|----------------|---------------------------------------------|
| `npm run dev`  | Starts the development server.              |
| `npm run build`| Builds the application for production.      |
| `npm run start`| Starts the production server.               |
| `npm run lint` | Lints the code for errors and style issues. |

---

## API Endpoints

This frontend interacts with the following backend endpoints:

| Method | Endpoint       | Description                     |
|--------|----------------|---------------------------------|
| GET    | `/tasks`       | Fetch all tasks.               |
| POST   | `/tasks`       | Create a new task.             |
| PUT    | `/tasks/:id`   | Update an existing task.       |
| DELETE | `/tasks/:id`   | Delete a task by its ID.       |

---

## Technologies Used

- **Next.js**: A React framework for server-rendered and statically generated apps.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A type-safe JavaScript superset.
- **Axios**: For making HTTP requests to the backend API.

---

## Deployment

To deploy the frontend application:

1. Build the production version:

   ```bash
   npm run build
   ```

2. Start the server:

   ```bash
   npm run start
   ```

The production application will be available at `http://localhost:3000`.

---

## Known Issues

- Ensure the backend API is running before starting the frontend.
- Verify that the `NEXT_PUBLIC_API_URL` environment variable is correctly set in `.env.local`.

---

## Contributing

1. Fork this repository.
2. Create a new feature branch:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add feature"
   ```

4. Push the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

---

## License

This project is licensed under the MIT License. Feel free to use it as you see fit.

---

## Contact

If you encounter any issues or have questions, feel free to open an issue in the repository.

---

This version is corrected, formatted, and clear for any user to understand and set up the frontend application. Let me know if you need further refinements!
