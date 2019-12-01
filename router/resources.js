const router = require("express").Router();

const dataBase = require("../data/resourceModel");

router.get("/", (req, res) => {
  dataBase
    .find(req.query)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Post information could not be retreived"
      });
    });
});

router.post("/", (req, res) => {
  if (!req.body) {
    res.status(200).json({ message: "missing a body" });
  } else {
    dataBase
      .add(req.body)
      .then(hub => {
        res.status(201).json(hub);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: "Error adding the hub"
        });
      });
  }
});

module.exports = router;
