const db = require("../models");
const nilai = db.nilai;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const datanilai = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  nilai.create(datanilai)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "error pembuatan data."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  nilai.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "error waktu pengambilan data."
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "data mahasiswa telah diupdate."
        });
      } else {
        res.send({
          message: `Tidak bisa update dengan id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating data dengan id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  nilai.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "data mahasiswa telah didelete"
        });
      } else {
        res.send({
          message: `tidak bisa delete dengan id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Tidak bisa delete dengan id=" + id
      });
    });
};