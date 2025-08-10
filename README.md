# MyTasks - To-Do Application

![MyTasks Logo](public/T.png)

## Overview

**MyTasks** is a simple, intuitive, and responsive To-Do application built with **React** and **Vite**. It helps users manage their daily tasks efficiently by allowing them to add, edit, complete, and delete tasks. The app persists user data locally using the browser’s `localStorage`, ensuring that tasks are saved between sessions.

---

## Features

- **Add Todos:** Easily add new tasks with input validation (minimum 4 characters).
- **Edit Todos:** Modify existing tasks seamlessly.
- **Mark as Completed:** Toggle tasks as completed, with visual strike-through.
- **Show/Hide Completed Tasks:** Option to filter out completed tasks for a cleaner view.
- **Delete Todos:** Remove tasks you no longer need.
- **Persistence:** All tasks are saved in `localStorage` for data persistence across browser sessions.
- **User Feedback:** Shows success messages on adding tasks and error messages for invalid input.
- **Keyboard Support:** Add tasks by pressing Enter for faster workflow.
- **Responsive Design:** Works well across desktop and mobile devices.

---

## Technologies Used

- **React** — Frontend JavaScript library for building UI components.
- **Vite** — A fast frontend build tool and development server.
- **React Icons** — Popular icon library used for edit and delete buttons.
- **UUID** — For generating unique IDs for each task.
- **Tailwind CSS** — Utility-first CSS framework (optional, depending on your styling approach).

---

## Demo

You can see the live demo of this project here:  
- https://bhanusankarasetty.github.io/ToDo-App/

---

## Installation & Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/BhanuSankarasetty/ToDo-App.git
   cd ToDo-App
   ```

2. **Install dependencies**

- Make sure you have Node.js installed. Then run:

    ```
    npm install
    ```

- Follow steps mentioned in tailwind vite doc to install tailwind

- Run the following command to install react-icons

    ```
    npm install react-icons --save
    ```
    ```
    npm install uuid
    ```

## File structure

```
todo-app/
│
├── public/                 # Public assets (e.g., favicon, images)
├── src/
│   ├── components/         # Reusable React components (e.g., Navbar)
│   ├── assets/             # Static assets like images and icons
│   ├── App.jsx             # Main React component with app logic
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── .gitignore              # Git ignore rules
├── package.json            # Project metadata and dependencies
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## How to Use
- Type a task description in the input box (minimum 4 characters).

- Press Save button or hit Enter to add the task.

- Check the box to mark a task as completed or uncompleted.

- Use the Edit button to modify a task — edited task will appear in the input box.

- Use the Delete button to remove a task.

- Toggle Show Accomplished checkbox to filter completed tasks.