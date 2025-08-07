const knex = require("knex")
const knexfle = require('./knexfile')

const db = knex(knexfle.development)

module.exports = db