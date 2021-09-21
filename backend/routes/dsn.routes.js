module.exports = app => {
  const dsn = require("../controllers/dsn.controller");

  var router = require("express").Router();

  router.post("/", dsn.create);
  router.get("/", dsn.findAll);
  router.put("/:id", dsn.update);
  router.delete("/:id", dsn.delete);

  app.use('/api/dsn', router);
};