const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'qrdb',
    'postgres',
    'yourpassword',
    {
        host: '127.0.0.1',
        dialect: 'postgres'
    }
);

module.exports = sequelize;
