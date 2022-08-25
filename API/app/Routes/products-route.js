/* eslint-disable prettier/prettier */
const express = require('express');

const router = express.Router();
const ProductsController = require('../Controller/products-controller');



router.get("/product:id", ProductsController.getproduct);

router.get("/get", ProductsController.getProducts);




module.exports = router;