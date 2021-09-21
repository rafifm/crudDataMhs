module.exports = app => {
  const mhs = require("../controllers/mhs.controller");

  var router = require("express").Router();

  router.post("/", mhs.create);
  router.get("/", mhs.findAll);
  router.put("/:id", mhs.update);
  router.delete("/:id", mhs.delete);

  app.use('/api/mhs', router);
};