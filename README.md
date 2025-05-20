# Personal Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Node.js/Express backend.

## Features

- Responsive design for all devices
- Dynamic projects and skills sections
- Contact form with validation
- Smooth scrolling and animations
- Backend API for data management
- Admin panel for content updates

## Frontend Technologies

- React
- TypeScript
- Tailwind CSS
- Lucide React for icons

## Backend Technologies

- Node.js
- Express
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

2. Install frontend dependencies
```
npm install
```

3. Start the development server
```
npm run dev
```

4. For backend setup (optional):
```
cd backend
npm install
```

5. Create a `.env` file in the backend directory with:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

6. Start the backend server:
```
npm start
```

## Deployment

### Frontend Deployment

For deploying the frontend to Netlify:

1. Build the project
```
npm run build
```

2. Upload the `dist` folder to Netlify, or connect your GitHub repository for automatic deployment.

### Backend Deployment

For deploying the backend to a service like Render or Railway:

1. Push your code to GitHub
2. Connect your repository to the hosting service
3. Set the environment variables
4. Deploy the application

## Project Structure

```
portfolio-website/
├── public/               # Public assets
├── src/                  # Frontend source code
│   ├── components/       # React components
│   ├── data/             # Sample data
│   ├── types/            # TypeScript types
│   ├── App.tsx           # Main React component
│   └── main.tsx          # Entry point
├── backend/              # Backend code
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   └── server.js         # Express server
└── README.md             # Project documentation
```

## Adding New Content

### Projects

Add new projects to the `projects` array in `src/data/projects.ts` or through the admin panel when connected to the backend.

### Skills

Add new skills to the `skills` array in `src/data/skills.ts` or through the admin panel.

## License

MIT

## Contact

Your Name - your.email@example.com