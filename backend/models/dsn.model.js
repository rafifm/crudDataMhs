module.exports = (sequelize, Sequelize) => {
  const dsn = sequelize.define("dosen", {
    nama_dsn: {
      type: Sequelize.STRING
    },
    umur_dsn: {
      type: Sequelize.STRING
    }
  });

  return dsn;
};