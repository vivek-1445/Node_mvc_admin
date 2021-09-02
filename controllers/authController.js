const usermodel = require('../models/user')


module.exports.login = function(req,res){
    return res.render('auth/login');
}
module.exports.register = function(req,res){
    return res.render('auth/register');
}
module.exports.saveData = function(req,res){
    usermodel.create({
        username : req.body.username,
        email : req.body.email,
        country : req.body.country,
        password : req.body.password,
    },function(err ,user){
        if(err){
            console.log('somthing went wrong in create user');
            return;
        }
        return res.redirect('auth');
    })
}

