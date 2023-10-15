
const db = require('../utils/database');


/*

saya menambahkan beberapa fungsi untuk genre meskipun didalam file kontroller buku.
dengan alasan karena controller genre sedikit saja.

*/

exports.bukuTambah_Page = (req,res)=>{

    const titlePage = "Tambah Buku"
    const readQuery = 'SELECT * FROM genre_buku';

    db.query(readQuery, (err,results)=>{
        if(err){
            res.status(500).send(err);
        }

        else if(!err){
            res.render('add_buku',{
                notifSuksesInsertGenre : false,
                titlePage,
                dataGenre : results,
                notifSuksesDelete : false
            });
        }
    })



}

exports.buku_Page = (req,res)=>{
    const titlePage = "Data Buku";

    const readQuery = 'SELECT * FROM buku';

    db.query(readQuery, (err,results)=>{
        if(err){
            res.status(500).send(err);
        }

        else if(!err){
            res.render('data_buku',{
                titlePage,
                dataBuku : results,

                /* kondisi notifikasi */
                notifSuksesDelete: false
            });
        }
    })
}

//digunakan untuk posting buku
exports.postBuku = (req,res)=>{
    const bukuFields = {
        judul_buku : req.body.judul_buku,
        pengarang : req.body.pengarang,
        genre_buku : req.body.genre_buku,
        harga : req.body.harga,
        stock : req.body.stock,
    }


    const insertQuery = "INSERT INTO buku SET ?"

    db.query(insertQuery,bukuFields,(err,results)=>{
        if(err){
            throw err;
        }

        else if(!err){
            res.send('sukses sending');
        }
    });
}



/* kontroller genre */

exports.postGenre = (req,res)=>{
    const genreFields = {
        genre_buku : req.body.genre_buku
    }

    const insertQuery = "INSERT INTO genre_buku SET ?"


    db.query(insertQuery, genreFields, (err,results)=>{
        if(err){
            throw err;
        }

        else if(!err){
            res.render('add_buku',{
                titlePage : "Tambah Buku",
                dataGenre : results,
                notifSuksesInsertGenre : true,
                notifSuksesDelete  : false

            });
        }
    });
}


exports.deleteGenre = (req,res)=>{
    const id_genre = req.body.id_genre;

    const deleteQuery = "DELETE FROM genre_buku WHERE id_genre = ?";

    db.query(deleteQuery,[id_genre], (err,results)=>{
        if(err){
            throw err; 
        }

        else if(!err){
            // res.send("finally success");
            res.render('add_buku',{
                titlePage : "Tambah Buku",
                dataGenre : results,
                notifSuksesInsertGenre : false, 
                notifSuksesDelete:true
            });
        }
    })
}

exports.deleteBuku = (req,res)=>{
    const id_buku = req.body.id_buku;

    const deleteQuery = "DELETE FROM buku WHERE id_buku = ?";

    db.query(deleteQuery,[id_buku], (err,results)=>{
        if(err){
            throw err; 
        }

        else if(!err){

            res.render('data_buku',{
                titlePage : "Data Buku",
                dataBuku : results,
               
                /* kondisi notifikasi */
                notifSuksesDelete: true
            });
            // res.send("finally success");
        }
    })
}

// exports.modalBukuRead = (req,res)=>{

    







    
// };