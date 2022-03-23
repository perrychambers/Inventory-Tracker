var mongoose = require('mongoose')

/**
 * Password is just stored as a string now
 * Eventually we will be storing this as an encrypted string
 * For now fuck it.
 */
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true,
        password: String
    },
    email: {
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true
    },
}, {timestamps: true});

UserSchema.methods.setPassword = function(password) {
    this.password = password
}

mongoose.model('User', UserSchema);