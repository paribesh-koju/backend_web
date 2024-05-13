const router = require('express').Router();
const productController = require('../controllers/productcontroller')

//Makea  create user API
router.post('/create', productController.createProduct)


// exporitng
module.exports = router;