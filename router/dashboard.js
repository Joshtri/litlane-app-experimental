const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/dashboard', dashboardController.dashboard_Page);

router.get('/my_profile', dashboardController.myprofile_Page);
router.get('/mailing', dashboardController.mailing_Page);



module.exports = router;