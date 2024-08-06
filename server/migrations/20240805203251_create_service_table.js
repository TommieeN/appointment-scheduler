/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("service", (table) => {
    table.increments("service_id").primary()
    table.string("service_name", 50)
    table.string("description", 200)
    table.double("price")
    table.integer("duration_minutes")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("service");
};
