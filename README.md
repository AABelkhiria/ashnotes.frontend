# Note App Frontend

![Note App Banner](static/banner.png)

This is the frontend for a simple note-taking application, built with SvelteKit. It allows users to create, view, edit, and delete notes, organized in a hierarchical file system-like structure. It communicates with a separate Rust-based backend application for all data persistence.

## Features

- **Note Creation & Editing**: Create and edit notes using Markdown. New categories (directories) are automatically created when a note is saved in a new path. Directories are represented by `README.md` files within them.
- **Hierarchical Structure**: Notes are organized in a directory-like structure, allowing for nested notes and categories.
- **Note Deletion**: Secure deletion process with confirmation and progress tracking for multiple files/directories.
- **Theming**: Supports both light and dark themes.
- **Keyboard Accessibility**: Modals and interactive elements are designed with keyboard navigation in mind (e.g., Enter key to close deletion progress).
- **Real-time Preview**: Toggle between edit mode (Markdown input) and preview mode (rendered Markdown).

## Technologies

- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: Standard CSS
- **Markdown Rendering**: Marked.js

## Development

To set up the project locally:

1.  **Backend Setup**:
    This frontend requires a running backend server. Please refer to the `backend_readme.md` file in the project root for instructions on how to set up and run the Rust backend application. Ensure the backend is running on `http://localhost:3000` (or configure the frontend's `backendUrl` accordingly).

2.  **Install Frontend Dependencies**:

    ```bash
    npm install
    ```

3.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    This will start the development server, typically on `http://localhost:5173`. You can open the application in your browser.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Linting and Type Checking

- **Check for formatting issues**:
  ```bash
  npm run lint
  ```
- **Fix formatting issues**:
  ```bash
  npm run format
  ```
- **Check for TypeScript and Svelte-related issues**:
  ```bash
  npm run check
  ```

## Architecture and Design

For a detailed explanation of the application's architecture, component structure, data flow, and considerations for replication on other platforms, please refer to the [Architecture and Design document](./docs/architecture.md).
