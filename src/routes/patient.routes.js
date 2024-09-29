const {Router} = require ('express')
const router = Router()

const {
    renderPatientForm,
    createNewPatient,
    renderPatients,
    renderEditForm,
    updatePatient,
    deletePatient
} = require('../controllers/patients.controller');


// New Patient
router.get('/patients/add', renderPatientForm);
router.post('/patients/new-patient', createNewPatient);

// Get all Patients
router.get('/patients', renderPatients);


// Update Patient
router.get('/patients/edit/:id', renderEditForm);
router.put('/patients/edit/:id', updatePatient);


// Delete Patient
router.delete('/patients/delete/:id', deletePatient); 

module.exports = router;


