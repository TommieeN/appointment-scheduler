/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("appointment", (table) => {
    table.increments("appointment_id").primary();
    table
      .integer("customer_id")
      .unsigned()
      .notNullable()
      .references("customer_id")
      .inTable("customer")
      .onDelete("CASCADE");
    table.integer("employee_id").unsigned().notNullable().references("employee_id").inTable("employee").onDelete("CASCADE");
    table
      .integer("service_id")
      .unsigned()
      .notNullable()
      .references("service_id")
      .inTable("service")
      .onDelete("CASCADE");
    table.timestamp("appointment_date").notNullable();
    table.string("status").notNullable();
    table.text("notes");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("appointment");
};
