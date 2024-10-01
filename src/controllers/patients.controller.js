const patientsController = {};

const Patient = require('../models/Patient');


patientsController.renderPatientForm = (req, res) => {
    res.render('patient/new-patient');
};


patientsController.createNewPatient = async (req, res) => {
    const {nombre, apellidos, numeroIdentificacion, email, direccion, pais, observaciones} = req.body;
    const newPatient = new Patient({nombre, apellidos, numeroIdentificacion, email, direccion, pais, observaciones});
    newPatient.user = req.user.id;
    await newPatient.save();
    req.flash('success_msg', 'Paciente agregado correctamente');
    res.redirect('/patients');
};


patientsController.renderPatients = async(req, res) => {
    const patients = await Patient.find({user: req.user.id}).lean();
    res.render('patient/all-patients', {patients});
};


patientsController.renderEditForm = async(req, res) => {
    const patient = await Patient.findById(req.params.id).lean();
    if (patient.user != req.user.id) {
        req.flash('error_msg', 'No autorizado');
        return res.redirect('/patients');
      }
    res.render('patient/edit-patient', {patient});
    console.log("editando Paciente");
};


patientsController.updatePatient = async (req, res) => {
    const {nombre, apellidos, numeroIdentificacion, email, direccion, pais, observaciones} = req.body;
    await Patient.findByIdAndUpdate(req.params.id, {nombre, apellidos, numeroIdentificacion, email, direccion, pais, observaciones}).lean();
    req.flash('success_msg', 'Paciente actualizado correctamente');
    res.redirect('/patients');
};



patientsController.deletePatient = async(req, res) => {
    req.flash('success_msg', 'Paciente eliminado correctamente');
    await Patient.findByIdAndDelete(req.params.id);
    res.redirect('/patients');
    
};

module.exports = patientsController;
