const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./Database/db'); // Require the database module
const registerRoute = require('./Routes/Register');
const loginRoute = require('./Routes/Login');
const User = require('./models/users');

app.use(express.json());
app.use(cors());

app.use(registerRoute);
app.use(loginRoute);

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});   