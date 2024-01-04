const mongoose = require("mongoose");
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

/// create schema for user info
const infoSchema = mongoose.Schema({
    userId: { type: String, required: true },
    blackList: { type: Array, required: true, default: [] },
    whiteList: { type: Array, required: true, default: [] },
    recipe: { type: Array, required: true, default: [] }
});

const UserInfo = mongoose.model('userInfo', infoSchema);

/// create validation function
function validateInfo(info) {
    const schema = {
        userId: Joi.objectId().required(),
        blackList: Joi.array(),
        whiteList: Joi.array(),
        recipe: Joi.array()
    }
    return Joi.validate(info, schema);
}

exports.validate = validateInfo;
exports.UserInfo = UserInfo;

