const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  address: {
    building: {
      type: String,
      trim: true
    },
    street: {
      type: String,
      required: true,
      trim: true
    },
    zipcode: {
      type: String,
      trim: true
    }
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  cuisine: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  restaurant_id: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
});

RestaurantSchema.query.sortByRestaurantId = function(order = 'asc') {
  const sortOrder = order === 'asc' ? 1 : -1;
  return this.sort({ restaurant_id: sortOrder });
};

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;
