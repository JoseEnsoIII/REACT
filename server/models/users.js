// db/models/user.js
const db = require('../Database/db'); // Import your MySQL database connection

class User {
  constructor() {
    this.tableName = 'users';
  }

  // Create a new user
  async create(userData) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO ?? SET ?', [this.tableName, userData], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

  // Fetch user by ID
  async findById(userId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM ?? WHERE id = ?', [this.tableName, userId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0]);
      });
    });
  }

  // Fetch user by email
  async findByEmail(email) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM ?? WHERE email = ?', [this.tableName, email], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0]);
      });
    });
  }

  // Add more methods as needed

  // Example method to update a user
  async update(userId, userData) {
    return new Promise((resolve, reject) => {
      db.query('UPDATE ?? SET ? WHERE id = ?', [this.tableName, userData, userId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

  // Example method to delete a user
  async delete(userId) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM ?? WHERE id = ?', [this.tableName, userId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }
}

module.exports = new User();
