// This file would be used in a real application with a Node.js/Express backend
// For demonstration purposes only - not included in the frontend React app

const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['technical', 'soft'],
    required: true
  },
  level: {
    type: Number,
    min: 0,
    max: 100,
    required: true
  },
  icon: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Skill', skillSchema);