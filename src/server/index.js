import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Initialize database
const dbPromise = open({
  filename: join(__dirname, 'database.sqlite'),
  driver: sqlite3.Database
});

// Create tables if they don't exist
dbPromise.then(async (db) => {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS quiz_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      score REAL,
      answers TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id)
    );
  `);
  console.log('Database tables created successfully');
});

// API Routes
app.post('/api/users', async (req, res) => {
  const { name, email, quizResults } = req.body;
  const db = await dbPromise;

  try {
    const result = await db.run(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );

    if (quizResults) {
      await db.run(
        'INSERT INTO quiz_results (user_id, score, answers) VALUES (?, ?, ?)',
        [result.lastID, quizResults.score, JSON.stringify(quizResults.answers)]
      );
    }

    res.json({ success: true, userId: result.lastID });
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT') {
      res.status(409).json({ error: 'Email already exists' });
    } else {
      console.error('Server error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// Admin route to get all users with their quiz results
app.get('/api/admin/users', async (req, res) => {
  const db = await dbPromise;
  
  try {
    const users = await db.all(`
      SELECT 
        u.id, 
        u.name, 
        u.email, 
        u.created_at,
        qr.score,
        qr.answers,
        qr.created_at as quiz_date
      FROM users u
      LEFT JOIN quiz_results qr ON u.id = qr.user_id
      ORDER BY u.created_at DESC
    `);
    
    res.json(users);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});