var express = require('express');
var router = express.Router();
const usersController = require('../api/controller/usersController');
const adminController = require('../api/controller/adminController');

/* --------Users routes------------------ */

router.post('/signUp', usersController.signUp)
router.post('/login',  usersController.login)

/* --------Admin routes------------------ */

router.post('/admin/addMovie',     adminController.addMovieRecord)
router.post('/admin/delMovie',     adminController.deleteMovieRecord)
router.post('/admin/updateMovie',  adminController.updateMovieRecord)



module.exports = router;
