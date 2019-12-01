const db = require("./dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("tasks");
}

function findById(id) {
  return db("tasks").where({ id: Number(id) });
}

function add(post) {
  return db("tasks")
    .insert(post)
    .then(ids => ({ id: ids[0] }));
}

function update(id, post) {
  return db("tasks")
    .where("id", Number(id))
    .update(post);
}

function remove(id) {
  return db("tasks")
    .where("id", Number(id))
    .del();
}
