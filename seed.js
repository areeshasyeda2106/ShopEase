const mongoose = require('mongoose');
const Product = require('./backend/models/Product');

const MONGO_URI = "mongodb://areeshaasyeda06_db_user:UmCsP5P2F07yCcC7@ac-vcdytut-shard-00-00.b9iecbh.mongodb.net:27017,ac-vcdytut-shard-00-01.b9iecbh.mongodb.net:27017,ac-vcdytut-shard-00-02.b9iecbh.mongodb.net:27017/ecommerce?ssl=true&replicaSet=atlas-dpoeig-shard-0&authSource=admin&appName=Cluster0";

const products = [
  {
    name: 'Wireless Headphones',
    description: 'Premium sound quality with noise cancellation',
    price: 59.99,
    category: 'Electronics',
    stock: 10,
    image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww'
  },
  {
    name: 'Running Shoes',
    description: 'Comfortable and lightweight for daily running',
    price: 49.99,
    category: 'Sports',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww'
  },
  {
    name: 'JavaScript Book',
    description: 'Learn JavaScript from scratch to advanced',
    price: 29.99,
    category: 'Books',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXNjcmlwdCUyMGJvb2t8ZW58MHx8MHx8fDA%3D'
  },
  {
    name: 'Cotton T-Shirt',
    description: 'Soft and comfortable everyday wear',
    price: 19.99,
    category: 'Clothing',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1716951735063-3d60c2c288e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdHRvbiUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Smart Watch',
    description: 'Track fitness and stay connected',
    price: 99.99,
    category: 'Electronics',
    stock: 8,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Desk Lamp',
    description: 'LED lamp with adjustable brightness',
    price: 24.99,
    category: 'Home',
    stock: 25,
    image: 'https://plus.unsplash.com/premium_photo-1681412205156-bb506a4ea970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D'
  },
  {
    name: 'Wall Clock',
    description: 'Modern wall clock with silent, non-ticking movement',
    price: 24.99,
    category: 'Home',
    stock: 10,
    image: 'https://plus.unsplash.com/premium_photo-1725075084045-4c1ee2ab9349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGNsb2NrfGVufDB8fDB8fHww'
},
{
    name:'Casual Shirt',
    description: 'Lightweight button-down casual shirt',
    price: 34.99,
    category: 'Clothing',
    stock:30,
   image:'https://images.unsplash.com/photo-1740711152088-88a009e877bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzdWFsJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D',
},
{
    name: 'Atomic Habits',
    description: 'Practical guide to building good habits',
    price: 18.99,
    category: 'Books',
    stock: 25,
    image:'https://images.unsplash.com/photo-1598301257942-e6bde1d2149b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXRvbWljJTIwaGFiaXRzfGVufDB8fDB8fHww',
},
{
    name: 'Football Boots',
    description:'High-grip boots for optimal field performance',
    price: 89.99,
    category: 'Sports',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Rm9vdGJhbGwlMjBCb290c3xlbnwwfHwwfHx8MA%3D%3D',

}
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB');
    
    const inserted = await Product.insertMany(products);
    console.log(`✅ ${inserted.length} products added!`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log('❌ Error:', err);
  });