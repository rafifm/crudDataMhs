module.exports = (sequelize, Sequelize) => {
  const nilai = sequelize.define("nilai", {
    nilai_mhs: {
      type: Sequelize.STRING
    }
  });

  return nilai;
};