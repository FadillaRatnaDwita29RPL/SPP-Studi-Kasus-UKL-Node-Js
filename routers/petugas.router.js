'use strict' //hanya menjalankan data di file ini saja

const express = require('express')
const petugascontroller = require('../controllers/petugas.controller')
const router =  new express.Router();

router.get("/", petugascontroller.read)
router.post("/", petugascontroller.add)
router.get("/:id", petugascontroller.get)
router.put("/:id", petugascontroller.edit)
router.delete("/:id", petugascontroller.delete)


module.exports = router