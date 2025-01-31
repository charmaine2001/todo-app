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
  const { title, dueDate, priority } = req.body;
  db.run(
    'INSERT INTO todos (title, dueDate, priority, completed) VALUES (?, ?, ?, ?)',
    [title, dueDate, priority, 0], 
    function (err) {
      if (err) {
        res.status(500).json({ message: 'Error creating todo' });
      } else {
      
        res.status(201).json({
          id: this.lastID,
          title,
          dueDate,
          priority,
          completed: 0,
        });
      }
    }
  );
});

app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body; 

  try {
      const db = await openDB()
      await db.run('UPDATE todos SET completed = ? WHERE id = ?', [completed, id]);
      res.status(200).send('Todo updated');
  } catch (error) {
      console.error('Error updating todo:', error);
      res.status(500).send('Failed to update todo');
  }
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});