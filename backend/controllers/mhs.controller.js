const db = require("../models");
const mhs = db.mhs;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const dataMhs = {
    nama_mhs: req.body.nama_mhs,
    umur_mhs: req.body.umur_mhs,
  };

  mhs.create(dataMhs)
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
  const nama_mhs = req.query.nama_mhs;
  var condition = nama_mhs ? { nama_mhs: { [Op.like]: `%${nama_mhs}%` } } : null;

  mhs.findAll({ where: condition })
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

  mhs.destroy({
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
