exports.up = function(knex) {
  return knex.schema.createTable("projects", function(posts) {
    projects.increments("id");
    projects
      .text("name", 30)
      .unique()
      .notNullable();
    projects.text("description", 300);
    projects
      .integer("taskID")
      .references("id")
      .inTable("tasks")
      .notNull()
      .onDelete("cascade");
    projects
      .integer("resourceID")
      .references("id")
      .inTable("resources")
      .notNull()
      .onDelete("cascade");
    projects.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
