'use strict' //hanya menjalankan data di file ini saja

const express = require('express');
const pembayaranController = require('../controllers/pembayaran.controller');
const sppcontroller = require('../controllers/pembayaran.controller')
const router =  new express.Router();

// router.get("/", sppcontroller.read)
router.post("/", pembayaranController.add)
router.get("/:nisn", pembayaranController.get)
// router.put("/:id", sppcontroller.edit)
// router.delete("/:id", sppcontroller.delete)


module.exports = router