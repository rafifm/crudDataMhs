const db = require("../models");
const dsn = db.dsn;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.nama_dsn) {
    res.status(400).send({
      message: "Data tidak bisa kosong!"
    });
    return;
  }

  const datadsn = {
    nama_dsn: req.body.nama_dsn,
    umur_dsn: req.body.umur_dsn,
  };

  dsn.create(datadsn)
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
  const nama_dsn = req.query.nama_dsn;
  var condition = nama_dsn ? { nama_dsn: { [Op.like]: `%${nama_dsn}%` } } : null;

  dsn.findAll({ where: condition })
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

  dsn.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "data dosen telah diupdate."
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

  dsn.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "data dosen telah didelete"
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