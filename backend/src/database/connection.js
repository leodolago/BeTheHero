const knex = require('knex');
const config = require('../../knexfile');

const connecion = knex(config.development);

module.exports = connecion;