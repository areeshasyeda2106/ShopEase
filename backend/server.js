require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const MONGO_URI = "mongodb://areeshaasyeda06_db_user:UmCsP5P2F07yCcC7@ac-vcdytut-shard-00-00.b9iecbh.mongodb.net:27017,ac-vcdytut-shard-00-01.b9iecbh.mongodb.net:27017,ac-vcdytut-shard-00-02.b9iecbh.mongodb.net:27017/ecommerce?ssl=true&replicaSet=atlas-dpoeig-shard-0&authSource=admin&appName=Cluster0";

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log('🚀 Server running on port 5000');
    });
  })
  .catch((err) => {
    console.log('❌ MongoDB connection error:', err);
  });