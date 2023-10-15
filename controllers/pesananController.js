exports.pesanan_Page = (req,res)=>{
    const titlePage = "Data Pesanan";
    res.render('data_pesanan',{
        titlePage,

        notifSuksesDelete : false
    });
};



exports.tambahPesanan_Page = (req,res)=>{

    const titlePage = "Tambah Pesanan";

    res.render('add_pesanan',{
        titlePage
    })
}