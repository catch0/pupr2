let mongoose = require('mongoose');
let User = mongoose.model("User");

class UsersController {
    create(req, res){
        User.findOne({email: req.body.email},(err,user)=>{
            if(err){return res.json(err)}
            else if(!user){
                User.create(req.body,(err,user)=>{
                    if(err){return res.json(err)}
                    return res.json(user)
                })
            }
            else{
                return res.json(user)
            }
        })
    }

    logout(req, res){
       if(req.session.user_id){
           delete req.session.user_id
       }
       return res.json(true)
    }
}

module.exports = new UsersController();
