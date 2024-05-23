const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const pieceRoutes = require('./routes/piece');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); 
app.use('/api/piece', pieceRoutes);

// Sync database
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Database sync error:', err));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
