const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

dotenv.config();

mongoose.connect('mongodb://127.0.0.1:27017/netflix', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log("db connected")).catch(err => console.log(err))

app.use(express.json());

app.use("/client/auth", authRoute);
app.use("/client/users", userRoute);

app.listen(5000, () => {
    console.log("app is working....")
})