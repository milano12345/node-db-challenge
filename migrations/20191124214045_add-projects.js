exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments("id");
    tbl
      .text("name", 30)
      .unique()
      .notNullable();
    tbl.text("description", 300);
    tbl
      .integer("taskID")
      .references("id")
      .inTable("tasks")
      .notNull()
      .onDelete("cascade");
    tbl
      .integer("completed")
      .notNull()
      .defaultTo(false);
    tbl
      .integer("resourceID")
      .references("id")
      .inTable("resources")
      .notNull()
      .onDelete("cascade");
    tbl.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
