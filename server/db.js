require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Skull Kap Studios',
  password: 'bashyadatabase',
  port: 5432,
  searchPath: ['public']
});

module.exports = pool;
