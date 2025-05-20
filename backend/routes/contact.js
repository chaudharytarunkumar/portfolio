// This file would be used in a real application with a Node.js/Express backend
// For demonstration purposes only - not included in the frontend React app

const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth'); // For protected routes

// Submit a contact message
router.post('/', async (req, res) => {
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
    
    // In a real application, you might want to send an email notification
    // to the portfolio owner when a new message is received
    
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all messages (protected route)
router.get('/', auth, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific message (protected route)
router.get('/:id', auth, async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    
    // Mark as read if not already
    if (!message.read) {
      message.read = true;
      await message.save();
    }
    
    res.json(message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a message (protected route)
router.delete('/:id', auth, async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    
    await message.remove();
    res.json({ message: 'Message deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;