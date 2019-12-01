const db = require("./dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources").where({ id: Number(id) });
}

function add(post) {
  return db("resources")
    .insert(post)
    .then(ids => ({ id: ids[0] }));
}

function update(id, post) {
  return db("resources")
    .where("id", Number(id))
    .update(post);
}

function remove(id) {
  return db("resources")
    .where("id", Number(id))
    .del();
}
