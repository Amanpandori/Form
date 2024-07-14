// const Joi = require('joi');


// const Validation = (req,res,next)=>{
//     const Schema = Joi.object({
//         firstName: Joi.string().min(3).max(10).required(),
//         lastName: Joi.string().min(3).max(10).required(),
//         email: Joi.string().email().pattern([a-z]+[0-9]+"@").required(),
//         phoneNumber: Joi.number().number().lenght(10).required(),
//         country: Joi.string().min(5).max(30).required(),
//         state: Joi.string().min(3).max(10).required(),
//         city: Joi.string().min(3).max(10).required(),
//         adress: Joi.string().required(),
//         zip: Joi.string(),
//         message: Joi.string(),
//     });
//     const {error} = Schema.validate(req.body);
//     if(error){
//         return res.status(400).send(error.details[0].message);
//         }
//         next();
// }

// module.exports = Validation;