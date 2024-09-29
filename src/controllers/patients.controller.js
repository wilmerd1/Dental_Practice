const patientsController = {};

const Patient = require('../models/Patient');


patientsController.renderPatientForm = (req, res) => {
    res.render('patient/new-patient');
};


patientsController.createNewPatient = (req, res) => {
    const {tipoPaciente, nombre, apellidos, tipoIdentificacion, numeroIdentificacion, fechaNacimiento,sexo, email, direccion, pais, estadoCivil, observaciones} = req.body;
    const newPatient = new Patient({tipoPaciente, nombre, apellidos, tipoIdentificacion, numeroIdentificacion, fechaNacimiento,sexo, email, direccion, pais, estadoCivil, observaciones});
    console.log(newPatient);
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
