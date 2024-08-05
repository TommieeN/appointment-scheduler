/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("employee", (table) => {
    table.increments("employee_id").primary();
    table.string("first_name", 50).notNullable();
    table.string("last_name", 50).notNullable();
    table.string("phone_number", 20).notNullable().unique();
    table.string("email", 255).notNullable().unique();
    table
      .integer("service_id")
      .unsigned()
      .notNullable()
      .references("service_id")
      .inTable("service")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("employee");
};
