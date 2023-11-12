const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./Database/db'); // Require the database module
const registerRoute = require('./Routes/Register');
const loginRoute = require('./Routes/Login');
const adminRoute = require('./Routes/Admin');
const Movie_SearchRoute = require ('./Routes/Movie_Search')
const User = require('./models/users');
const movieController = require('../server/Controllers/movie_controller'); 

app.use(express.json());
app.use(cors());

app.use(registerRoute);
app.use(loginRoute);
app.use(adminRoute);
app.use(Movie_SearchRoute);
app.use(movieController);


app.listen(3003, () => {
  console.log('Server is running on port 3003');
});   