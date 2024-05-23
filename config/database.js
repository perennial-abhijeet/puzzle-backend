const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'puzzle',
    'postgres',
    '12345678',
    {
        host: '127.0.0.1',
        dialect: 'postgres'
    }
);

module.exports = sequelize;
