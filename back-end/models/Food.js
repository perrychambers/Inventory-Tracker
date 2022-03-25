var mongoose = require('mongoose')


var FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        unique: true, 
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z]+$/, 'is invalid'], 
        index: true,
    },
    price: {
        type: Number,
    },
    calories: {
        type: Number,
    },
    category: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    },
}, {timestamps: true});

mongoose.model('Food', FoodSchema);