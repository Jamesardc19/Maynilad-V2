# Maynilad University Study Center Website

A responsive website for Maynilad University Study Center built with Next.js, Tailwind CSS, and a JSON-Server backend.

## Project Structure

The project is organized into two main directories:

- `frontend/`: Contains the Next.js application with Tailwind CSS for styling
- `backend/`: Contains a simple JSON-Server API to serve content

## Technologies Used

### Frontend
- Next.js: React framework for server-side rendering and static site generation
- Tailwind CSS: Utility-first CSS framework for rapid UI development
- TypeScript: For type safety and better developer experience

### Backend
- JSON-Server: Simple REST API mock server

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation and Setup

1. Clone the repository

2. Install frontend dependencies
```bash
cd frontend
npm install
```

3. Install backend dependencies
```bash
cd ../backend
npm install
```

### Running the Application

1. Start the backend server
```bash
cd backend
npm run dev
```

2. In a new terminal, start the frontend development server
```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Features

- Responsive design that works on all devices and browsers
- Modern UI with a dark green theme
- Easy content management through the backend API
- Dynamic content loading for news, events, and programs

## Customization

### Changing Colors
- The color scheme can be modified in `frontend/tailwind.config.js`
- Primary colors are defined in the theme section

### Adding Content
- Add or modify content in the `backend/db.json` file
- The frontend will automatically fetch and display the updated content

## License

This project is licensed under the MIT License - see the LICENSE file for details.
