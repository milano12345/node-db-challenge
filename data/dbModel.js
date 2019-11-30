const db = require("./dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("posts").where({ id: Number(id) });
}

function add(post) {
  return db("projects")
    .insert(post)
    .then(ids => ({ id: ids[0] }));
}

function update(id, post) {
  return db("posts")
    .where("id", Number(id))
    .update(post);
}

function remove(id) {
  return db("posts")
    .where("id", Number(id))
    .del();
}
