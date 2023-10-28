const express = require('express');
const router = express.Router();
const db = require('../Database/db'); 
const bcrypt = require('bcrypt');

router.post('/register', (req, res) => {
    const sentEmail = req.body.Email;
    const sentUserName = req.body.UserName;
    const sentPassword = req.body.Password;

    // Check if the email already exists in the database
    const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkEmailQuery, [sentEmail], (err, results) => {
        if (err) {
            res.status(500).send({ message: 'Error checking email' });
        } else if (results.length > 0) {
            // Email already exists, return an error message
            res.send({ message: 'Email already exists in the database.' });
        } else {
            // Email is not in the database, proceed with user registration
            bcrypt.hash(sentPassword, 10, (err, hashedPassword) => {
                if (err) {
                    res.status(500).send({ message: 'Error hashing password' });
                } else {
                    // Insert the user into the database
                    const insertUserQuery = 'INSERT INTO reactflix.users (email, username, password) VALUES (?,?,?)';
                    const values = [sentEmail, sentUserName, hashedPassword];
                    db.query(insertUserQuery, values, (err, results) => {
                        if (err) {
                            res.status(500).send({ message: 'Error inserting user' });
                        } else {
                            console.log('User inserted successfully!');
                            res.send({ message: 'User added!' });
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;
