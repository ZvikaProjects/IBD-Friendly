const Joi = require('joi');


const createRecipe = async(req, res) => {
    req.body.text =  req.body.text + req.body.language;
    const response = await bardServices.createRecipe(req.body)
    res.send(response); 
}


function validateBard (body){
    const schema = {
        text:Joi.string().required(),
    };
    return Joi.validate(body,schema);
} 

exports.createRecipe =   createRecipe;
exports.validate = validateBard;