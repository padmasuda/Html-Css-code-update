const express = require("express");
const pool = require("./db");
const app = express();
const PORT = 3000;

app.use(express.json());

// Get all expenses
app.get("/expenses", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM expenses");
    res.status(200).json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Create a new expense
app.post("/expenses", async (req, res) => {
  try {
    const { description, amount, date } = req.body;

    if (!description || !amount || !date) {
      return res.status(400).send("Description, amount, and date are required.");
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).send("Invalid date format.");
    }

    const result = await pool.query(
      "INSERT INTO expenses (description, amount, date) VALUES ($1, $2, $3) RETURNING *",
      [description, amount, parsedDate]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update an expense
app.put("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description, amount, date } = req.body;

    if (!description || !amount || !date) {
      return res.status(400).send("Description, amount, and date are required.");
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).send("Invalid date format.");
    }

    const result = await pool.query(
      "UPDATE expenses SET description = $1, amount = $2, date = $3 WHERE id = $4 RETURNING *",
      [description, amount, parsedDate, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).send("Expense not found.");
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete an expense
app.delete("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM expenses WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return res.status(404).send("Expense not found.");
    }

    res.status(204).send();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});