const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define schemas
const saleSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  product: { type: String, required: true },
});

const costSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
});

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, enum: ['Active', 'Inactive', 'New'], default: 'New' },
});

// Define models
const Sale = mongoose.model('Sale', saleSchema);
const Cost = mongoose.model('Cost', costSchema);
const Customer = mongoose.model('Customer', customerSchema);

// Helper function for error handling
const handleError = (res, err) => {
  console.error(err);
  res.status(500).json({ message: 'An error occurred', error: err.message });
};

// Sales Routes
app.get('/api/sales', async (req, res) => {
  try {
    const sales = await Sale.find().sort({ date: -1 });
    res.json(sales);
  } catch (err) {
    handleError(res, err);
  }
});

app.post('/api/sales', async (req, res) => {
  try {
    const newSale = new Sale(req.body);
    const savedSale = await newSale.save();
    res.status(201).json(savedSale);
  } catch (err) {
    handleError(res, err);
  }
});

app.put('/api/sales/:id', async (req, res) => {
  try {
    const updatedSale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSale) return res.status(404).json({ message: 'Sale not found' });
    res.json(updatedSale);
  } catch (err) {
    handleError(res, err);
  }
});

app.delete('/api/sales/:id', async (req, res) => {
  try {
    const deletedSale = await Sale.findByIdAndDelete(req.params.id);
    if (!deletedSale) return res.status(404).json({ message: 'Sale not found' });
    res.json({ message: 'Sale deleted successfully' });
  } catch (err) {
    handleError(res, err);
  }
});

// Costs Routes
app.get('/api/costs', async (req, res) => {
  try {
    const costs = await Cost.find().sort({ date: -1 });
    res.json(costs);
  } catch (err) {
    handleError(res, err);
  }
});

app.post('/api/costs', async (req, res) => {
  try {
    const newCost = new Cost(req.body);
    const savedCost = await newCost.save();
    res.status(201).json(savedCost);
  } catch (err) {
    handleError(res, err);
  }
});

app.put('/api/costs/:id', async (req, res) => {
  try {
    const updatedCost = await Cost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCost) return res.status(404).json({ message: 'Cost not found' });
    res.json(updatedCost);
  } catch (err) {
    handleError(res, err);
  }
});

app.delete('/api/costs/:id', async (req, res) => {
  try {
    const deletedCost = await Cost.findByIdAndDelete(req.params.id);
    if (!deletedCost) return res.status(404).json({ message: 'Cost not found' });
    res.json({ message: 'Cost deleted successfully' });
  } catch (err) {
    handleError(res, err);
  }
});

// Customers Routes
app.get('/api/customers', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    handleError(res, err);
  }
});

app.post('/api/customers', async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    handleError(res, err);
  }
});

app.put('/api/customers/:id', async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCustomer) return res.status(404).json({ message: 'Customer not found' });
    res.json(updatedCustomer);
  } catch (err) {
    handleError(res, err);
  }
});

app.delete('/api/customers/:id', async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) return res.status(404).json({ message: 'Customer not found' });
    res.json({ message: 'Customer deleted successfully' });
  } catch (err) {
    handleError(res, err);
  }
});

// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));