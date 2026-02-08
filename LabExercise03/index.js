const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const restaurantRouter = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(restaurantRouter);

app.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:${PORT}`)
});
