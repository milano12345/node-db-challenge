exports.up = function(knex) {
  return knex.schema.createTable("resources", function(resources) {
    resources.increments("id");

    resources.text("title", 30).notNullable();
    resources
      .integer("ProjectID")
      .references("id")
      .inTable("projects")
      .notNull()
      .onDelete("cascade");
    resources.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resources");
};
