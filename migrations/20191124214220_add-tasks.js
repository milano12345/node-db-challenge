exports.up = function(knex) {
  return knex.schema.createTable("tasks", function(tasks) {
    tasks.increments("id");
    tasks.string("title", 30).notNullable();
    tasks
      .integer("ProjectID")
      .references("id")
      .inTable("projects")
      .notNull()
      .onDelete("cascade");
    tasks.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
