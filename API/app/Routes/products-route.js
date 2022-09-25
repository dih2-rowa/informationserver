/* eslint-disable prettier/prettier */
const express = require('express');

const router = express.Router();
const ProductsController = require('../Controller/products-controller');
const UploadController = require('../Controller/upload.controller');


router.post("/upload", UploadController.upload);
router.get("/getImage/:name", UploadController.getImage);
router.get("/product:id", ProductsController.getproduct);
router.delete("/:id", ProductsController.deleteProduct);
router.get("/get", ProductsController.getProducts)
router.get("/Pages", ProductsController.getProductsWithOrders);






module.exports = router;