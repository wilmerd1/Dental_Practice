const userController = {};
const User = require('../models/User');
const passport = require('passport');

userController.renderSignUpForm= (req, res) => {
    res.render('users/signup');
}

userController.signup = async (req, res) => {
    const {name, email, password, confirm_password} = req.body;
    const errors = [];
    if (password != confirm_password) {
        errors.push({text: 'Passwords do not match'});
    }
    if (password.length < 4) {
        errors.push({text: 'Password must be at least 4 characters'});
    }
    if (errors.length > 0) {
        res.render('users/signup', {errors, name, email});
    }else{
        const emailUser = await User.findOne({email: email});
            if (emailUser) {
                req.flash('error_msg', 'The email already exists');
                res.redirect('/users/signup');
            }else{
                const newUser = new User({name, email, password});
                newUser.password = await newUser.encryptPassword(password);
                newUser.save().then(() => {
                    req.flash('success_msg', 'You are registered');
                    res.redirect('/users/signin');
                }).catch((err) => {
                    console.log(err);
                });
            }
        ;
    }
   
}

userController.renderSignInForm = (req, res) => {
    res.render('users/signin');
}

userController.signin = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/signin',
    failureFlash: true
});



userController.logout = (req, res) => {
    
    req.logout( (err) => {

        if (err) { return next(err); }
        req.flash( "success_msg" , "Session cerrada" );
        res.redirect( "/users/signin" );

    });
}

module.exports = userController;