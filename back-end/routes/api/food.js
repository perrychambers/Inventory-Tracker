var mongoose = require('mongoose')
var router = require('express').Router()
var Food = mongoose.model('Food')

router.get('/Food', function(req, res, next){
    Food.findById(req.payload.id).then(function(food){
      if(!food){ return res.sendStatus(401); }
  
      return res.json({food: food});
    }).catch(next);
  });

router.get('/foods', function(req, res, next){
    Food.find({}, function(err, food) {
            var foodMap = {}

            food.forEach(function(food){
                foodMap[food.id] = food
            })

            res.send(foodMap);
    })
})  

router.post('/newfood', function (req, res, next) {
    var food = new Food();

    console.log(req.body)

    food.name = req.body.food.name;
    food.price = req.body.food.price;
    food.calories = req.body.food.calories;
    food.category = req.body.food.category;

    food.save().then(function() {
        return res.json({food: food})
    }).catch(next);
})

module.exports = router;