const express = require('express');
const mongoose = require('./database'); // Ensure this points to your database connection module
const app = express();
const PORT = 3000;

app.use(express.json());

// Define Expense model with appropriate schema
const Expense = mongoose.model('Expense', new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}));

// Get all expenses
app.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
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

    const newExpense = new Expense({
      description,
      amount,
      date: parsedDate
    });

    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update an expense
app.put("/expenses/:id", async (req, res) => {
  try {
    const { description, amount, date } = req.body;

    if (date) {
      const parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        return res.status(400).send("Invalid date format.");
      }
      req.body.date = parsedDate;
    }

    const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedExpense) {
      return res.status(404).send("Expense not found.");
    }

    res.status(200).json(updatedExpense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete an expense
app.delete("/expenses/:id", async (req, res) => {
  try {
    const result = await Expense.findByIdAndDelete(req.params.id);

    if (!result) {
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