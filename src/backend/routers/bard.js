const express = require('express');
const  {validate } = require( '../models/bard');
const bardServices = require( '../services/bard');
const router = express.Router();

// import the Userinfo router for taking information about the user.
const { UserInfo} = require('../models/info');
const NotFoundMessage = "Not found";
const InvalidMessage = "The data was given is invalid!!!";

// router for genarate recipe for the user consider its White and Black lists.
router.post('/recipe/:id',async(req,res)=>{
    let text="";
    const {error} = validate(req.body);
    if (error) return res.status(400).send(InvalidMessage);
    let usedRecipes = [];
    const userInfo = await UserInfo.findOne({userId:req.params.id});
    if (!userInfo) return res.status(404).send(NotFoundMessage);
        req.body.text = "Give me one recipe every request.Try to use ingredients from the whitelist and add more ingredients if needed, but you must not use ingredients from the blacklist. do not give me recipe from the list: ",usedRecipes+userInfo;
        const response = await bardServices.createRecipe(req.body);
        usedRecipes = [...usedRecipes,response];
        return res.send(response);

});


// router for chating with Palm Ai
router.post('/ask',async(req,res)=>{
    let text="";
    const {error} = validate(req.body);
    if (error) return res.status(400).send(InvalidMessage);
    const response = await bardServices.createRecipe(req.body);
    res.send(response);
});

module.exports = router;