// This file would be used in a real application with a Node.js/Express backend
// For demonstration purposes only - not included in the frontend React app

const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const auth = require('../middleware/auth'); // For protected routes

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get skills by category
router.get('/category/:category', async (req, res) => {
  try {
    const skills = await Skill.find({ category: req.params.category });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific skill
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new skill (protected route)
router.post('/', auth, async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    category: req.body.category,
    level: req.body.level,
    icon: req.body.icon
  });

  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a skill (protected route)
router.patch('/:id', auth, async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    if (req.body.name) skill.name = req.body.name;
    if (req.body.category) skill.category = req.body.category;
    if (req.body.level !== undefined) skill.level = req.body.level;
    if (req.body.icon !== undefined) skill.icon = req.body.icon;

    const updatedSkill = await skill.save();
    res.json(updatedSkill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a skill (protected route)
router.delete('/:id', auth, async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    await skill.remove();
    res.json({ message: 'Skill deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;