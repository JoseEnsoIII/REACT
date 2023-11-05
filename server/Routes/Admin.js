const express = require('express');
const router = express.Router();
const db = require('../Database/db');



router.post('/admin', (req, res) => {
    const { AdminUserName, AdminPassword } = req.body;
  
    if (!AdminUserName || !AdminPassword) {
      return res.json({ message: 'Username and password are required' });
    }
  
    // Query the 'admin' table in your database to verify the credentials
    const query = 'SELECT * FROM admins WHERE username = ? AND password = ?';
    db.query(query, [AdminUserName, AdminPassword], (err, results) => {
      if (err) {
        console.error('Database query error: ' + err);
        return res.json({ message: 'An error occurred while processing your request' });
      }
  
      if (results.length === 1) {
        // User is authenticated
        return res.json({ message: 'Login successful' });
      } else {
        // Authentication failed
        return res.json({ message: 'Invalid credentials' });
      }
    });
  });
  
  
module.exports = router;