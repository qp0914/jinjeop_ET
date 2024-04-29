var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var authData = {
    email: 'egoing777@gmail.com',
    password: '111111',
    nickname: 'egoing'
};

passport.serializeUser(function (user, done) {
    done(null, user.email);
});

passport.deserializeUser(function (email, done) {
    if (email === authData.email) {
        done(null, authData);
    } else {
        done(new Error('User not found'));
    }
});

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'pwd'
    },
    function (email, password, done) {
        if (email === authData.email) {
            if (password === authData.password) {
                return done(null, authData, { message: 'Welcome.' });
            } else {
                return done(null, false, { message: 'Incorrect password.' });
            }
        } else {
            return done(null, false, { message: 'Incorrect email.' });
        }
    }
));

module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    app.post('/auth/login_process', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));
};
