const Joi = require('joi');
function validateUser(user) {
    const schema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
  
    return schema.validate(user);
  }

  const validateUserCreation = (data) => {
    return validateUser.validate(data, { abortEarly: false });
  }
  
  module.exports = {
    validateUserCreation,
  };