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
router.put('/admin/updateMovie',   adminController.updateMovieRecord)
router.get('/admin/listMovies',    adminController.getAllMovieRecords)



module.exports = router;
