'use strict' //hanya menjalankan data di file ini saja

const express = require('express')
const siswacontroller = require('../controllers/siswa.controller')
const router =  new express.Router();

router.get("/", siswacontroller.read)
router.post("/", siswacontroller.add)
router.get("/:nisn", siswacontroller.get)
router.put("/:nisn", siswacontroller.edit)
router.delete("/:nisn", siswacontroller.delete)


module.exports = router