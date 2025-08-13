/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('payment', (table) => {
        table.increments('id').primary(),
        table.float('payment_value', 8, 2).notNullable,
        table.date('payment_date').notNullable,
        table.integer('property_id').unsigned().references('id').inTable('property').onDelete('CASCADE').onUpdate('CASCADE').notNullable(),
        table.timestamps(true, true)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('payment') 
}
