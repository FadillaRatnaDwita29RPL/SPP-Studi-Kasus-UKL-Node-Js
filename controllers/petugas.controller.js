'use strict'

const db = require('../db')

module.exports = {
    read: (req, res) =>{
        const sql = "select * from petugas"
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil menampilkan data",
                data: result
            })
        })
    },

    add: (req, res) =>{
        const username = req.body.username
        const password = req.body.password
        const nama_petugas = req.body.nama_petugas
        const level = req.body.level
        const gender = req.body.gender
        const alamat = req.body.alamat
        const tlp = req.body.tlp
        const sql =  `insert into petugas (username, password, nama_petugas, level, gender, alamat, no_tlp) values ('${username}','${password}','${nama_petugas}', '${level}','${gender}','${alamat}','${tlp}')`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil menambahkan data"
            })
        })
    },

    get: (req, res) =>{
        const id = req.params.id
        const sql =  `select * from petugas where id_petugas = '${id}'`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                result
            })
        })
    },
    // `insert into petugas (username, password, nama_petugas, level, gender, alamat, no_tlp) values
    //  ('${username}','${password}','${nama_petugas}', '${level}','${gender}','${alamat}','${tlp}')`

    edit: (req, res) =>{
        const id = req.params.id
        const username = req.body.username
        const password = req.body.password
        const nama_petugas = req.body.nama_petugas
        const level = req.body.level
        const gender = req.body.gender
        const alamat = req.body.alamat
        const tlp = req.body.tlp
        const sql = `update petugas set username='${username}',password='${password}', nama_petugas='${nama_petugas}', level='${level}', gender='${gender}', alamat='${alamat}', no_tlp='${tlp}' where id_petugas='${id}'`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil mengubah data"
            })
        })
    },

    delete: (req, res) =>{
        const id = req.params.id
        const sql = `delete from petugas where id_petugas='${id}'`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil menghapus data"
            })
        })
    }



   

    
}