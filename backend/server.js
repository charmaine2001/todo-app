const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./database.db');

app.get('/api/todos', (req, res) => {
  db.all('SELECT * FROM todos', (err, rows) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching todos' });
    } else {
      res.json(rows);
    }
  });
});

app.post('/api/todos', (req, res) => {
    const { title, dueDate, priority } = req.body;  // Add dueDate and priority
    db.run('INSERT INTO todos (title, dueDate, priority, completed) VALUES (?, ?, ?, ?)', 
      title, dueDate, priority, false, (err) => {
      if (err) {
        res.status(500).json({ message: 'Error creating todo' });
      } else {
        res.json({ message: 'Todo created successfully' });
      }
    });
  });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});