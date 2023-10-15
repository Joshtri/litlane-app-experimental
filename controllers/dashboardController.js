
const nodemailer = require('nodemailer');


/*

    jadi ada 2 halaman yang ada di file Controller Dashboard.
    ***
        diantaranya mailing, my_profile.
    ***
    menjadi 1 di dashboard controller karena menjadi ruang lingkup utama,
    saat user membuka sistem, masuk terlebih dulu di dashboard. dan seringkali
    secara tidak langsung membuka profile dikanan saat di dashboard. 

    serta alasan lain adalah mengurangi penambahan file controller untuk logic dan backend
    yang sederhana

*/


const dashboardTitle = "Dashboard Page";

exports.dashboard_Page = (req,res)=>{

    res.render('dashboard',{
        dashboardTitle,
   
    });   
}

exports.myprofile_Page = (req,res)=>{

    const titlePage = "My Profile";
    
    res.render('my_profile',{
        titlePage
    })
}

exports.mailing_Page = (req,res)=>{
    const titlePage = "Mailing Page";
    res.render("mailing",
    {
        titlePage
    });
};