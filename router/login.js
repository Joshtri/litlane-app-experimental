const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const loginController = require('../controllers/loginController');
const db = require('../utils/database');


router.get('/login', loginController.login_Page);
router.post('/post_login', loginController.loginUser);

router.get('/signup',(req,res)=>{
    res.render('signup');
})

router.post('/post_signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the user into the database
        const insertQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.query(insertQuery, [username, hashedPassword], (err, result) => {
            if (err) throw err;
            console.log('User registered:', result);
            res.send('Sign up successful');
        });
    } catch (error) {
        console.error('Error during sign up:', error);
        res.status(500).send('Internal server error');
    }
});


router.get('/header', (req,res)=>{
    res.render('header');
})

router.get('/contact', (req,res)=>{
    res.render('contact');
})

module.exports = router;



