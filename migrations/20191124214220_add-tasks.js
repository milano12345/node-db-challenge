exports.up = function(knex) {
  return knex.schema.createTable("tasks", tbl => {
    tbl.increments("id");
    tbl.string("title", 30).notNullable();
    tbl
      .integer("projectID")
      .references("id")
      .inTable("projects")
      .notNull()
      .onDelete("cascade");
    tbl
      .integer("completed")
      .notNull()
      .defaultTo(false);
    tbl.text("notes", 50).notNullable();
    tbl.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
