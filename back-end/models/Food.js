var mongoose = require('mongoose')


var FoodSchema = new mongoose.Schema({
    Name: {
        type: String,
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true,
    },
    Price: {
        type: Number,
        unique: true,
        required: [true, "can't be blank"],
        index: true,
    },
    Calories: {
        type: Number,
        unique: true,
        required: [true, "can't be blank"],
        index: true,

    },
    Category: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true,
    },
}, {timestamps: true});

mongoose.model('Food', FoodSchema);