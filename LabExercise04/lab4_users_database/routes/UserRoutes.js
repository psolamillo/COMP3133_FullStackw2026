const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = {};
      for (let field in err.errors) {
        errors[field] = err.errors[field].message;
      }
      return res.status(400).json({
        message: 'Validation error',
        errors: errors
      });
    }
    res.status(500).json({ message: err.message });
  }
});

router.post('/bulk', async (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ message: 'Request body must be an array' });
    }

    const results = {
      inserted: [],
      errors: []
    };

    for (const item of req.body) {
      try {
        const user = new User({
          username: item.username,
          email: item.email,
          city: item.address?.city || '',
          website: item.website,
          zipCode: item.address?.zipcode || '',
          phone: item.phone
        });
        const saved = await user.save();
        results.inserted.push(saved);
      } catch (err) {
        if (err.name === 'ValidationError') {
          const errors = {};
          for (let field in err.errors) {
            errors[field] = err.errors[field].message;
          }
          results.errors.push({
            item,
            message: 'Validation error',
            errors
          });
        } else {
          results.errors.push({
            item,
            message: err.message
          });
        }
      }
    }

    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
