const patientsController = {};

const Patient = require('../models/Patient');


patientsController.renderPatientForm = (req, res) => {
    res.render('patients/new-patient');
};


patientsController.createNewPatient = (req, res) => {
    res.send('create');
};


patientsController.renderPatients = (req, res) => {
    res.send('patients');
};


patientsController.renderEditForm = (req, res) => {
    res.send('edit');
};


patientsController.updatePatient = (req, res) => {
    res.send('update');
};



patientsController.deletePatient = (req, res) => {
    res.send('delete');
};

module.exports = patientsController;
