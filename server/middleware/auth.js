const { json } = require('express/lib/response');
const { User } = require('../models/User');

let auth = (req, res, next) => {
    //인증처리
    let token = req.cookies.x_auth;

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        else if (!user) return res.json({ isAuth: false, error: true })

        req.token = token;
        req.user = user;
        next();
    });

}
module.exports = { auth }