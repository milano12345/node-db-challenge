exports.up = function(knex) {
  return knex.schema.createTable("resources", tbl => {
    tbl.increments("id");

    tbl.text("title", 30).notNullable();
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
  return knex.schema.dropTableIfExists("resources");
};
