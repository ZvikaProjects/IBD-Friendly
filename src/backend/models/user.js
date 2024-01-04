const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

/// create collection user2.
const user2Schema = mongoose.Schema({
    name: { type: String, requred: true, minlength: 2, maxlength: 255 },
    email: { type: String, minlength: 5, maxlength: 255, required: true, unique: true },
    password: { type: String, minlength: 5, maxlength: 255, required: true },
    isAdmin: String
});

const User = mongoose.model('users', user2Schema);


/// create validateUser2 function.
function validateUser2(user) {
    const schema = {
        name: Joi.string().min(2).max(55).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        isAdmin: Joi.boolean()
    };
    return Joi.validate(user, schema);
}

/// create generateTken function which create a token for user.
User.prototype.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
}


exports.validate = validateUser2;
exports.User = User;