const dentalCtrl = {};

dentalCtrl.renderDentalForm = (req, res) => {
  res.send("dental add");
};
dentalCtrl.createNewdental = (req, res) => {
  res.send("New dental");
};
dentalCtrl.renderDental = (req, res) => {
  res.send("Show All dentals");
};
dentalCtrl.renderEditForm = (req, res) => {
  res.send("Render Edit Form");
};
dentalCtrl.updateDental = (req, res) => {
  res.send("Actualuzando Nota");
};
dentalCtrl.deleteDental = (req, res) => {
  res.send("Delete Dental");
};

module.exports = dentalCtrl;
