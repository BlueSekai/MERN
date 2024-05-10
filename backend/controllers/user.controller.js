const mongoose = require("mongoose");
const db = require("../models");
const User = db.user;

exports.get = (req, res) => {
  User.find({})
    .then((users) => {
      res.send({ success: true, users });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        success: false,
        message: "Internal server error",
      });
    });
};

exports.getOne = (req, res) => {
  const { id } = req.params;
  User.findById(id).populate('archivedProjects').populate('archivedWells')
    .then((user) => {
      res.send({ success: true, user });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        success: false,
        message: "Internal server error",
      });
    });
};

exports.create = (req, res) => {};

exports.update = (req, res) => {
    User.findByIdAndUpdate(req.body.id, req.body.query, { new: true })
        .then((user) => {
          res.send(user)
        }).catch(error =>
          res.status(500).send(error.message)
        );
};

exports.delete = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (user)
        res.send({ success: true, message: 'User was deleted' })
      else
        res.send({ success: false, message: 'Not found user' })
    }).catch(err => {
      res.status(500).send(err.message)
    })
};
