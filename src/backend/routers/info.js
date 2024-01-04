const express = require('express');
const mongoose = require('mongoose');
const { User } = require('../models/user');
const { UserInfo, validate } = require('../models/info');
const router = express.Router();


const NotFoundMessage = 'Invalid Id.'

/// info API: 

/// get information of user using is id.
router.get('/:id', async (req, res) => {

    const userInfo = await UserInfo.find({userId:req.params.id});
    if (!userInfo) return res.status(404).send(NotFoundMessage);
    res.send(userInfo);
});


/// create new information of new user.
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findById(req.body.userId);
    if (!user) return res.status(404).send(NotFoundMessage);

    user = await UserInfo.findOne({ userId: req.body.userId });
    if (user) return res.status(400).send('user information already exist');

    userInfo = new UserInfo({
        userId: req.body.userId,
        blackList: req.body.blackList,
        whiteList: req.body.whiteList,
        recipe: req.body.recipe
    })
    try {
        await userInfo.save();
        res.send(userInfo);
    }
    catch (e) {
        for (field in e.errors)
            console.log(e.errors[field].message);
    }
});

/// update information of user.
router.put('/:id', async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const userInfo = await UserInfo.findByID(req.params.id);
    if (!userInfo) return res.status(404).send(NotFoundMessage);

    if (req.body.userId !== userInfo.userId) // checks that the user does not try to update another user.
        return res.status(400).send('id of user does not match to user information id');


    try {
        const updatedInfo = await UserInfo.findByIdAndUpdate(req.body.userId, {
            userId: req.body.userId,
            blackList: req.body.blackList,
            whiteList: req.body.whiteList,
            recipe: req.body.recipe
        },
            { new: true });
        res.send(updatedInfo);
    }
    catch (e) {
        for (field in e.errors)
            console.log(e.errors[field].message);
    }
});

/// delete information of user.
router.delete('/:id', async (req, res) => {
    const delitedUser = UserInfo.findByIDAndRemove(req.params.id);
    if (!delitedUser) return res.status(404).send(NotFoundMessage);
    res.send(delitedUser)
});



module.exports = router;