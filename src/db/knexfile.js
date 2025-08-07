/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'gaspar',
        password: 'null',
        database: 'imobiliaria'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './migrations'
    },
    seeds: {
        directory: './seeds'
    }
};