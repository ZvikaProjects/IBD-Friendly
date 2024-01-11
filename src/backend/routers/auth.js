const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const Joi = require('joi');
const express = require('express');
const router = express.Router();
const { User } = require('../models/user');


/// validate function
function validate(user) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().required()
    }
    return Joi.validate(user, schema);
}



router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password');
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) return res.status(400).send('invalid email or password');
    const token = user.generateAuthToken();
    res.send(token);
    //res.send(user);




});


module.exports = router;