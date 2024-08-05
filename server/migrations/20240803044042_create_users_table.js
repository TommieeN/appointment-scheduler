/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("customer", (table) => {
    table.increments('id').primary();
    table.string("first_name").notNullable()
    table.string("last_name").notNullable()
    table.string("phone_number").notNullable().unique()
    table.string("email").notNullable().unique();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("customer");
};
