const patientsController = {};

const Patient = require('../models/Patient');


patientsController.renderPatientForm = (req, res) => {
    res.render('patient/new-patient');
};


patientsController.createNewPatient = async (req, res) => {
    const {nombre, apellidos, numeroIdentificacion, email, direccion, pais, observaciones} = req.body;
    const newPatient = new Patient({nombre, apellidos, numeroIdentificacion, email, direccion, pais, observaciones});
    await newPatient.save();
    res.redirect('/patients');
};


patientsController.renderPatients = async(req, res) => {
    const patients = await Patient.find().lean();
    res.render('patient/all-patients', {patients});
};


patientsController.renderEditForm = (req, res) => {
    res.render('patient/edit-patient')
};


patientsController.updatePatient = (req, res) => {
    res.send('update');
};



patientsController.deletePatient = async(req, res) => {
    await Patient.findByIdAndDelete(req.params.id);
    res.redirect('/patients');
    
};

module.exports = patientsController;
