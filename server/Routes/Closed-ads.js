const express = require('express');
const router = express.Router();
const db = require('../Database/db');

app.post("/api/close-ad", (req, res) => {
    const { adName } = req.body;
  
    if (!adName) {
      return res.status(400).json({ error: "Ad name is required" });
    }
  
    const closedAt = new Date();
    const adData = { ad_name: adName, closed_at: closedAt };
  
    db.query("INSERT INTO closed_ads SET ?", adData, (err, result) => {
      if (err) {
        console.error("Error inserting data: " + err);
        return res.status(500).json({ error: "Internal server error" });
      }
  
      res.status(201).json({ message: "Ad closed and data recorded" });
    });
  });
  
module.exports = router;