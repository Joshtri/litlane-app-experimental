const express = require('express');
const router = express.Router();
const bukuController = require('../controllers/bukuController');


router.get('/tambah_buku', bukuController.bukuTambah_Page);
router.get('/data_buku', bukuController.buku_Page);


router.post('/post_buku', bukuController.postBuku);
router.post('/delete_buku', bukuController.deleteBuku);



//untuk genre
router.post('/post_genre', bukuController.postGenre);
router.post('/delete_genre', bukuController.deleteGenre);

module.exports = router;