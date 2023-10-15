const db = require('../utils/database');
const nodemailer = require('nodemailer');

exports.pelanggan_Page = (req,res)=>{
    const titlePage = "Data Pelanggan";


    const readQuery = "SELECT * FROM pelanggan"; 

    db.query(readQuery, (err,results)=>{
        if(err){
            throw err;
        }
        else if(!err){
            res.render('data_pelanggan',{
                titlePage,
                dataPelanggan : results,

                notifSuksesDelete : false
            });
        }
    });
}


exports.tambahPelanggan_Page = (req,res)=>{

    const titlePage = "Tambah Pelanggan";

    res.render('add_pelanggan', {
        titlePage
    })

}


exports.postPelanggan = (req,res)=>{
    const titlePage = "Data Pelanggan";

    const pelangganFields = {
        nama_pelanggan : req.body.nama_pelanggan,
        alamat : req.body.alamat,
        email_pelanggan : req.body.email_pelanggan
    }

    const insertQuery = "INSERT INTO pelanggan SET ?"

    db.query(insertQuery,pelangganFields, (err,results)=>{
        if(err){
            throw err;
        }

        else if(!err){
            res.send('sukses')
            titlePage
        }
    });

}


exports.deletePelanggan = (req,res)=>{
    const id_pelanggan = req.body.id_pelanggan;


    const deleteQuery = "DELETE FROM pelanggan WHERE id_pelanggan = ?";

    db.query(deleteQuery, [id_pelanggan], (err,results)=>{
        if(err){
            throw err; 
        }
        else if(!err){
            // res.send('sukses')
            res.render('data_pelanggan',{
                titlePage : "Data Pelanggan",
                dataPelanggan : results, 

                /*notif  kondisi */
                notifSuksesDelete : true
            })
        }
    })
}