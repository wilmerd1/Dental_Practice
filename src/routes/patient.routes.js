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
router.get('/patient/add', renderPatientForm);
router.post('/patient/new-patient', createNewPatient);

// Get all Patients
router.get('/patients/', renderPatients);


// Update Patient
router.get('/patient/edit/:id', renderEditForm);
router.put('/patient/edit/:id', updatePatient);


// Delete Patient
router.delete('/patient/delete/:id', deletePatient); 

module.exports = router;


