module.exports = app => {
  const nilai = require("../controllers/nilai.controller");

  var router = require("express").Router();

  router.post("/", nilai.create);
  router.get("/", nilai.findAll);
  router.get("/:id", nilai.findOne);
  router.put("/:id", nilai.update);
  router.delete("/:id", nilai.delete);

  app.use('/api/tutorials', router);
};