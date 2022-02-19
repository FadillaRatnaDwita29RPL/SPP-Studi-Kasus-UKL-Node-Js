'use strict' //hanya menjalankan data di file ini saja

const express = require('express')
const sppcontroller = require('../controllers/spp.controller')
const router =  new express.Router();

router.get("/", sppcontroller.read)
router.post("/", sppcontroller.add)
router.get("/:id", sppcontroller.get)
router.put("/:id", sppcontroller.edit)
router.delete("/:id", sppcontroller.delete)


module.exports = router