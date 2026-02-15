const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/UserRoutes');

const app = express();
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
}).catch(err => {
});

app.use('/users', userRouter);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
});
