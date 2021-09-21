module.exports = (sequelize, Sequelize) => {
  const mhs = sequelize.define("mahasiswa", {
    nama_mhs: {
      type: Sequelize.STRING
    },
    umur_mhs: {
      type: Sequelize.STRING
    }
  });

  return mhs;
};