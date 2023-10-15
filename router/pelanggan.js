const express = require('express');
const router = express.Router();
const pelangganController = require('../controllers/pelangganController');


router.get('/data_pelanggan', pelangganController.pelanggan_Page);
router.get('/tambah_pelanggan', pelangganController.tambahPelanggan_Page);


router.post('/post_pelanggan', pelangganController.postPelanggan);

router.post('/delete_pelanggan', pelangganController.deletePelanggan);


module.exports = router;