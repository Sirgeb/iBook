const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./db');

// import Route files 
const userRoutes = require('./routes/users');
const favoriteRoutes = require('./routes/favorites');
const listingRoutes = require('./routes/listings');

// Connect to database 
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Set security headers
app.use(helmet());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/favorites', favoriteRoutes);
app.use('/api/v1/listings', listingRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
 
// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
