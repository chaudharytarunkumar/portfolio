// This file would be used in a real application with a Node.js/Express backend
// For demonstration purposes only - not included in the frontend React app

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define schemas
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  technologies: [String],
  githubUrl: String,
  liveUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const skillSchema = new mongoose.Schema({
  name: String,
  category: {
    type: String,
    enum: ['technical', 'soft']
  },
  level: {
    type: Number,
    min: 0,
    max: 100
  },
  icon: String
});

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: String,
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create models
const Project = mongoose.model('Project', projectSchema);
const Skill = mongoose.model('Skill', skillSchema);
const Message = mongoose.model('Message', messageSchema);

// Routes
// Projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Skills
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }
    
    const newMessage = new Message({
      name,
      email,
      subject,
      message
    });
    
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin routes would go here (with authentication middleware)

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});