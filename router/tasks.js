const express = require("express");

const Hub = require("../data/db");

const router = express.Router();

router.get("/", (req, res) => {
  Hub.find(req.query)
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
  Hub.add(req.body)
    .then(hub => {
      res.status(201).json(hub);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error adding the hub"
      });
    });
});
