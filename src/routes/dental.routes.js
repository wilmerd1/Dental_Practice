const {Router} = require('express')
const router = Router();

const {renderDentalForm,
    createNewdental,
    renderDental,
    renderEditForm, 
    updateDental, 
    deleteDental
    } = require('../controllers/dental.controller');



// New Dental
router.get('/dental/add', renderDentalForm);
router.post('/dental/add', createNewdental);


// Get All Dental
router.get('/dental/', renderDental);

// update dental

router.get('/dental/edit/:id', renderEditForm);
router.put('/dental/edit/:id', updateDental);

// delete Dental

router.delete('/dental/delete/:id', deleteDental)


module.exports = router;