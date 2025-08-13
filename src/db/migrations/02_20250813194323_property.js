/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('property', (table) => {
            table.increments('id').primary(),
            table.string('description', 255).notNullable(),
            table.integer('cod_property', 8).notNullable(),
            table.integer('type_property_id').unsigned().references('id').inTable('property').onDelete('SET NULL').onUpdate('CASCADE').notNullable()
        }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('property') 
};


