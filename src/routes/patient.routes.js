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

const {isAuthenticated} = require('../helpers/auth');

// New Patient
router.get('/patient/add',isAuthenticated, renderPatientForm);
router.post('/patient/new-patient', isAuthenticated,createNewPatient);

// Get all Patients
router.get('/patients/',isAuthenticated, renderPatients);


// Update Patient
router.get('/patient/edit/:id', isAuthenticated, renderEditForm);
router.put('/patient/edit/:id', isAuthenticated, updatePatient);


// Delete Patient
router.delete('/patient/delete/:id', isAuthenticated, deletePatient); 

module.exports = router;


