const express = require('express');
const router = express.Router();
const db = require('../Database/db');
const bcrypt = require('bcrypt');


router.post('/login', (req, res) => {
    const sentLoginUserName = req.body.LoginUserName;
    const sentLoginPassword = req.body.LoginPassword;
    const sentEmail = req.body.Email; // Assuming "gmail" means email

    // Let's create an SQL statement to check the user's credentials
    const selectUserSQL = 'SELECT id FROM users WHERE username = ? AND password = ? AND email = ?';
    const selectUserValues = [sentLoginUserName, sentLoginPassword, sentEmail];

    db.query(selectUserSQL, selectUserValues, (err, results) => {
        if (err) {
            res.send({ error: err });
        } else if (results.length > 0) {
            const userId = results[0].id;

            // Insert a login log entry with the user's ID and current date and time
            const insertLoginLogSQL = 'INSERT INTO login_log (user_id, login_time) VALUES (?, NOW())';
            const insertLoginLogValues = [userId];

            db.query(insertLoginLogSQL, insertLoginLogValues, (logErr) => {
                if (logErr) {
                    console.error('Error inserting login log:', logErr);
                    res.send({ error: 'Login log insertion failed' });
                } else {
                    res.send({ message: 'Login successful' });
                }
            });
        } else {
            res.send({ message: 'Credentials Don\'t match!' });
        }
    });
});


module.exports = router;