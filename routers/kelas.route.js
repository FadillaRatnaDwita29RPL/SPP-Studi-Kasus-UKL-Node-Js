'use strict' //hanya menjalankan data di file ini saja

const express = require('express')
const kelascontroller = require('../controllers/kelas.controller')
const router =  new express.Router();

router.get("/", kelascontroller.read)
router.post("/", kelascontroller.add)
router.get("/:id", kelascontroller.get)
router.put("/:id", kelascontroller.edit)
router.delete("/:id", kelascontroller.delete)


module.exports = router