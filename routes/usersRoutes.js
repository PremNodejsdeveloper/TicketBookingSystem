var express = require('express');
var router = express.Router();
const usersController = require('../api/controller/usersController');
const adminController = require('../api/controller/adminController');

/* --------Users routes------------------ */

router.post('/signUp',       usersController.signUp)
router.post('/login',        usersController.login)
router.get('/listMovies',    usersController.getAllMovies)
router.post('/searchMovies', usersController.searchForMovie)


/* --------Admin routes------------------ */

router.post('/admin/addState',        adminController.addStateRecord)
router.post('/admin/addCity',         adminController.addCityRecord)
router.post('/admin/addCinema',       adminController.addCinemaRecord)
router.post('/admin/addCinemaHall',   adminController.addCinemaHallRecord)
router.post('/admin/addSeats',        adminController.addSeatsRecord)
router.post('/admin/addSeatsInfo',    adminController.addSeatsInfoRecord)
router.post('/admin/showTime',        adminController.addShowTimeToHall)
router.post('/admin/newShow',         adminController.addNewMovieShow)
router.post('/admin/addMovie',        adminController.addMovieRecord)
router.post('/admin/delMovie',        adminController.deleteMovieRecord)
router.put('/admin/updateMovie',      adminController.updateMovieRecord)
router.get('/admin/listMovies',       adminController.getAllMovieRecords)
router.get('/admin/cityByName',       adminController.getCityRecord)





module.exports = router;
