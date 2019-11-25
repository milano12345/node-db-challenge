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
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
