const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

dotenv.config();

mongoose.connect('mongodb://127.0.0.1:27017/netflix', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log("db connected")).catch(err => console.log(err))

app.use(express.json());

app.use(cors());
app.options('*', cors());
app.use("/client/auth", authRoute);
app.use("/client/users" , userRoute);
app.use("/client/movies" , movieRoute);
app.use("/client/lists" , listRoute);

app.listen(8800, () => {
    console.log("app is working....")
})