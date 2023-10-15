

const bcrypt = require('bcrypt');
const db = require('../utils/database');

exports.login_Page = (req,res)=>{
    const titlePage = "Login Page";
    res.render('login',{
        titlePage
    });
}

exports.loginUser = (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    

    if (username && password) {
        db.query('SELECT * FROM admin WHERE username = ?', [username],  (err, results) => {
            if (err) throw err;

            if (results.length > 0) {
                const match =  bcrypt.compare(password, results[0].password);
                if (match) {
                    // req.session.loggedin = true;


                    req.session.userData = {
                        username : results[0].username,
                        loggedin : true
                    }
                    res.redirect('/dashboard');
                    // res.send('berhasil asu')
                } else {
                    res.send('Incorrect username and/or password');
                }
            } else {
                res.send('Username not found');
            }
        });
    } else {
        res.send('Please enter username and password');
    }
}