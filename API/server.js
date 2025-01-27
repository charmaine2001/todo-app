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

// app.post('/api/todos', (req, res) => {
//     const { title, dueDate, priority } = req.body;  // Add dueDate and priority
//     db.run('INSERT INTO todos (title, dueDate, priority, completed) VALUES (?, ?, ?, ?)', 
//       title, dueDate, priority, false, (err) => {
//       if (err) {
//         res.status(500).json({ message: 'Error creating todo' });
//       } else {
//         res.json({ message: 'Todo created successfully' });
//       }
//     });
//   });

app.post('/api/todos', (req, res) => {
    const { title, dueDate, priority } = req.body;  
    db.run('INSERT INTO todos (title, dueDate, priority, completed) VALUES (?, ?, ?, ?)', 
      title, dueDate, priority, false, function(err) {
      if (err) {
          res.status(500).json({ message: 'Error creating todo' });
      } else {
          // Return the created todo with its ID
          // res.json({ id: this.lastID, title, dueDate, priority, completed: false });
          res.status(201).json({ id: this.lastID, task });
      }
    });
});

app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body; // Get the completed status (1 or 0)

  try {
      const db = await openDB();
      // Update the todo's completed status in the database
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