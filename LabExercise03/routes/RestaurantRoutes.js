const express = require('express');
const restaurantModel = require('../models/Restaurant');
const app = express();

app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await restaurantModel.find({});
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  const cuisine = req.params.cuisine;
  try {
    const restaurants = await restaurantModel.find({ cuisine: cuisine });
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/restaurants/sort', async (req, res) => {
    const sortBy = req.query.sortBy ? req.query.sortBy.toLowerCase() : 'asc';
    try {
        const restaurants = await restaurantModel.find({}).select("id cuisine name city restaurant_id").sort({'restaurant_id': sortBy});
        res.status(200).send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/Delicatessen', async (req, res) => {
  try {
    const restaurants = await restaurantModel
      .find({ cuisine: 'Delicatessen', city: { $ne: 'Brooklyn' } })
      .select('cuisine name city')
      .sort({ name: 1 }); // Sort by name ascending
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
