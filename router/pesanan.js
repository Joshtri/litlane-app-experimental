const express = require('express');
const router = express.Router();
const pesananController = require('../controllers/pesananController');

router.get('/data_pesanan', pesananController.pesanan_Page);
router.get('/tambah_pesanan', pesananController.tambahPesanan_Page);


module.exports = router;