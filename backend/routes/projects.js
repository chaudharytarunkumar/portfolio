// This file would be used in a real application with a Node.js/Express backend
// For demonstration purposes only - not included in the frontend React app

const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/auth'); // For protected routes

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new project (protected route)
router.post('/', auth, async (req, res) => {
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    technologies: req.body.technologies,
    githubUrl: req.body.githubUrl,
    liveUrl: req.body.liveUrl,
    featured: req.body.featured
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a project (protected route)
router.patch('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    if (req.body.title) project.title = req.body.title;
    if (req.body.description) project.description = req.body.description;
    if (req.body.image) project.image = req.body.image;
    if (req.body.technologies) project.technologies = req.body.technologies;
    if (req.body.githubUrl) project.githubUrl = req.body.githubUrl;
    if (req.body.liveUrl !== undefined) project.liveUrl = req.body.liveUrl;
    if (req.body.featured !== undefined) project.featured = req.body.featured;

    const updatedProject = await project.save();
    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a project (protected route)
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    await project.remove();
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;