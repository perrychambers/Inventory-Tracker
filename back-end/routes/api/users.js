var mongoose = require('mongoose')
var router = require('express').Router()
var User = mongoose.model('User')

router.get('/user', function(req, res, next){
    User.findById(req.payload.id).then(function(user){
      if(!user){ return res.sendStatus(401); }
  
      return res.json({user: user});
    }).catch(next);
  });

router.get('/users', function(req, res, next){
    User.find({}, function(err, users) {
            var userMap = {}

            users.forEach(function(user){
                userMap[user.id] = user
            })

            res.send(userMap);
    })
})  

router.post('/newuser', function (req, res, next) {
    var user = new User();

    console.log(req.body)

    user.username = req.body.user.username;
    user.email = req.body.user.email;
    user.setPassword(req.body.user.password);

    user.save().then(function() {
        return res.json({user: user})
    }).catch(next);
})

module.exports = router;